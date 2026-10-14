import { useState, useEffect, useRef } from 'react';
import '../styles/pizarra.css';

const MAX_LINEAS = 6;
const MS_POR_LETRA = 32;
const STORAGE_KEY = 'donuts-code:pizarra-bart';

function getInitialCommits() {
  try {
    const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(guardado)) return [];
    return guardado
      .filter((c) => c && typeof c.hash === 'string' && typeof c.texto === 'string')
      .slice(-MAX_LINEAS);
  } catch {
    return [];
  }
}

function generarHashCorto() {
  try {
    if (window.crypto && window.crypto.getRandomValues) {
      const bytes = new Uint8Array(4);
      window.crypto.getRandomValues(bytes);
      return Array.from(bytes, (b) => b.toString(16).padStart(2, '0'))
        .join('')
        .slice(0, 7);
    }
  } catch {
    // fallback
  }
  return Math.random().toString(16).slice(2, 9);
}

export default function PizarraBart() {
  const [commits, setCommits] = useState(getInitialCommits);
  const [inputText, setInputText] = useState('');
  const [msg, setMsg] = useState('Escribí un mensaje y hacé commit para que Bart lo escriba.');
  const [isWriting, setIsWriting] = useState(false);
  const [typingLine, setTypingLine] = useState(null); // { hash, visibleText, fullText }

  const typingTimerRef = useRef(null);
  const inputRef = useRef(null);
  const queueRef = useRef([]);
  const isProcessingRef = useRef(false);

  // Guardar en localStorage cuando cambian los commits completados
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(commits));
    } catch {
      // ignore storage errors
    }
  }, [commits]);

  // Limpieza al desmontar
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  const processNextInQueue = () => {
    if (queueRef.current.length === 0) {
      isProcessingRef.current = false;
      setIsWriting(false);
      setTypingLine(null);
      return;
    }

    isProcessingRef.current = true;
    setIsWriting(true);

    const nextCommit = queueRef.current.shift();
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (prefersReducedMotion) {
      setCommits((prev) => [...prev, nextCommit].slice(-MAX_LINEAS));
      setMsg(`¡Bart escribió el commit ${nextCommit.hash} en la pizarra!`);
      processNextInQueue();
      return;
    }

    // Animación letra a letra
    let charIndex = 0;
    setTypingLine({
      hash: nextCommit.hash,
      visibleText: '',
      fullText: nextCommit.texto,
    });

    const typeChar = () => {
      charIndex++;
      if (charIndex <= nextCommit.texto.length) {
        setTypingLine({
          hash: nextCommit.hash,
          visibleText: nextCommit.texto.slice(0, charIndex),
          fullText: nextCommit.texto,
        });
        typingTimerRef.current = setTimeout(typeChar, MS_POR_LETRA);
      } else {
        // Finalizó la línea
        setCommits((prev) => [...prev, nextCommit].slice(-MAX_LINEAS));
        setTypingLine(null);
        setMsg(`¡Bart escribió el commit ${nextCommit.hash} en la pizarra!`);
        processNextInQueue();
      }
    };

    typingTimerRef.current = setTimeout(typeChar, MS_POR_LETRA);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputText.trim();

    if (!trimmed) {
      setMsg('Escribí un mensaje de commit antes de hacer commit.');
      inputRef.current?.focus();
      return;
    }

    const newCommit = {
      hash: generarHashCorto(),
      texto: trimmed,
    };

    setInputText('');
    setMsg('Bart está escribiendo…');
    queueRef.current.push(newCommit);

    if (!isProcessingRef.current) {
      processNextInQueue();
    }

    inputRef.current?.focus();
  };

  const handleBorrar = () => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }
    queueRef.current = [];
    isProcessingRef.current = false;
    setIsWriting(false);
    setTypingLine(null);
    setCommits([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setMsg('Pizarrón borrado. ¡Bart puede empezar de nuevo!');
    inputRef.current?.focus();
  };

  return (
    <section className="panel pizarra-widget" aria-labelledby="pizarra-t">
      <h2 id="pizarra-t">
        <span aria-hidden="true">🖍️</span> La pizarra de Bart
      </h2>
      <p className="pizarra-intro">
        Bart está castigado y tiene que escribir en la pizarra. Escribí un mensaje de commit, hacé commit y mirá cómo lo escribe.
      </p>

      <div className="pizarra-board">
        <div className="pizarra-frame">
          <div
            className="pizarra-surface"
            id="pizarraLineas"
            role="log"
            aria-label="Pizarrón de Bart"
            aria-live="polite"
          >
            {commits.length === 0 && !typingLine && (
              <p className="pizarra-vacia">Bart todavía no hizo ningún commit…</p>
            )}

            {commits.map((c, index) => (
              <div key={`${c.hash}-${index}`} className="pizarra-line">
                <span className="pizarra-hash">{c.hash}</span>
                <span className="pizarra-text">{c.texto}</span>
              </div>
            ))}

            {typingLine && (
              <div className="pizarra-line is-typing">
                <span className="pizarra-hash">{typingLine.hash}</span>
                <span className="pizarra-text">{typingLine.visibleText}</span>
              </div>
            )}
          </div>
          <span className="pizarra-tray" aria-hidden="true"></span>
        </div>

        <img
          className={`pizarra-bart ${isWriting ? 'is-writing' : ''}`}
          src="/img/avatar-ignacio.png"
          alt="Ignacio escribiendo en el pizarrón"
        />
      </div>

      <form className="pizarra-form" id="pizarraForm" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="pizarraInput">Mensaje del commit</label>
        <div className="pizarra-fila">
          <input
            ref={inputRef}
            type="text"
            id="pizarraInput"
            maxLength={60}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="feat: agrego la pizarra de Bart"
          />
          <button type="submit" className="pizarra-commit">
            Commit
          </button>
        </div>
        <button type="button" id="pizarraBorrar" className="pizarra-borrar" onClick={handleBorrar}>
          Borrar pizarrón
        </button>
        <p className="pizarra-msg" id="pizarraMsg" aria-live="polite">
          {msg}
        </p>
      </form>
    </section>
  );
}
