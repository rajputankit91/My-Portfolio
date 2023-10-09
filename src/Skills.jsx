export default function Skills(){
    const skillData = [
        {
            'name' : 'HTML',
            'img' : 'https://dineshrout.netlify.app/icons/html.svg'
        },
        {
            'name' : 'CSS',
            'img' : 'https://dineshrout.netlify.app/icons/css.svg'
        },
        {
            'name' : 'JavaScript',
            'img' : 'https://dineshrout.netlify.app/icons/javascript.svg'
        },
        {
            'name' : 'React.js',
            'img' : 'https://dineshrout.netlify.app/icons/react.svg'
        },
        {
            'name' : 'Redux',
            'img' : 'https://dineshrout.netlify.app/icons/redux.svg'
        },
        {
            'name' : 'Git',
            'img' : 'https://dineshrout.netlify.app/icons/git.svg'
        },
        {
            'name' : 'GitHub',
            'img' : 'https://dineshrout.netlify.app/icons/github.svg'
        }
    ]

    return(
        <>
            <section className="mySkills" id="skills">
                <div className="section-container">
                <h2 className='title'>My Skills</h2>
                <div className="skill-content">
                    <div className="column left">
                        <div className="text">My creative skills</div>
                        <p>I'm a React Js Developer with a passion for learning and can work with estimation of future tasks and client feedback. I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools. I have a firm knowledge of JavaScript and React Js, Parcel js, Node js, Redux, HTML5, CSS3, Git, SASS, Tailwind CSS, Bootstrap, REST API, JSON, Axios, Adobe Photoshop and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.</p>
                    </div>
                    
                    <div className="column right">
                        <div className="info">
                    {
                        skillData.map((item,index) =><a key={index} className="skill" width ={100}>
                            {<img key = {index} src={item.img} height={100} width={100}/>}
                            {<h2>{item.name}</h2>}
                        </a>)
                    }
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}