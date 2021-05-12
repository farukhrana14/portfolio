import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const noNamed = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
]
const ourAddress = [
    {name: "New York - 101010 Hudson" , link: "//google.com/map"},
    {name: "Yards" , link: "//google.com/map"},
   
]
const oralHealth = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]
const services = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]

const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
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
                    <p>Designed &amp; Developed by ANM Farukh</p>
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;