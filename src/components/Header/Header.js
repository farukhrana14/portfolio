import React from 'react';
import HeaderContents from './HeaderContents/HeaderContents';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar />
            <HeaderContents/>
            
        </div>

    );
};

export default Header;