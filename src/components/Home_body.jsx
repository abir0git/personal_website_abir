import resume from "../pdfs/ABIR_ROY_RESUME.pdf"
import holder from "../imgs/ImgHolder.png"

function Home_body()
{
    function hireMe()
    {
        alert("Not Avaliable !");
    }

    return (
        <div className="header" id="home">
            <div className="container">
                <div className="infos">
                    <h6 className="subtitle">Hello, I am</h6>
                    <h6 className="title home-name">ABIR</h6>
                    <h6 className="title home-name">ROY</h6>
                    <p></p>

                    <div className="buttons pt-3">
                        <button className="btn btn-primary rounded" onClick={hireMe}>HIRE ME</button>
                        <a className="btn btn-dark rounded" href={resume} target = "_blank">DOWNLOAD CV</a>
                    </div>      

                </div>              
                <div className="img-holder">
                    <img src={holder} alt=""></img>
                </div>      
            </div>  

        </div>
    ) 
}

export default Home_body;