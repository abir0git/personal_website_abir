function Home_body()
{
    return (
        <div className="header" id="home">
            <div className="container">
                <div className="infos">
                    <h6 className="subtitle">hello,I'm</h6>
                    <h6 className="title">ABIR ROY</h6>
                    <p>Butun tali</p>

                    <div className="buttons pt-3">
                        <button className="btn btn-primary rounded">HIRE ME</button>
                        <button className="btn btn-dark rounded">DOWNLOAD CV</button>
                    </div>      

                    <div className="socials mt-4">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-google"></a>
                        <a href="#" class="fa fa-linkedin"></a>
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