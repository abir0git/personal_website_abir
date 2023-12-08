import logo from "../imgs/a.jpg"

function About_body()
{
    return(
        <div id="about" class="section mt-3">
            <div class="container mt-5">
                <div class="row text-center text-md-left">
                    <div class="col-md-3">
                        <img src={logo} alt="" class="img-thumbnail mb-4"></img> 
                    </div>
                    <div class="pl-md-4 col-md-9">
                        <h6 class="title">Abir Roy</h6>
                        <p class="subtitle">Software Developer</p>
                        <p class="subtitle">Data Analyst</p>
                        <p className="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_body;