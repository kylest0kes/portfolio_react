import React from 'react';
import weatherapp from '../../images/weatherapp.png'

export default function Projects() {
    return (
        <div>
            <div className="w3-animate-zoom" style={displayStyle}>
                <div className="container">
                    <h1 className="display-4">Projects</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <div style={portfolioStyle} className="w3-animate-zoom">
                            <div style={portfolioImg}>
                                <a href="https://kylest0kes.github.io/weather_app/" target="blank"><img src={weatherapp} style={portfolioImg} alt="weather app"/></a>
                            </div>
                                <div className="card-body">
                                    <h4 style={projectTitle} className="card-title project-title">Weather Dashboard</h4>
                                    <h6 style={projectBio} className="card-text">If there is one thing that is ever-changing in our lives, it is the weather. We are always trying to stay curent with it, as it can effect, and possibly ruin our plans. So with this weather dashboard application, the goal is to make the user aware of the weather for any desired loction. </h6>
                                    <br/>
                                    <a href="https://github.com/kylest0kes/weather_app" style={projectGithub} target="blank"><i className="fab fa-github"></i></a>
                                </div>
                        </div>
                    </div> 
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
    marginTop: '20px',
    marginBottom: '10px'
};

const projectTitle = {
    textAlign: 'center',
    fontStyle: 'italic'
}

const projectBio = {
    textAlign: 'center',
    height: '160px',
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