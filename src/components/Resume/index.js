import React from 'react';
import resume from '../../images/kyleresumedl.pdf';


export default function Resume() {
    return (
        <div>   
            <h2 style={displayStyle} className="display-4 w3-animate-zoom">Resume</h2>
            <div style={displayStyle} className="w3-animate-zoom">
                <a href={resume} target="blank" style={resumeStyle}><i className="fas fa-file-download dl-btn"></i></a>
            </div>
        </div> 
    )
}

//ADD HOVER EFFECT TO BTN

const displayStyle = {
    textAlign: 'center',
    paddingTop: '15px',
    marginTop: '15px'
}

const resumeStyle = {
    color: 'black',
    fontSize: '150px',
    width: '115px'
}