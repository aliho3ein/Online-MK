export default function Footer() {
  return (
    <footer>
      <ul>
        <li className="footerSocial">
          <i className="fa-brands fa-square-twitter"></i>
        </li>
        <li className="footerSocial">
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li className="footerSocial">
          <i className="fa-brands fa-linkedin"></i>
        </li>
      </ul>
      <span>
        copyright &copy; MAC Alle Rechte vorbehalten <br />
        Powered by
        <a
          href="https://aliho3ein.github.io/portfolio/"
          rel="noreferrer"
          target="_blank"
          className="myName"
        >
          aliho3ein
        </a>
      </span>
    </footer>
  );
}
