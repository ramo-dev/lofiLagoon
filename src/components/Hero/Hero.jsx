import { Button, Flex } from "antd";
import "./HeroStyles.css";
import Typography from "antd/es/typography/Typography";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <Flex className="heroTitle" vertical gap="2rem" align="center">
            <h1 className="hero-name">Welcome to LofiLagoon</h1>
            <Link to="/player">
              <button className="btn">Get Started</button>
            </Link>
            <p>It's Free!</p>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Hero;
