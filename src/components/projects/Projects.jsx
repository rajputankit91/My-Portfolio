import React from "react"
import zeptoImage from "../../images/zeptoImage.png";
import gridlistImage from "../../images/gridlistImage.png";
import quizImage from "../../images/quizImage.png";
import userManagement from "../../images/userManagement.png"
import "./projects.css";

const Projects = () =>{
  const projectsData = [
    {
      id: "1",
      projectsName: "Quiz App",
      url: quizImage,
      descriptions:
        "A website is rendering quiz with next, previous and shows result functionality",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/aharankit/quizapplication",
      previewUrl: "https://sparkly-flan-6e912c.netlify.app/",
    },
    {
      id: "2",
      projectsName: "Zepto Clone",
      url: zeptoImage,
      descriptions:
        "A website with rendering based on search and cart functionality.",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/aharankit/Zepto_app",
      previewUrl: "https://zepto-app.netlify.app/",
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
      projectsName: "Users Management",
      url: userManagement,
      descriptions: "A website with rendering with add ,edit and delete functionality.",
      githubBtn: "Github",
      previewBtn: "Preview",
      gitHubUrl: "https://github.com/aharankit/users",
      previewUrl: "https://usermanagement012024.netlify.app/",
    },
  ];
  return (
    <section className="projects" id="projects">
      {/* <ScrollAnimation animateIn='bounceInRight'>
        <h1>
          Some Text
        </h1>
      </ScrollAnimation> */}

      
      <div className="section-container">
        <h1 className="title">My Projects....</h1>

        <div className="projects-contents">
          {projectsData.map((item, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <img src={item.url} height={180} width={200} />
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