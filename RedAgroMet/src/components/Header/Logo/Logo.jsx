import logo from '@assets/imgs/logo.png';
import './Logo.css'

export function Logo({ isCollapsed }) {
  return (
    <div
      className={`header__logo-container flex items-center transition-all duration-300 ${
        isCollapsed ? 'justify-center' : 'justify-start'
      }`}
    >
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
        <img src={logo} alt="Logo de página" className="w-full h-full object-contain" />
      </div>

      {!isCollapsed && (
        <div className="ml-3 text-white">
          <div className="text-lg font-bold leading-tight">Red AgroMet</div>
          <div className="text-xs opacity-75">Sistema Meteorológico</div>
        </div>
      )}
    </div>
  );
}
