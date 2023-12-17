import Project_body from "./Project_body";
import Navbar from "./Navbar";

const Home = () => 
{
    return(
        <div>
            <Navbar active="nav-project"></Navbar>
            <Project_body></Project_body>
        </div>
    )
}

export default Home;