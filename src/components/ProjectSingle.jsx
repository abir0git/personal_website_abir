const ProjectSingle = (props) =>
{
    return(
    <div class="col-sm-4">
        <div class="img-wrapper">
            <img src={props.pic} alt=""></img>
            <div class="overlay">
                <div class="overlay-infos">
                    <h5>{props.title}</h5>
                    <a href={props.link} target="_blank"><i class="fa fa-external-link pro-link"></i></a>
                </div>  
            </div>
        </div>
    </div>
    );
}

export default ProjectSingle;