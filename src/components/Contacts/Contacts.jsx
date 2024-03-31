import { Flex } from "antd";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
const Contact = () => {

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted")
    }
    return (
      <div>
        <Navbar />
        <form className="contactform" onSubmit={handleSubmit}>
          <h1 style={{fontFamily : "var(--font-page)"}}>Want to collaborate? Send a Message.</h1>
            <input type="text" placeholder="Enter Your Name"/>
            <input type="email" placeholder="Enter Your Email"/>
            <textarea type="text" placeholder="Enter Your Message"/>
            <button className="btn">Submit</button>
        </form>
        <Footer/>
      </div>
    );
}
 
export default Contact;