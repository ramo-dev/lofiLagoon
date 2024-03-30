import { Flex } from "antd";
import Navbar from "../Navbar/Navbar";
const Contact = () => {

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted")
    }
    return (
      <div>
        <Navbar />
        <form action="" className="contactform" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name"/>
            <input type="email" placeholder="Enter Your Email"/>
            <textarea type="text" placeholder="Enter Your Message"/>
            <button className="btn">Submit</button>
        </form>
      </div>
    );
}
 
export default Contact;