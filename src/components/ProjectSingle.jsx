const ProjectSingle = (props) =>
{
    return(
    <div className="col-sm-4">
        <div className="img-wrapper">
            <img src={props.pic} alt=""></img>
            <div className="overlay">
                <div className="overlay-infos">
                    <h5>{props.title}</h5>
                    <a href={props.link} target="_blank"><i className="fa fa-external-link pro-link"></i></a>
                </div>  
            </div>
        </div>
    </div>
    );
}

export default ProjectSingle;