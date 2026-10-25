import React, { useState, useEffect, useRef } from 'react';

export default function CelesteJuego() {
  const [puntos, setPuntos] = useState(0);
  const [tiempo, setTiempo] = useState(20);
  const [record, setRecord] = useState(0);
  const [jugando, setJugando] = useState(false);
  const [pos, setPos] = useState({ top: 20, left: 20 });
  const areaRef = useRef(null);

  const mover = () => {
    const area = areaRef.current;
    if (!area) return;
    setPos({
      top: Math.random() * (area.clientHeight - 56),
      left: Math.random() * (area.clientWidth - 56),
    });
  };

  const empezar = () => {
    setPuntos(0);
    setTiempo(20);
    setJugando(true);
    mover();
  };

  const atrapar = () => {
    setPuntos((p) => p + 1);
    mover();
  };

  useEffect(() => {
    if (!jugando) return;
    const id = setInterval(() => setTiempo((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [jugando]);

  useEffect(() => {
    if (jugando && tiempo <= 0) {
      setJugando(false);
      setRecord((r) => Math.max(r, puntos));
    }
  }, [tiempo, jugando, puntos]);

  return (
    <section className="juego" aria-labelledby="juego-t">
      <h2 id="juego-t">¡Atrapá las mamaderas de Maggie!</h2>
      <p className="juego-info">
        Puntos: <b>{puntos}</b> · Tiempo: <b>{Math.max(tiempo, 0)}</b> · Récord: <b>{record}</b>
      </p>
      <div className="juego-area" ref={areaRef}>
        {jugando && (
          <button
            type="button"
            className="juego-objetivo"
            style={{ top: pos.top, left: pos.left }}
            onClick={atrapar}
          >
            🍼
          </button>
        )}
      </div>
      <button type="button" className="juego-btn" onClick={empezar} disabled={jugando}>
        {jugando ? '¡Jugando!' : '¡Empezar!'}
      </button>
    </section>
  );
}