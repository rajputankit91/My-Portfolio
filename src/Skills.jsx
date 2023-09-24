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
            <div className="mySkills" id="skills">
                <div className="skill-container">
                    <div className="skill-heading">
                        <h1>My Skills</h1>
                    </div>
                    <div className="skill-content">
                        {
                            skillData.map((item,index) =><div className="skill" width ={100}>
                                {<img key = {index} src={item.img} height={100} width={100}/>}
                                {<h2>{item.name}</h2>}
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}