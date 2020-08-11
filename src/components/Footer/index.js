import React from 'react'

export default function Footer() {
    return (
        <footer style={footer}>
            <div style={footerSocial}>
                <ul style={ul}>
                    <li style={li}><a style={a} href="https://github.com/kylest0kes" target="blank" className="connect-link"><i className="connect-btn fab fa-github-square"></i></a></li>
                    <li style={li}><a style={a} href="mailto:kylestokes1551@gmail.com" className="connect-link"><i className="connect-btn fas fa-envelope"></i></a></li>
                    <li style={li}><a style={a} href="https://www.linkedin.com/in/kylest0kes/" target="blank" className="connect-link"><i className="connect-btn fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div style={footerBottom}>
                <p>&copy; 2020 | Design By: Kyle Stokes</p>
            </div>
        </footer>
    )
}

const footer = {
    position: 'absolute',
    color: 'rgba(255, 255, 255, .5)',
    width: '100%',
    height: 'auto',
    margin: 'auto',
    marginTop: '50px'
};

const footerBottom = {
    textAlign: 'center',
    margin: '0px',
    marginBottom: '5px',
    color: 'black',
    fontSize: '20px'
};

const footerSocial = {
    width: '100%',
    height: 'auto',
    margin: 'auto' 
};

const ul = {
    margin: '0px',
    padding: '0px',
    textAlign: 'center',
    listStyle: 'none'
};

const li = {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    margin: '0px 10px',
    fontSize: '35px',
};

const a = {
    color: 'black'
}
