import React from 'react';
//import './script'

export default function BrandStatement() {
    return (
        <div className="w3-animate-zoom" style={cardStyle}>
            <div className="card-body">
                <h3 id="typedtext" className="w3-animate-zoom">Full Stack Web Developer with a reputation for thoroughness, determination, and a passion for web design.</h3>
            </div>
        </div>
    )
}

const cardStyle = {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '25px',
    borderRadius: '20px',
    width: '60%',
    backgroundColor: 'gray',
    textAlign: 'center'
}