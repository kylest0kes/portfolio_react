import React from 'react';
import ProjectCard from '../Project Card'


export default function Projects(props) {
     
        return (
            <div>
                <div className="w3-animate-zoom" style={displayStyle}>
                    <div className="container">
                        <h1 className="display-4">Projects</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    {props.projectInfo.map(project => (
                        <ProjectCard 
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        bio={project.bio}
                        githubLink={project.githubLink}
                        projectLink={project.projectLink}
                        />
                    ))}
                    </div>
                </div>
            </div>
        )
}

const displayStyle = {
    textAlign: 'center',
    paddingTop: '15px',
    marginTop: '15px',
    marginBottom: '15px',
};