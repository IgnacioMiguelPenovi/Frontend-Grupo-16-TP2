export default function NightModeToggle({ isNight, onToggle, className }) {
  return (
    <button
      className={className}
      type="button"
      aria-label={isNight ? 'Activar modo día' : 'Activar modo noche'}
      aria-pressed={isNight}
      onClick={onToggle}
    >
      <span aria-hidden="true">{isNight ? '☀️' : '🌙'}</span>
      <span className="mode-label">{isNight ? ' Modo día' : ' Modo noche'}</span>
    </button>
  );
}
