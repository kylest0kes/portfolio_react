import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className="col s12 m4">
            <div style={portfolioStyle} className="w3-animate-zoom">
                <div style={portfolioImg}>
                    <a href={props.projectLink} target="blank"><img src={props.image} style={portfolioImg} alt={props.title}/></a>
                </div>
                    <div className="card-body">
                        <h4 style={projectTitle} className="card-title project-title">{props.title}</h4>
                        <h6 style={projectBio} className="card-text">{props.bio}</h6>
                        <br/>
                        <a href={props.githubLink} style={projectGithub} target="blank"><i className="fab fa-github"></i></a>
                    </div>
            </div>
        </div> 
    )
}

const portfolioStyle = {
    height: '500px',
    width: '350px',
    backgroundColor: 'gray',
    borderRadius: '20px',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '25px'
};

const portfolioImg = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '10px',
    marginBottom: '10px'
};

const projectTitle = {
    textAlign: 'center',
    fontStyle: 'italic'
}

const projectBio = {
    textAlign: 'center',
    height: '120px',
    overflow: 'auto',
    fontSize: '17px'
}

const projectGithub = {
    color: 'black',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30px',
    fontSize: '30px'
}
