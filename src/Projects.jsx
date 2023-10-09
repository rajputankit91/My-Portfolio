export default function Projects(){
    const projectsData = [
        {
            'projectsName' : 'Grid Table',
            'url' : 'https://jugalrajputportfolio.netlify.app/assets/gridTable-087964e8.png',
            'descriptions' : 'A table with CRUD functionality, sorting, and pagination.',
            'githubBtn' : 'Github',
            'previewBtn' : 'Preview'
        },
        {
            'projectsName' : 'Zepto Clone',
            'url' : '	https://jugalrajputportfolio.netlify.app/assets/zepto-8f2b31f4.png',
            'descriptions' : 'A website with rendering based on search and cart functionality.',
            'githubBtn' : 'Github',
            'previewBtn' : 'Preview'
        },
        
    ]
    return(
        <>
            <section className="projects" id="projects">
                <div className="section-container">
                    <h2 className="title">My Projects</h2>

                    <div className="projects-contents">
                        {
                            projectsData.map((item,index) =><div key={index} className="card">
                                <div className="card-content">
                                    {<img src={item.url} height={180} width={200}/>}
                                    {<h3>{item.projectsName}</h3>}
                                    {<p>{item.descriptions}</p>}
                                    <div className="project-btn-box">
                                        {<button>{item.githubBtn}</button>}
                                        {<button>{item.previewBtn}</button>}
                                    </div>
                                </div>
                            </div>)   
                        }
                    </div>
                </div>
            </section>
        </>
    )
}