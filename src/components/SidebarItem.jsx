import { NavLink } from 'react-router-dom';

export default function SidebarItem({
  label,
  to,
  end = false,
  onClick,
}) {
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
