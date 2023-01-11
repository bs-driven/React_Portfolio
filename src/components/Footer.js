import React from 'react';
import '../components/styles/Footer.css';

function Footer () {
    return(
        <div>
            <div className='footer-footer'>
                <ul>
                    <li>
                        <a href='https://github.com/bs-driven'><img  className= "footer-githubimage" style={{
                            resizeMode: "cover",
                            height: 40,
                            width: 75
                    }} src={require("../components/images/GitHub_Logo.png")} alt={ "GitHub Logo"}/></a>
                    </li>
                
                    <li>
                        <a href="https://www.linkedin.com/in/bradley-sessoms-297a571a1/"><img className= 'footer-LinedIn_logo'  style={{
                            resizeMode: "cover",
                            height: 40,
                            width: 75
                        }} src={require("../components/images/LinkedIn_Logo.png")} alt={ "Linked Logo" }/></a>
                    </li>
                        
                        
                        
                </ul>
            </div>
        </div>
    )
}

export default Footer;