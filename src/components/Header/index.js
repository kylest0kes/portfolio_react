import React from 'react';
import { Link } from 'react-router-dom';
import kyle from '../../images/newkyle.jpg';


export default function Header() {
    return (
        <div>
            <img style={imgStyle} className="top-img" src={kyle} alt="Kyle"/>
            <div style={displayStyle}>   
                <Link to="/" style={{color: 'black'}}>About</Link> | <Link to="/projects" style={{color: 'black'}}>Projects</Link> | <Link to="/resume" style={{color: 'black'}}>Resume</Link>
            </div> 
            <div className="w3-animate-zoom">
                <div className="container">
                    <h1 style={{textAlign: 'center', paddingTop: '15px'}} className="display-4">Kyle Stokes</h1>
                </div>
            </div>
        </div>
    )
}

const displayStyle = {
    textAlign: 'center',
    paddingTop: '15px',
    fontSize: '23px',
    color: 'black'
}

const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    marginBottom: '20px',
    borderRadius: '20px'
}

