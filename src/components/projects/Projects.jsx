import React, { useEffect } from "react"
import zeptoImage from "../../images/zeptoImage.png";
import gridlistImage from "../../images/gridlistImage.png";
import quizImage from "../../images/quizImage.png";
import userManagement from "../../images/userManagement.png"
import foundItImage from "../../images/founditClone.jpg"
import multistepForm from "../../images/multistepForm.jpg"
import "./projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () =>{

  useEffect(() =>{
    Aos.init({duration:2000});
  },[])


  const projectsData = [
    {
      id: "1",
      projectsName: "Zepto Clone",
      url: zeptoImage,
      descriptions: "A website with rendering based on search and cart functionality.",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/aharankit/Zepto_app",
      previewUrl: "https://zepto-app.netlify.app/",
    },
    {
      id: "2",
      projectsName: "Users Management",
      url: userManagement,
      descriptions: "A website with rendering with add ,edit and delete functionality.",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/aharankit/users",
      previewUrl: "https://usermanagement012024.netlify.app/",
    },

    {
      id: "3",
      projectsName: "Grid Table",
      url: gridlistImage,
      descriptions: "A table with CRUD functionality, sorting, and pagination.",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/aharankit/Grid-Table",
      previewUrl: "https://jsdata-table.netlify.app/",
    },
    {
      id: "4",
      projectsName: "Quiz App",
      url: quizImage,
      descriptions: "A website is rendering quiz with next, previous and shows result functionality",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/aharankit/quizapplication",
      previewUrl: "https://sparkly-flan-6e912c.netlify.app/",
    },
    {
      id: "5",
      projectsName: "Job-Board Application",
      url: foundItImage,
      descriptions: "A website is rendering jobs with searching & filtering functionality",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/rajputankit91/myFoundit",
      previewUrl: "https://search-board.netlify.app/",
    },
    {
      id: "6",
      projectsName: "Multi-Step Form Validation",
      url: multistepForm,
      descriptions: "A multi step form that displays entered details when filled out",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/rajputankit91/dynamic_form",
      previewUrl: "https://eloquent-rolypoly-ab8bed.netlify.app/",
    }
  ];

  return (
    <section className="projects" id="projects">
      
      <div className="section-container">
        <h2 className="title">My Projects</h2>

        <div className="projects-contents" >
          {projectsData.map((item, index) => (
            <div key={index} className="card" data-aos = "fade-down">
              <div className="card-content">
                <img data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={item.url} height={180} width={200} />
                <h3>{item.projectsName}</h3>
                <p>{item.descriptions}</p>
                <div className="project-btn-box">
                  <a href={item.gitHubUrl} target="_blank">
                    {item.githubBtn}
                  </a>
                  <a href={item.previewUrl} target="_blank">
                    {item.previewBtn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;