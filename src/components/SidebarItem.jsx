import { NavLink } from 'react-router-dom';

export default function SidebarItem({
  label,
  to,
  end = false,
  onClick,
}) {
  // Si no tiene ruta 'to', es una acción (como abrir el modal) -> renderiza un botón 
  if (!to) {
    return (
      <li>
        <button
          type="button"
          className="sidebar-link"
          onClick={onClick}
        >
          <span className="sidebar-link-text">
            {label}
          </span>
        </button>
      </li>
    );
  }

  // Si tiene ruta 'to', se comporta como enlace de navegación normal
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        <span className="sidebar-link-text">
          {label}
        </span>
      </NavLink>
    </li>
  );
}
