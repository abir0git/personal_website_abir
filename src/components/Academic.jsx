import Navbar from "./Navbar";
import Academic_body from "./Academic_body";

const Academic = () => 
{
    return(
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
            <Navbar active="nav-academic"></Navbar>
            <Academic_body></Academic_body>
        </div>
    )
}

export default Academic;