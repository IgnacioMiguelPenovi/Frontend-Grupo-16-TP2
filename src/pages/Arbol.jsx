import { useState, useMemo } from 'react';
import NightModeToggle from '../components/NightModeToggle';
import '../styles/base.css';
import '../styles/arbol.css';

// Estructura de archivos y carpetas del proyecto Frontend2026
const ESTRUCTURA_PROYECTO = {
  name: 'Frontend2026',
  type: 'folder',
  desc: 'Carpeta raíz del proyecto React + Vite (TP2)',
  children: [
    {
      name: 'public',
      type: 'folder',
      desc: 'Archivos estáticos servidos directamente por Vite',
      children: [
        {
          name: 'icons.svg',
          type: 'file',
          ext: 'svg',
          icon: '🎨',
          desc: 'Sprite SVG con íconos de la aplicación'
        },
        {
          name: 'img',
          type: 'folder',
          desc: 'Imágenes, avatares y recursos gráficos',
          children: [
            { name: 'avatar-celeste.png', type: 'file', ext: 'png', icon: '🖼️', desc: 'Avatar de Celeste (Maggie)' },
            { name: 'avatar-eliana.png', type: 'file', ext: 'png', icon: '🖼️', desc: 'Avatar de Eliana (Marge)' },
            { name: 'avatar-ester.png', type: 'file', ext: 'png', icon: '🖼️', desc: 'Avatar de Ester (Lisa)' },
            { name: 'avatar-ignacio.png', type: 'file', ext: 'png', icon: '🖼️', desc: 'Avatar de Ignacio (Bart)' },
            { name: 'garage-bar.jpg', type: 'file', ext: 'jpg', icon: '🖼️', desc: 'Bar secreto de Moe en el garage' },
            { name: 'github.png', type: 'file', ext: 'png', icon: '🖼️', desc: 'Logo oficial de GitHub' },
            { name: 'logo.png', type: 'file', ext: 'png', icon: '🖼️', desc: 'Logo principal de Donuts & Code' },
            { name: 'room-window.svg', type: 'file', ext: 'svg', icon: '🖼️', desc: 'Ventana diurna de las habitaciones' },
            { name: 'room-window-night.svg', type: 'file', ext: 'svg', icon: '🖼️', desc: 'Ventana nocturna de las habitaciones' },
            { name: 'tower.svg', type: 'file', ext: 'svg', icon: '🖼️', desc: 'Torre de enfriamiento de la central nuclear' }
          ]
        }
      ]
    },
    {
      name: 'src',
      type: 'folder',
      desc: 'Código fuente principal de la aplicación React',
      children: [
        {
          name: 'assets',
          type: 'folder',
          desc: 'Recursos locales importables en módulos',
          children: []
        },
        {
          name: 'components',
          type: 'folder',
          desc: 'Componentes modulares y reutilizables de React',
          children: [
            { name: 'BuscadorPersonaje.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Buscador interactivo con JSON y API externa' },
            { name: 'CelesteJuego.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Minijuego interactivo en la habitación de Celeste' },
            { name: 'GitHubProjects.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Visualizador de repositorios y proyectos de GitHub' },
            { name: 'ModalDirectorio.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Modal emergente (Portal) para buscar personajes' },
            { name: 'NightModeToggle.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Botón conmutador de modo noche / día' },
            { name: 'Nube.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Nube animada para los registros de la bitácora' },
            { name: 'PeinadoMarge.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Interacción de peinado en la habitación de Eliana' },
            { name: 'PizarraBart.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Pizarra de castigo interactiva en la de Ignacio' },
            { name: 'RoomLayout.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Layout estándar compartido por las habitaciones' },
            { name: 'ScrollToTop.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Restaura el scroll al inicio en cada cambio de ruta' },
            { name: 'Sidebar.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Menú lateral desplegable <aside> de navegación' },
            { name: 'SidebarItem.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Ítem para enlaces de navegación o acciones en el aside' }
          ]
        },
        {
          name: 'data',
          type: 'folder',
          desc: 'Archivos y estructuras de datos locales',
          children: [
            { name: 'personajes.json', type: 'file', ext: 'json', icon: '📊', desc: 'Dataset local de personajes de Springfield' }
          ]
        },
        {
          name: 'pages',
          type: 'folder',
          desc: 'Vistas principales asociadas a rutas de React Router',
          children: [
            { name: 'Arbol.jsx', type: 'file', ext: 'jsx', icon: '🌳', desc: 'Página del árbol renderizado del proyecto' },
            { name: 'Bitacora.jsx', type: 'file', ext: 'jsx', icon: '📜', desc: 'Registro de avances del equipo (humo nuclear)' },
            { name: 'Home.jsx', type: 'file', ext: 'jsx', icon: '🏡', desc: 'Fachada interactiva de la casa y garage' },
            { name: 'PlaceholderPage.jsx', type: 'file', ext: 'jsx', icon: '🍩', desc: 'Página 404 personalizada con temática Los Simpsons' }
          ]
        },
        {
          name: 'rooms',
          type: 'folder',
          desc: 'Habitaciones temáticas de cada miembro del grupo',
          children: [
            { name: 'CelesteRoom.jsx', type: 'file', ext: 'jsx', icon: '🚪', desc: 'Habitación interactiva de Celeste (Maggie)' },
            { name: 'ElianaRoom.jsx', type: 'file', ext: 'jsx', icon: '🚪', desc: 'Habitación interactiva de Eliana (Marge)' },
            { name: 'EsterRoom.jsx', type: 'file', ext: 'jsx', icon: '🚪', desc: 'Habitación interactiva de Ester (Lisa)' },
            { name: 'IgnacioRoom.jsx', type: 'file', ext: 'jsx', icon: '🚪', desc: 'Habitación interactiva de Ignacio (Bart)' }
          ]
        },
        {
          name: 'styles',
          type: 'folder',
          desc: 'Hojas de estilo CSS modulares',
          children: [
            { name: 'arbol.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos del árbol del proyecto y modo noche' },
            { name: 'base.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Variables CSS, tipografías y estilos base' },
            { name: 'bitacora.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos para la bitácora y chimenea nuclear' },
            { name: 'github.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos de las tarjetas de GitHub' },
            { name: 'home.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos del cielo animado, casa y garage' },
            { name: 'peinado.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos para la interacción del peinado de Marge' },
            { name: 'pizarra.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos para la pizarra interactiva de Bart' },
            { name: 'room.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos base para las habitaciones' },
            { name: 'sidebar.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos del menú lateral aside y botones flotantes' }
          ]
        },
        { name: 'App.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Componente raíz con configuración de rutas' },
        { name: 'index.css', type: 'file', ext: 'css', icon: '🎨', desc: 'Estilos globales adicionales' },
        { name: 'main.jsx', type: 'file', ext: 'jsx', icon: '⚛️', desc: 'Punto de entrada de React con ReactDOM' }
      ]
    },
    { name: '.gitignore', type: 'file', ext: 'gitignore', icon: '⚙️', desc: 'Reglas de exclusión para Git' },
    { name: 'eslint.config.js', type: 'file', ext: 'js', icon: '⚙️', desc: 'Configuración del linter ESLint' },
    { name: 'index.html', type: 'file', ext: 'html', icon: '📄', desc: 'Página HTML base donde monta React' },
    { name: 'package-lock.json', type: 'file', ext: 'json', icon: '🔒', desc: 'Árbol de dependencias resueltas de npm' },
    { name: 'package.json', type: 'file', ext: 'json', icon: '📦', desc: 'Dependencias y scripts del proyecto' },
    { name: 'README.md', type: 'file', ext: 'md', icon: '📝', desc: 'Documentación del repositorio' },
    { name: 'vercel.json', type: 'file', ext: 'json', icon: '🚀', desc: 'Configuración de ruteo para despliegue en Vercel' },
    { name: 'vite.config.js', type: 'file', ext: 'js', icon: '⚡', desc: 'Configuración de Vite con soporte para React' }
  ]
};

