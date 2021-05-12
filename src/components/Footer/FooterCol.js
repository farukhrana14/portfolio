import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

const FooterCol = (props) => {
    return (
        <div className=" footer-div col-md-3">
            <h6 className="text-brand">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><a href={item.link} className="text-secondary"> <img className="footer-logo" src={item.logo} alt='...' /> <span className="footer-item"> {item.name}</span></a></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;