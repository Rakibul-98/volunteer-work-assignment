import React from 'react';
import Logo from '../../logos/Group 1329.png';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                    <img style={{height:'40px'}} src={Logo} alt=""/>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/donation">Donation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/events">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-button">
                                <a href="/registration"><button className="btn btn-primary button">Register</button></a>
                            </li>
                            <li className="nav-button">
                                <a href="/admin"><button className="btn btn-dark button">Admin</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h3 style={{textAlign:'center',marginTop:'50px'}}>I GROW BY HELPING PEOPLE IN NEED</h3>
        </div>
    );
};

export default NavBar;