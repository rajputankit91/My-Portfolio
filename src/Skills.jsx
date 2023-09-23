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
        }
    ]

    return(
        <>
            <div className="mySkills">
                <div className="skill-container">
                    <div className="skill-heading">
                        <h1>My Skills</h1>
                    </div>
                    <div className="skill-content">
                        {
                            skillData.map((item,index) =><div className="skill" width ={200}>
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