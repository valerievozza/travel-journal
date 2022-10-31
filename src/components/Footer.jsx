export default function Footer() {
  return (
    <footer className="footer">
      &copy; 2022 <a className="link" href="https://valerievozza.dev">Valerie Vozza</a>
      <nav className="footer--nav">
        <ul>
          <li>
            <a className="link" href="https://github.com/valerievozza">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a className="link" href="https://linkedin.com/in/valerievozza">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a className="link" href="https://twitter.com/valerievozza_">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>  
      </nav>
    </footer>
  )
}