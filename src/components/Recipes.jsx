import Navbar from "./Navbar";

const Recipes = () => 
{
    return(
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
            <Navbar active="nav-personal"></Navbar>
            <div className="work">
                <h1>Work going on..</h1>
            </div>
        </div>
    )
}

export default Recipes;