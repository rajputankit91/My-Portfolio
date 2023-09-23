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
            'projectsName' : 'ZeptoClone',
            'url' : '	https://jugalrajputportfolio.netlify.app/assets/zepto-8f2b31f4.png',
            'descriptions' : 'A website with rendering based on search and cart functionality.',
            'githubBtn' : 'github',
            'previewBtn' : 'Preview'
        },
    ]
    return(
        <>
            <div>
                <div>
                    <h1>My Projects</h1>
                </div>

                <div>
                    {
                        projectsData.map((item,index) =><div>
                            {<img src={item.url} height={180} width={200}/>}
                            {<h3>{item.projectsName}</h3>}
                            {<p>{item.descriptions}</p>}
                            {<button>{item.githubBtn}</button>}
                            {<button>{item.previewBtn}</button>}
                        </div>)   
                    }
                </div>
            </div>
        </>
    )
}