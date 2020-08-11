import React from 'react'

export default function AboutMe() {
    return (
        <div>
            <div style={displayStyle} className="w3-animate-zoom">
                <div className="container">
                    <h2 className="display-4">About Me</h2>
                </div>
            </div>
            <div style={cardStyle} className="card about-me w3-animate-zoom">
                <div className="card-body about-card">
                <h4 className="card-text bio w3-animate-zoom">Hello world, I am Kyle! Ever since the first time I browsed my AOL Kids account on the family computer some 20+ years ago, I have always had an interest and curiosity into the inner workings of the web. As I got older, and as websites and the technology behind them became more advanced, naturally my curiosity increased. Now, being immersed in the world of Full Stack web development, I am ready to leave my mark, the same way those first websites left their mark on me.</h4>
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
}

const cardStyle = {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '25px',
    borderRadius: '20px',
    width: '80%',
    backgroundColor: 'gray',
    textAlign: 'center'
}
