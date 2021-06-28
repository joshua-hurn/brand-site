import React, { useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            name: "Basic Square",
            url: "https://cranky-noyce-5fb271.netlify.app/"
        },
        {
            name: "Dicey Business",
            url: "https://xenodochial-snyder-622c4e.netlify.app"
        }
    ]);

    return (
        <>
            <div className='container'>
                <h1>Projects</h1>
                {projects.map((project, index) => (
                    <div id="project-container" key={index}>
                        <h3>{project.name}</h3>
                        <iframe src={project.url} className="project-widget"></iframe>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;