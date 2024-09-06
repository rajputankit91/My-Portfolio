import React, { useEffect } from "react";
import "./skills.css";
import 'animate.css';
import Aos from "aos";
import "aos/dist/aos.css"

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 200 })
  }, []);

  const skillData = [
    {
      name: "HTML",
      img: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
    },
    {
      name: "CSS",
      img: "https://e7.pngegg.com/pngimages/893/87/png-clipart-cascading-style-sheets-logo-css3-html-css3-logo-blue-angle-thumbnail.png",
    },
    {
      name: "JavaScript",
      img: "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png",
    },
    {
      name: "React.js",
      img: "https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png",
    },
    {
      name: "Redux",
      img: "https://e7.pngegg.com/pngimages/413/852/png-clipart-redux-react-logo-javascript-dq-purple-violet-thumbnail.png",
    },
    {
      name: "Git",
      img: "https://e7.pngegg.com/pngimages/685/833/png-clipart-red-sign-logo-git-logo-icons-logos-emojis-tech-companies-thumbnail.png",
    },
    {
      name: "GitHub",
      img: "https://e7.pngegg.com/pngimages/646/324/png-clipart-github-computer-icons-github-logo-monochrome-thumbnail.png",
    },
  ];

  return (
    <section className="mySkills" id="skills">
      <div className="section-container">
        <h2 className="title">My Skills</h2>
        <div className="skill-content">
          <div className="column-left">
            <div className="text">My creative skills</div>
            <p>
              I'm a React Js Developer with a passion for learning and can
              work with estimation of future tasks and client feedback. I am
              highly-motivated, result oriented, self-driven, hard-working,
              fast learner and constantly seeking to improve my skills and am
              fully aware of the latest Front-end Development Tools. I have a
              firm knowledge of JavaScript and React Js, Redux, HTML5, CSS3, Git, REST
              API, JSON and Axios.
            </p>
          </div>

          <div className="column-right">
            <div className="info">
              {skillData.map((item, index) => (
                <a key={index} className="skill animate__animated" width={100} data-aos="zoom-in">
                  {
                    <img
                      key={index}
                      src={item.img}
                      height={100}
                      width={100}
                    />
                  }
                  {<p>{item.name}</p>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;