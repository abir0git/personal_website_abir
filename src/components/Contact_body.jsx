

function About_body()
{
    function submit()
    {
        alert("Sorry, Not Avaliable !");
    }

    return(
            <div id="contact" className="position-relative section">
                <div className="container text-center">
                    <h6 className="section-title mb-4">Get In Touch With Me</h6>

                    <div className="contact text-left">
                        <div className="form">
                            <h6 className="subtitle">Available 24/7</h6>
                            <h6 className="section-title mb-4">Get In Touch</h6>
                            <form>
                                <div className="form-group">
                                    <input className="form-control"  placeholder="Enter Name" required></input>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                                </div>
                                <div className="form-group">
                                    <textarea name="contact-message" id="" cols="30" rows="5" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block rounded w-lg" onClick={submit}>Send Message</button>
                            </form>
                        </div>
                        <div className="contact-infos">
                            <div className="item">
                                <a href="https://maps.app.goo.gl/ZBexMJQh5jpYmNaq9"><i className="fa fa-map-marker"></i></a>
                                <div className="">
                                    <h5>Location</h5>
                                    <p>11 PK Road, Jiaganj, Murshidabad</p>
                                    <p>West Bengal, India</p>
                                </div>                          
                            </div>
                            <div className="item">
                                <i className="fa fa-phone"></i>
                                <div>
                                    <h5>Phone Number</h5>
                                    <p>+919800764790</p>
                                </div>                          
                            </div>
                            <div className="item">
                                <i class="fa fa-envelope"></i>
                                <div className="mb-0">
                                    <h5>Email Address</h5>
                                    <p><a href="mailto:royabirbabai0@gmail.com">royabirbabai0@gmail.com</a></p>
                                    <p><a href="mailto:royabirlebachun0@gmail.com">royabirlebachun0@gmail.com</a></p>
                                    <p><a href="mailto:royranajit5@gmail.com">royranajit5@gmail.com</a></p>
                                    <p><a href="mailto:royabirbabai0@kgpian.itkgp.ac.in<">royabirbabai0@kgpian.itkgp.ac.in</a></p>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>  
                {/* <div id="map">
                    <iframe src="https://snazzymaps.com/embed/61257"></iframe>
                </div>       */}
            </div>
    );
}

export default About_body;