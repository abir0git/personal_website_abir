import p1 from "../imgs/bas.png"
import p2 from "../imgs/stapp.png"
import p3 from "../imgs/ferDL.jpg"
import ProjectSingle from "./ProjectSingle"

function Project_body()
{
    var gitlnk = "https://github.com/abir0git/"
    return(
        <div id="portfolio" class="section">
            <div class="container text-center">
                <h1></h1>
                <h6 class="section-title mb-4">Check My Wonderful Works</h6>
                <p class="mb-5 pb-4">Here you can find some web applications and ML based projects.</p>
                <p class="mb-5 pb-4">You can visit <a href={gitlnk} target="_blank">here</a> for more small projects.</p>

                <div class="row">
                    <ProjectSingle pic={p1} title="Book-shop Automation Software" link = {gitlnk + "SW_Lab_TeamProject"}></ProjectSingle>
                    <ProjectSingle pic={p2} title="Group-Chat StudyBud" link = {gitlnk + "DjangoProject_Studyapp"}></ProjectSingle>
                    <ProjectSingle pic={p3} title="Live Facial Expression Recognition" link = {gitlnk + "Face_Emotion_Recognation"}></ProjectSingle>
                </div>

            </div>
    </div>
    );
}

export default Project_body;