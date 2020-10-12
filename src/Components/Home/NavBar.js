import React from 'react';
import { Link } from 'react-router-dom';
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
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donation">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addedEvents">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-button">
                                <Link to="/registration"><button className="btn btn-primary button">Register</button></Link>
                            </li>
                            <li className="nav-button">
                                <Link to="/admin"><button className="btn btn-dark button">Admin</button></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h3 style={{textAlign:'center',marginTop:'50px'}}>I GROW BY HELPING PEOPLE IN NEED</h3>
        </div>
    );
};

export default NavBar;