import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
// images part 1
import reactLogo from './../../images/footerLogo/reactLogo.png';
import nodeLogo from './../../images/footerLogo/node.js.png';
import jsLogo from './../../images/footerLogo/javaScript.png';
import expressLogo from './../../images/footerLogo/expressjs.png';
import monogodbLogo from './../../images/footerLogo/mongodb.png';
import pythonLogo from './../../images/footerLogo/python.png';
// images part 2
import htmlLogo from './../../images/footerLogo/html5.png';
import cssLogo from './../../images/footerLogo/css3.png';
import bootstrapLogo from './../../images/footerLogo/bootstrap.png';
import materialuiLogo from './../../images/footerLogo/material.png';
import sassLogo from './../../images/footerLogo/sass.png';
// images part 3
import firebaseLogo from './../../images/footerLogo/firebase.png';
import firebaseHostingLogo from './../../images/footerLogo/firebaseHosting.png';
import herokuLogo from './../../images/footerLogo/herokuLogo.png';
import netlifyLogo from './../../images/footerLogo/netlifyLogo.png';
import cPanelLogo from './../../images/footerLogo/cP.png';
//
import sydneyImg from './../../images/footerLogo/sydney.png'; 




const skills = [
    {name: "JavaScript" , link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: jsLogo},
    {name: "React" , link: "https://reactjs.org/", logo: reactLogo},
    {name: "Node JS" , link: "https://nodejs.org/en/", logo: nodeLogo},
    {name: "Express JS" , link: "https://expressjs.com/", logo: expressLogo},
    {name: "MongoDB" , link: "https://www.mongodb.com/", logo: monogodbLogo},
    {name: "Python" , link: "https://www.python.org/", logo: pythonLogo},
]

const frameworks = [
    {name: "HTML 5" , link: "https://www.w3schools.com/tags/default.asp", logo: htmlLogo},
    {name: "CSS 3" , link: "https://www.w3schools.com/cssref/default.asp", logo: cssLogo},
    {name: "Bootstrap" , link: "https://getbootstrap.com/", logo: bootstrapLogo},
    {name: "Material UI" , link: "https://material-ui.com/", logo: materialuiLogo},
    {name: "Sass" , link: "https://sass-lang.com/", logo: sassLogo},
    
]

const hostingAuth = [
    {name: "Firebase Auth" , link: "https://console.firebase.google.com/", logo: firebaseLogo},
    {name: "Firebase Hosting" , link: "https://firebase.google.com/docs/hosting", logo: firebaseHostingLogo},
    {name: "Heroku" , link: "https://www.heroku.com/", logo: herokuLogo},
    {name: "Netlify" , link: "https://www.netlify.com/", logo: netlifyLogo},
    {name: "CPanel Hosting" , link: "https://cpanel.net/", logo: cPanelLogo}

]

const ourAddress = [
    {name: "Sydney Australia" , link: "https://www.google.com/maps/place/Sydney+NSW,+Australia/@-33.847927,150.6517842,10z/data=!3m1!4b1!4m9!1m2!2m1!1ssydney!3m5!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688477!4d151.2092972!15sCgZzeWRuZXmSAQ9jb2xsb3F1aWFsX2NpdHk", logo: sydneyImg}
    
   
]



const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Technology & Frameworks"} menuItems={skills}/>
                    <FooterCol key={2} menuTitle="Markup, Frameworks &amp; Library" menuItems={frameworks}/>
                    <FooterCol key={3} menuTitle="Hosting &amp; Auth" menuItems={hostingAuth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.github.com/farukhrana14"><FontAwesomeIcon className="icon active-icon" icon={faGithub} size='5x' style={{color: '#000000'}} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/anmfarukh/"><FontAwesomeIcon className="icon" icon={faLinkedin} size='5x' style={{color: '#0e76a8'}} /></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/farukhrana"><FontAwesomeIcon className="icon" icon={faTwitter} size='5x' style={{color: ' #00acee'}} /></a></li>
                        </ul>
                        <div className="mt-1">
                            <a href="tel:+8801765110099"><strong>Call me Now!</strong></a>
                            
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className='designed-by-text'>Designed &amp; Developed by <span className='developer-name'>ANM Farukh</span></p>
                    <p className='copyRight-by-text'> Copyright@{(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;