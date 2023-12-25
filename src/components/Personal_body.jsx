import { Link } from "react-router-dom";

function Academic_body()
{
    return(
        <div id="service" class="section">
        <div class="container text-center">
            <h6 class="section-title mb-4">My Social Handles</h6>
            <div className="socials mt-4">
                <a href="https://www.facebook.com/profile.php?id=100073420211044" target="_blank" className="fa fa-facebook"></a>
                <a href="https://www.instagram.com/a_for_aabir/" target="_blank" className="fa fa-instagram"></a>
                <a href="https://twitter.com/a_for_aabir" target="_blank" className="fa fa-twitter"></a>
                <a href="https://linkedin.com/in/abir-roy-335bb6246" target="_blank" className="fa fa-linkedin"></a>
            </div>
            <h6 class="section-title mb-4">My Hobbies</h6>
            <div class="row">
                <div class="col-sm-6 col-md-4 mb-4">
                    <div class="custom-card card border">
                        <Link to="/personal/paintings" className="black-link">
                        <div className="card-body">
                            <h5>Paintings</h5>
                        </div>
                        </Link>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 mb-4">
                    <div class="custom-card card border">
                    <Link to="/personal/flutes" className="black-link">
                        <div className="card-body">
                            <h5>Flutes</h5>
                        </div>
                        </Link>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 mb-4">
                    <div class="custom-card card border">
                    <Link to="/personal/recipes" className="black-link">
                        <div className="card-body">
                            <h5>Recipes</h5>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Academic_body;