import './footer.css';
import {
  BsInstagram, BsFacebook, BsTwitter, BsLinkedin,
} from 'react-icons/bs';

const Footer = () => (

  <footer className="footer">

    <a className="footerlogo">Event-Finder</a>

    <section className="icone_social_footer">

      <a href="https://codepen.io/" target="_blank" rel="noreferrer"><span className="icon"><BsLinkedin /></span></a>

      <a href="https://codepen.io/" target="_blank" rel="noreferrer"><span className="icon"><BsTwitter /></span></a>

      <a href="https://codepen.io/" target="_blank" rel="noreferrer"><span className="icon"><BsInstagram /></span></a>

      <a href="https://codepen.io/" target="_blank" rel="noreferrer"><span className="icon"><BsFacebook /></span></a>

    </section>

    <section className="disclaimer">
      <i className="testo_disclaimer">Desor Guishny</i>
    </section>

  </footer>
);

export default Footer;
