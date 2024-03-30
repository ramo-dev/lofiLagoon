import { Link } from "react-router-dom";
import './NavbarStyles.css';

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
          </ul>
        </nav>
      </>
    );
}
 
export default Navbar;