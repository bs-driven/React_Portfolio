import React from 'react';
import './styles/Footer.css';

function Footer () {
    return(
        <div>
            <div className='footer-footer'>
                <ul className='footer-ul'>
                    <li>
                        <a href='https://github.com/bs-driven'><img  className= "footer-githubimage" style={{
                            resizeMode: "cover",
                            height: 40,
                            width: 75
                    }} src={require("../components/images/GitHub_Logo.png")} alt={ "GitHub Logo"}/></a>
                    </li>
                
                    <li>
                        <a href="https://linkedin.com/in/bradley-ses"><img className= 'footer-LinedIn_logo'  style={{
                            resizeMode: "cover",
                            height: 40,
                            width: 75
                        }} src={require("../components/images/LinkedIn_Logo.png")} alt={ "LinkedIn Logo" }/></a>
                    </li>
                        
                        
                        
                </ul>
            </div>
        </div>
    )
}

export default Footer;