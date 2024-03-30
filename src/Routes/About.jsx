import { Flex } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Typography from "antd/es/typography/Typography";
import Footer from "../components/Footer/Footer";
const About = () => {
    return (
      <div>
        <Navbar />
        <div className="about"></div>
        <div className="aboutText">
          <h1>About Me</h1>
          <p>
            Hey there! I'm LofiLagoon, your go-to spot for chill vibes and cozy
            beats. Let's dive into a world of relaxation together, where you can
            unwind, destress, and just vibe out to the rhythm of life. So, kick
            back, hit play, and let's escape into the soothing sounds of lofi
            together! 🎶✨.
          </p>
        </div>
        <Footer />
      </div>
    );
}
 
export default About;