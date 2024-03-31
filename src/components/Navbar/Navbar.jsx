import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { AlignRightOutlined, CloseOutlined, GithubFilled, MenuUnfoldOutlined, RollbackOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./NavbarStyles.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h1>LofiLagoon</h1>
        </Link>
        {isMobile && (
          <div className="menu-icon" onClick={handleToggleDrawer}>
            <AlignRightOutlined />
          </div>
        )}
        {!isMobile && (
          <ul className="nav-links nav-block">
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
              <li>
                <GithubFilled />
              </li>
            </a>
          </ul>
        )}
      </nav>
      <Drawer
        // title="LofiLagoon"
        placement="right"
        closable={false}
        onClose={handleToggleDrawer}
        visible={isMobile && showDrawer}
        className="drawer-menu"
        
      >
        <ul>
          <button className="btn backbtn" onClick={handleToggleDrawer}><CloseOutlined/></button>
          <Link to="/" className="btn" onClick={handleToggleDrawer}>
            <li>Home</li>
          </Link>
          <Link to="/about" className="btn" onClick={handleToggleDrawer}>
            <li>About Me</li>
          </Link>
          <Link to="/contact" className="btn" onClick={handleToggleDrawer}>
            <li>Contacts</li>
          </Link>
          <a
            href="https://github.com/ramo-dev/lofiLagoon"
            target="_blank"
            className="btn"
          >
            <li>
              Github
            </li>
          </a>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
