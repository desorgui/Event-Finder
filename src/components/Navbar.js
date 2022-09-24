import './navbar.css';

const Navbar = () => (
  <>
    <header>
      <h1 className="logo">
        Event-Finder
      </h1>
      <nav>
        <button type="button">Home</button>
        <button type="button">About</button>
        <button type="button">Menu</button>
        <button type="button">Contact</button>
      </nav>
      <button type="button" className="order-online">Subscribe</button>
    </header>
    <div className="svg">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(6, 3, 32, 0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(6, 3, 32, 0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(6, 3, 29, 0.4)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(1, 3, 29)" />
        </g>
      </svg>
    </div>
  </>
);

export default Navbar;
