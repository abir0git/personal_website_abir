import Navbar from "./Navbar";
import Home_body from "./Home_body";

const Home = () => 
{
    return(
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
            <Navbar></Navbar>
            <Home_body></Home_body>
        </div>
    )
}

export default Home;