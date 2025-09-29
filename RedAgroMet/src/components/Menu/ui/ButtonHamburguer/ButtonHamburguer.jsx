import './ButtonHamburguer.css';

export function ButtonHamburguer({ setShowNavBar, showNavBar }) {
  return (
    <div
      className={`btnHamburguesa__containes ${showNavBar ? 'close' : ''}`}
      onClick={() => setShowNavBar(!showNavBar)}
    >
      <div className="btnHamburguesa__line f1"></div>
      <div className="btnHamburguesa__line f2"></div>
      <div className="btnHamburguesa__line f3"></div>
    </div>
  );
}