import React from 'react';
import resume from '../../images/kyleresumedl.pdf';


export default function Resume() {
    return (
        <div style={displayStyle} className="w3-animate-zoom">
            <div className="container">
                <h2 className="display-4">Resume</h2>
            </div>
            <a href={resume} target="blank" style={resumeStyle}><i className="fas fa-file-download dl-btn"></i></a>
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