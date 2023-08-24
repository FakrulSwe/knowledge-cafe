import React from 'react';
import './Header.css';
import logo from '../../images/Ellipse.jpg'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h3>Knowledge Cafe</h3>
                <div style={{display: 'flex', alignItems:"center"}}>
                    <div>
                        <a href="/Blog">Blog</a>
                        <a href="/signUp">SignUp</a>
                        <a href="/SignIn">SignIn</a>
                    </div>
                    <img src={logo} alt="" href="" />
                </div>
            </nav>
        </div>
    );
};

export default Header;