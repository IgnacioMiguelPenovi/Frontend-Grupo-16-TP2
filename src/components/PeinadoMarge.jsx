import { useState, useEffect } from "react";
import "../styles/peinado.css";

// Debe coincidir con el "bottom" que le diste a .hair en el CSS
const HAIR_BASE_OFFSET = 58;

// Clave bajo la que se guarda todo en localStorage
const STORAGE_KEY = "peinadoMarge";

const ALTURA_INICIAL = 180;

// Objetos que vienen escondidos de fábrica en el peinado
const OBJETOS_INICIALES = [
  { id: "base-120", emoji: "🍩", reveal: 120 },
  { id: "base-180", emoji: "🖌️", reveal: 180 },
  { id: "base-240", emoji: "🎷", reveal: 240 },
  { id: "base-300", emoji: "💯", reveal: 300 },
];

// Opciones del grupo de radios
const OPCIONES = [
  { value: "🍩", label: "🍩 Rosquilla" },
  { value: "🖌️", label: "🖌️ Pincel CSS" },
  { value: "🎷", label: "🎷 Saxofón" },
  { value: "💯", label: "💯 Nota 10" },
];

const MENSAJE_INICIAL =
  "Seleccioná un objeto para guardarlo en el peinado de Marge.";

// px -> metros (100 px = 1 metro)
const aMetros = (px) => (px / 100).toFixed(2);

// Lee lo guardado. Si no hay nada (o está roto), devuelve valores por defecto.
function leerGuardado() {
  try {
    const crudo = localStorage.getItem(STORAGE_KEY);
    if (!crudo) return { altura: ALTURA_INICIAL, guardados: [] };
    const datos = JSON.parse(crudo);
    return {
      altura: Number(datos.altura) || ALTURA_INICIAL,
      guardados: Array.isArray(datos.guardados) ? datos.guardados : [],
    };
  } catch {
    return { altura: ALTURA_INICIAL, guardados: [] };
  }
}

export default function PeinadoMarge() {
  // Lazy initializer: lee localStorage una sola vez, al montar el componente
  const [altura, setAltura] = useState(() => leerGuardado().altura);
  // Solo guardamos los objetos que agregó la persona; los de fábrica son fijos
  const [guardados, setGuardados] = useState(() => leerGuardado().guardados);
  const [objetoElegido, setObjetoElegido] = useState("");
  const [mensaje, setMensaje] = useState(MENSAJE_INICIAL);

  // Cada vez que cambia la altura o los objetos guardados, se persiste
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ altura, guardados }));
    } catch {
      // Si localStorage no está disponible, el widget sigue funcionando sin guardar
    }
  }, [altura, guardados]);

  const objetos = [...OBJETOS_INICIALES, ...guardados];

  const guardarObjeto = () => {
    if (!objetoElegido) {
      setMensaje("Primero elegí qué objeto querés guardar.");
      return;
    }

    // El nuevo objeto queda escondido a la altura actual
    const nuevo = {
      id: `guardado-${Date.now()}`,
      emoji: objetoElegido,
      reveal: altura,
      guardado: true,
    };
    setGuardados((prev) => [...prev, nuevo]);

    setMensaje(
      `Guardaste ${objetoElegido} a ${aMetros(altura)} metros de altura. ` +
        "Subí o bajá el peinado para volver a encontrarlo."
    );
  };

  // Vuelve todo al estado inicial y limpia localStorage
  const empezarDeNuevo = () => {
    setGuardados([]);
    setAltura(ALTURA_INICIAL);
    setObjetoElegido("");
    setMensaje("Peinado reiniciado. Podés esconder objetos de nuevo.");
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // nada que hacer si no hay localStorage
    }
  };

  return (
    <section className="panel peinado-widget" aria-labelledby="peinado-t">
      <h2 id="peinado-t">
        <span aria-hidden="true">💈</span> El peinado interactivo de Marge
      </h2>
      <p className="peinado-intro">
        Usá el deslizador para cambiar la altura del peinado de Marge y
        descubrí los objetos ocultos dentro de sus rulos azules.
      </p>

      <div className="peinado-stage">
        <div className="peinado-mini">
          {/* La dona queda apoyada justo arriba de la punta del pelo */}
          <span
            className="donut"
            aria-hidden="true"
            style={{ bottom: `${HAIR_BASE_OFFSET + altura}px` }}
          >
            🍩
          </span>

          <div className="hair" id="margeHair" style={{ height: `${altura}px` }}>
            {objetos.map(({ id, emoji, reveal, guardado }) => {
              const visible = altura >= reveal;
              const bottom = Math.max(10, Math.min(reveal, altura) - 24);
              return (
                <span
                  key={id}
                  className={
                    "hair-object" +
                    (guardado ? " objeto-guardado" : "") +
                    (visible ? " is-visible" : "")
                  }
                  data-reveal={reveal}
                  aria-hidden={!visible}
                  style={{ bottom: `${bottom}px` }}
                >
                  {emoji}
                </span>
              );
            })}
          </div>

          <span className="eyes" aria-hidden="true">👀</span>
          <span className="beads" aria-hidden="true">📿📿📿</span>
        </div>
      </div>

      <p className="peinado-medida">
        Altura del peinado: <strong id="peinadoMetros">{aMetros(altura)}</strong> metros
      </p>
      <label className="peinado-slider-label" htmlFor="peinadoRango">
        Ajustar altura del peinado (px):
      </label>
      <input
        type="range"
        id="peinadoRango"
        min="80"
        max="320"
        step="5"
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
      />

      <hr className="peinado-sep" />

      <div className="peinado-esconder">
        <h3>Esconder un objeto en el pelo:</h3>
        <div
          className="peinado-objetos"
          role="radiogroup"
          aria-label="Elegí un objeto para esconder"
        >
          {OPCIONES.map(({ value, label }) => (
            <label key={value}>
              <input
                type="radio"
                name="objetoOculto"
                value={value}
                checked={objetoElegido === value}
                onChange={(e) => setObjetoElegido(e.target.value)}
              />{" "}
              {label}
            </label>
          ))}
        </div>
        <div className="peinado-botones">
          <button type="button" id="guardarObjeto" className="btn-guardar" onClick={guardarObjeto}>
            Guardar en el peinado
          </button>
          <button type="button" id="borrarPeinado" className="btn-borrar" onClick={empezarDeNuevo}>
            Borrar y empezar de nuevo
          </button>
        </div>
        <p className="peinado-msg" id="peinadoMsg" aria-live="polite">
          {mensaje}
        </p>
      </div>
    </section>
  );
}