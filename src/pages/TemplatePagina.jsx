import { Link } from 'react-router-dom';
import PizarraBart from '../components/PizarraBart';
import '../styles/base.css';
import '../styles/room.css';

export default function TemplatePag(

) {
  return (
    <div className="room bart">
      
      <main className="room-main">
        {/* 2 · EL CUARTO (SVG) */}
        <div className="stage-frame">
          <svg
            className="stage"
            viewBox="0 0 1000 460"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="La habitación de Ignacio, con su escritorio, un skate y un póster de Bartman"
          >
            <defs>
              <pattern id="wall" width="64" height="64" patternUnits="userSpaceOnUse">
                <rect width="64" height="64" fill="#5aa9e6" />
                <circle cx="16" cy="16" r="5" fill="#7cc0f2" />
                <circle cx="48" cy="48" r="5" fill="#7cc0f2" />
              </pattern>
              <pattern id="floor" width="120" height="60" patternUnits="userSpaceOnUse">
                <rect width="120" height="60" fill="#b8804f" />
                <path
                  d="M0 0H120M0 30H120M60 0V30M0 30V60M120 30V60"
                  stroke="#8f5c34"
                  strokeWidth="3"
                  fill="none"
                />
              </pattern>
            </defs>

            {/* pared y piso */}
            <rect width="1000" height="340" fill="url(#wall)" />
            <rect y="340" width="1000" height="120" fill="url(#floor)" />
            <rect x="-4" y="326" width="1008" height="16" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />

            {/* ventana con cortinas */}
            <image href="/img/room-window.svg" x="70" y="50" width="200" height="211" />
            <rect x="52" y="40" width="236" height="9" rx="4" fill="#5a3a2e" stroke="#1a1a1a" strokeWidth="3" />
            <rect x="58" y="49" width="34" height="220" rx="4" fill="#ffd23f" stroke="#1a1a1a" strokeWidth="3" />
            <rect x="248" y="49" width="34" height="220" rx="4" fill="#ffd23f" stroke="#1a1a1a" strokeWidth="3" />

            {/* poster de Bartman */}
            <g transform="translate(735 62) rotate(3)" stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round">
              <rect width="132" height="176" rx="4" fill="#ffd23f" />
              <path d="M20 150 L66 60 L112 150 Q66 130 20 150Z" fill="#7c4dcc" />
              <text x="66" y="40" textAnchor="middle" fontSize="26" fontWeight="800" fill="#e63946" stroke="none">
                BARTMAN
              </text>
              <path d="M66 82 l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2z" fill="#fff" />
            </g>

            {/* skate apoyado */}
            <g transform="translate(872 222) rotate(10)" stroke="#1a1a1a" strokeWidth="4">
              <rect x="-22" y="0" width="44" height="176" rx="22" fill="#e63946" />
              <rect x="-8" y="26" width="16" height="124" rx="8" fill="#ffd23f" />
              <circle cx="-30" cy="34" r="8" fill="#fff" />
              <circle cx="-30" cy="142" r="8" fill="#fff" />
            </g>

            {/* Ignacio */}
            <image className="char" href="/img/avatar-ignacio.png" x="335" y="89" width="330" height="303" />

            {/* escritorio */}
            <g stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round">
              {/* vaso Squishee */}
              <path d="M276 326 h44 l-6 52 h-32 z" fill="#e63946" />
              <path d="M298 326 l12 -32" strokeWidth="5" fill="none" strokeLinecap="round" />
              {/* libros */}
              <rect x="676" y="352" width="76" height="26" fill="#4bb04a" />
              <rect x="684" y="328" width="62" height="24" fill="#ffd23f" />
              {/* boletin con F */}
              <g transform="translate(600 336) rotate(-7)">
                <rect width="68" height="44" fill="#fff" />
                <text x="34" y="35" textAnchor="middle" fontSize="34" fontWeight="800" fill="#e63946" stroke="none">
                  F
                </text>
              </g>
              <rect x="236" y="378" width="528" height="26" rx="6" fill="#b5764a" />
              <rect x="252" y="404" width="496" height="60" fill="#8b5a2b" />
              <rect x="272" y="416" width="200" height="38" rx="4" fill="#a06a3a" />
              <rect x="528" y="416" width="200" height="38" rx="4" fill="#a06a3a" />
              <circle cx="372" cy="435" r="6" fill="#ffd23f" />
              <circle cx="628" cy="435" r="6" fill="#ffd23f" />
            </g>
          </svg>
        </div>

        {/* 3 · PERFIL */}
        <section className="profile" aria-labelledby="nombre">
          <div className="who">
            <h1 id="nombre" className="simpsons-title">Ignacio Miguel Penovi</h1>
            <p className="role">Low level programing</p>
            <p className="bio">
              Me gusta ir cerca del metal: motores de juegos en C++ y Unreal, y apps multiplataforma con Kotlin.
            </p>
            <ul className="chips" aria-label="Etiquetas">
              <li>📍 Mar del Plata</li>
              <li>🎂 22 años</li>
              <li>C++</li>
              <li>UE</li>
              <li>Kotlin</li>
              <li>Compose MP</li>
            </ul>
          </div>

          <div className="lists">
            <article className="panel movies" aria-labelledby="peli-t">
              <h2 id="peli-t">
                <span aria-hidden="true">🎬</span> Películas favoritas
              </h2>
              <ol>
                <li>
                  <div>
                    <strong>El código Da Vinci</strong>
                    <small>2006</small>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Knives Out</strong>
                    <small>2019</small>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Interstellar</strong>
                    <small>2014</small>
                  </div>
                </li>
              </ol>
            </article>

            <article className="panel songs" aria-labelledby="song-t">
              <h2 id="song-t">
                <span aria-hidden="true">🎵</span> Discos favoritos
              </h2>
              <ol>
                <li>
                  <div>
                    <strong>Chronologic</strong>
                    <small>Caravan Palace</small>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>&lt;|°_°|&gt;</strong>
                    <small>Caravan Palace</small>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Renaissance</strong>
                    <small>Apashe</small>
                  </div>
                </li>
              </ol>
            </article>
          </div>

          {/* Widget interactivo de la pizarra */}
          <PizarraBart />
        </section>
 
      </main>

      {/* 5 · FOOTER */}
      <footer className="room-foot">
        <p>
          Hecho con 🍩 y mucho café por <strong>Donuts &amp; Code</strong> · 2026 · ¡D&apos;oh!
        </p>
      </footer>
    </div>
  );
}
