/* eslint-disable */
import './footer.css';
import {
  BsInstagram, BsFacebook, BsTwitter, BsLinkedin,
} from 'react-icons/bs';

// import { Link } from 'react-router-dom';

const Footer = () => (

  <footer className="footer">

    <h2>Event-Finder</h2>

    <section className="icone_social_footer">

      <a href="https://www.linkedin.com/in/desorguishny/" target="_blank" rel="noreferrer"><span className="icon"><BsLinkedin /></span></a>

      <a href="https://twitter.com/DGuishny" target="_blank" rel="noreferrer"><span className="icon"><BsTwitter /></span></a>

      <a href="#" target="_blank" rel="noreferrer"><span className="icon"><BsInstagram /></span></a>

      <a href="https://www.facebook.com/desor.guishny" target="_blank" rel="noreferrer"><span className="icon"><BsFacebook /></span></a>

    </section>

    <section className="disclaimer">
      <i className="testo_disclaimer">Desor Guishny</i>
    </section>

  </footer>
);

export default Footer;
