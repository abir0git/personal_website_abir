function Home_body()
{
    return (
        <div className="header" id="home">
            <div className="container">
                <div className="infos">
                    <h6 className="subtitle">Hello,I am</h6>
                    <h6 className="title">ABIR ROY</h6>
                    <p></p>

                    <div className="buttons pt-3">
                        <button className="btn btn-primary rounded">HIRE ME</button>
                        <button className="btn btn-dark rounded">DOWNLOAD CV</button>
                    </div>      

                    <div className="socials mt-4">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-youtube"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                </div>              
                {/* <div className="img-holder">
                    <img src="assets/imgs/man.svg" alt="">
                </div>       */}
            </div>  

        </div>
    ) 
}

export default Home_body;