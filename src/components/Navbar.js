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
      {/* <button type="button" className="order-online">Subscribe</button> */}
    </header>
  </>
);

export default Navbar;
