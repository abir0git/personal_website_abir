import Home_body from "./Home_body";
import Navbar from "./Navbar";

const Home = () => 
{
    return(
        <div>
            <Navbar active="nav-home"></Navbar>
            <Home_body></Home_body>
        </div>
    )
}

export default Home;