// Componente recursivo para renderizar cada nodo
function TreeNode({ node, path = '', search = '', collapsedMap, onToggleCollapse }) {
  const currentPath = `${path}/${node.name}`;
  const isFolder = node.type === 'folder';
  const isCollapsed = collapsedMap[currentPath] ?? false;

  const matchesSearch = search.trim() !== '' && (
    node.name.toLowerCase().includes(search.toLowerCase()) ||
    (node.desc && node.desc.toLowerCase().includes(search.toLowerCase())) ||
    (node.ext && node.ext.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <li>
      <div className="tree-node-wrapper">
        {isFolder ? (
          <button
            type="button"
            className={`node node-folder ${matchesSearch ? 'highlighted' : ''}`}
            onClick={() => onToggleCollapse(currentPath)}
            aria-expanded={!isCollapsed}
          >
            <span className="folder-toggle-icon">
              {isCollapsed ? '▶' : '▼'}
            </span>
            <span className="icon">📁</span>
            <span>{node.name}</span>
            {node.children && (
              <span className="folder-count">{node.children.length}</span>
            )}
          </button>
        ) : (
          <span className={`node node-file node-${node.ext} ${matchesSearch ? 'highlighted' : ''}`}>
            <span className="icon">{node.icon || '📄'}</span>
            <span>{node.name}</span>
            {node.ext && <span className="ext-badge">.{node.ext}</span>}
            {node.desc && <span className="node-desc">— {node.desc}</span>}
          </span>
        )}
      </div>

      {isFolder && node.children && node.children.length > 0 && !isCollapsed && (
        <ul>
          {node.children.map((child) => (
            <TreeNode
              key={child.name}
              node={child}
              path={currentPath}
              search={search}
              collapsedMap={collapsedMap}
              onToggleCollapse={onToggleCollapse}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Arbol() {
  const [search, setSearch] = useState('');
  const [collapsedMap, setCollapsedMap] = useState({});

  const [isNight, setIsNight] = useState(() => {
    try {
      return localStorage.getItem('donuts-code:night-mode') === 'true';
    } catch {
      return false;
    }
  });

  const toggleNight = () => {
    const nextNight = !isNight;
    setIsNight(nextNight);
    try {
      localStorage.setItem('donuts-code:night-mode', String(nextNight));
    } catch {
      // Ignorar error si no está disponible localStorage
    }
  };

  // Calcular estadísticas del árbol
  const stats = useMemo(() => {
    let folders = 0;
    let files = 0;
    let jsxCount = 0;
    let cssCount = 0;
    let jsonCount = 0;

    const countNodes = (n) => {
      if (n.type === 'folder') {
        folders++;
        if (n.children) {
          n.children.forEach(countNodes);
        }
      } else {
        files++;
        if (n.ext === 'jsx') jsxCount++;
        else if (n.ext === 'css') cssCount++;
        else if (n.ext === 'json') jsonCount++;
      }
    };

    if (ESTRUCTURA_PROYECTO.children) {
      ESTRUCTURA_PROYECTO.children.forEach(countNodes);
    }

    return { folders, files, jsxCount, cssCount, jsonCount };
  }, []);

  const handleToggleCollapse = (path) => {
    setCollapsedMap((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const handleExpandAll = () => {
    setCollapsedMap({});
  };

  const handleCollapseAll = () => {
    const newCollapsed = {};
    const collapseFolder = (node, path = '') => {
      const currentPath = `${path}/${node.name}`;
      if (node.type === 'folder') {
        newCollapsed[currentPath] = true;
        if (node.children) {
          node.children.forEach((c) => collapseFolder(c, currentPath));
        }
      }
    };
    collapseFolder(ESTRUCTURA_PROYECTO);
    setCollapsedMap(newCollapsed);
  };

  return (
    <div className={`arbol-wrapper ${isNight ? 'is-night' : ''}`}>
      {/* Conmutador Modo Noche / Día */}
      <div className="arbol-mode-control">
        <NightModeToggle
          className="arbol-mode-toggle"
          isNight={isNight}
          onToggle={toggleNight}
        />
      </div>

      <main className="arbol-main">
        {/* Encabezado */}
        <section className="arbol-hero">
          <h1 className="simpsons-title">🌳 Árbol del Proyecto</h1>
          <p>
            Explorá toda la arquitectura de carpetas, componentes y estilos de{' '}
            <strong>Donuts &amp; Code (Frontend2026)</strong>. Hacé clic en las carpetas para expandirlas o colapsarlas.
          </p>
        </section>

        {/* Barra de herramientas */}
        <div className="tree-toolbar">
          <div className="tree-search-box">
            <span className="tree-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="tree-search-input"
              placeholder="Buscar archivo, componente o extensión..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="tree-actions">
            <button type="button" className="tree-btn" onClick={handleExpandAll}>
              📂 Expandir todo
            </button>
            <button type="button" className="tree-btn" onClick={handleCollapseAll}>
              📁 Colapsar todo
            </button>
          </div>
        </div>

        {/* Panel del árbol */}
        <section className="tree-panel" aria-labelledby="tree-heading">
          <div className="tree-panel-header">
            <h2 id="tree-heading" className="tree-panel-title">
              <span aria-hidden="true">📂</span> {ESTRUCTURA_PROYECTO.name}
            </h2>
            <span className="tree-project-badge">Vite + React SPA · TP2</span>
          </div>

          <ul className="tree-root">
            {ESTRUCTURA_PROYECTO.children.map((child) => (
              <TreeNode
                key={child.name}
                node={child}
                path={`/${ESTRUCTURA_PROYECTO.name}`}
                search={search}
                collapsedMap={collapsedMap}
                onToggleCollapse={handleToggleCollapse}
              />
            ))}
          </ul>

          {/* Leyenda visual */}
          <div className="tree-legend">
            <div className="tree-legend-title">🏷️ Leyenda de tipos de archivo:</div>
            <span><i className="legend-dot dot-folder"></i> Carpetas</span>
            <span><i className="legend-dot dot-jsx"></i> Componentes (.jsx)</span>
            <span><i className="legend-dot dot-css"></i> Estilos (.css)</span>
            <span><i className="legend-dot dot-json"></i> Datos (.json)</span>
            <span><i className="legend-dot dot-media"></i> Multimedia (.png, .svg, .jpg)</span>
            <span><i className="legend-dot dot-config"></i> Configuración (.js, .md, .html)</span>
          </div>

          {/* Tarjetas de estadísticas */}
          <div className="tree-stats">
            <div className="tree-stat-card">
              <span className="stat-number">{stats.folders}</span>
              <span className="stat-label">Carpetas</span>
            </div>
            <div className="tree-stat-card">
              <span className="stat-number">{stats.files}</span>
              <span className="stat-label">Archivos totales</span>
            </div>
            <div className="tree-stat-card">
              <span className="stat-number">{stats.jsxCount}</span>
              <span className="stat-label">Componentes JSX</span>
            </div>
            <div className="tree-stat-card">
              <span className="stat-number">{stats.cssCount}</span>
              <span className="stat-label">Módulos CSS</span>
            </div>
            <div className="tree-stat-card">
              <span className="stat-number">{stats.jsonCount}</span>
              <span className="stat-label">Datasets JSON</span>
            </div>
          </div>
        </section>

        {/* Pie */}
        <footer className="arbol-foot">
          <p>🍩 Donuts &amp; Code · IFTS 29 · Grupo 16 · 2026</p>
        </footer>
      </main>
    </div>
  );
}
