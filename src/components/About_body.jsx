import dp from "../imgs/ABIR.jpg"

function About_body()
{
    return(
        <div id="about" className="section mt-3">
            <div className="container mt-5">
                <div className="row text-center text-md-left">
                    <div className="col-md-3">
                        <img src={dp} alt="" className="img-thumbnail mb-4"></img> 
                    </div>
                    <div className="pl-md-4 col-md-9">
                        <h6 className="title">Abir Roy</h6>
                        <p className="subtitle">Software Developer</p>
                        <p className="subtitle">Data Analyst</p>
                        <p className="about">I am a third year undergraduate student in the Department of <a href="http://cse.iitkgp.ac.in/">Computer Science & Engineering</a>, 
                                            <a href="https://www.iitkgp.ac.in/">Indian Institute of Technology, Kharagpur</a>.
                                            I am highly interested in competitive programming. I am a fullstack developer and 
                                            data analyst. Also I am AI/ML enthusiast.</p>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_body;