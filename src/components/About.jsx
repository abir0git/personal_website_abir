import Navbar from "./Navbar";
import About_body from "./About_body";

const About = () => 
{
    return(
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
            <Navbar active="nav-about"></Navbar>
            <About_body></About_body>
        </div>
    )
}

export default About;