import React from 'react'
import kyle from '../../images/newkyle.jpg'


export default function Header() {
    return (
        <div>
            <img style={imgStyle} className="top-img" src={kyle} alt="Kyle"/>

            <div className="w3-animate-zoom">
                <div className="container">
                    <h1 style={displayStyle} className="display-4">Kyle Stokes</h1>
                </div>
            </div>
        </div>
    )
}

const displayStyle = {
    textAlign: 'center',
    paddingTop: '15px'
}

const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    marginBottom: '20px',
    borderRadius: '20px'
}