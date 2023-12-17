import Contact_body from "./Contact_body";
import Navbar from "./Navbar";

const Home = () => 
{
    return(
        <div>
            <Navbar active="nav-contact"></Navbar>
            <Contact_body></Contact_body>
        </div>
    )
}

export default Home;