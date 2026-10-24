export default function NightModeToggle({ isNight, onToggle, className }) {
  return (
    <button
      className={className}
      type="button"
      aria-pressed={isNight}
      onClick={onToggle}
    >
      {isNight ? '☀️ Modo día' : '🌙 Modo noche'}
    </button>
  );
}
