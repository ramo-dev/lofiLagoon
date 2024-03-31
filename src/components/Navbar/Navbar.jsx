import { Link } from "react-router-dom";
import './NavbarStyles.css';
import { GithubFilled } from "@ant-design/icons";

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
          <Link to="/" className="logo">
            <h1>LofiLagoon</h1>
          </Link>
          <ul className="links">
            <Link to="/" className="btn">
              <li>Home</li>
            </Link>
            <Link to="/about" className="btn">
              <li>About Me</li>
            </Link>
            <Link to="/contact" className="btn">
              <li>Contacts</li>
            </Link>
            <a
              href="https://github.com/ramo-dev/lofiLagoon"
              target="_blank"
              className="btn"
            >
              <li>{<GithubFilled />}</li>
            </a>
          </ul>
        </nav>
      </>
    );
}
 
export default Navbar;