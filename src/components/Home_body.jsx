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

                    <div className="socials mt-4">
                        <a href="https://www.facebook.com/profile.php?id=100073420211044" target="_blank" className="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/a_for_aabir/" target="_blank" className="fa fa-instagram"></a>
                        <a href="https://twitter.com/a_for_aabir" target="_blank" className="fa fa-twitter"></a>
                        <a href="https://linkedin.com/in/abir-roy-335bb6246" target="_blank" className="fa fa-linkedin"></a>
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