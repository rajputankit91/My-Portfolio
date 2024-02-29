import React, { useEffect } from "react";
import "./skills.css";
import 'animate.css';
import Aos from "aos";
import "aos/dist/aos.css"

const Skills = () =>{

  useEffect(() =>{
    Aos.init({duration:200})
  },[]);

  const skillData = [
    {
      name: "HTML",
      img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      name: "CSS",
      img: "data:image/png;base64,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",
    },
    {
      name: "JavaScript",
      img: "data:image/png;base64,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",
    },
    {
      name: "React.js",
      img: "data:image/png;base64,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",
    },
    {
      name: "Redux",
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Git",
      img: "data:image/png;base64,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",
    },
    {
      name: "GitHub",
      img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    },
  ];

  return (
    <>
      <section className="mySkills" id="skills">
        <div className="section-container">
          <h1 className="title">My Skills....</h1>
          <div className="skill-content">
            <div className="column-left">
              <div className="text">My creative skills</div>
              <p>
                I'm a React Js Developer with a passion for learning and can
                work with estimation of future tasks and client feedback. I am
                highly-motivated, result oriented, self-driven, hard-working,
                fast learner and constantly seeking to improve my skills and am
                fully aware of the latest Front-end Development Tools. I have a
                firm knowledge of JavaScript and React Js, Parcel js, Node js,
                Redux, HTML5, CSS3, Git, SASS, Tailwind CSS, Bootstrap, REST
                API, JSON, Axios, Adobe Photoshop and possess a good knowledge
                of computer software packages (frameworks and tools) that are
                used in today’s technology.
              </p>
            </div>

            <div className="column-right">
              <div className="info">
                {skillData.map((item, index) => (
                  <a key={index} className="skill animate__animated" width={100} data-aos = "zoom-in">
                    {
                      <img
                        key={index}
                        src={item.img}
                        height={100}
                        width={100}
                      />
                    }
                    {<h2>{item.name}</h2>}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;