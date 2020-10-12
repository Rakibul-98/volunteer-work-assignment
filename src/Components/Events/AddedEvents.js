import { Link } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../logos/Group 1329.png'

const AddedEvents = () => {

    const boxStyle={
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:'200px',
        width: '200px',
        marginTop:'50px',
        border:'1px solid black',
        borderRadius:'3px'
    }

    const [loggedInUser] = useContext(UserContext);
    const [volunteerEvents,setVolunteerEvents] = useState([]);
    const history = useHistory();
    

    useEffect(() => {
       fetch('https://secure-temple-36850.herokuapp.com/events?email='+loggedInUser.email, {
           method:'GET',
           headers:{
               'Content-Type': 'application/json',
               authorization : `Bearer ${sessionStorage.getItem('token')}`
           }
       })
       .then(res => res.json())
       .then(data => setVolunteerEvents(data))
    },[])

    const handleDelete = (id) =>{
        fetch(`https://secure-temple-36850.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result,'deleted successfully');
        })
        history.go(0)
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="/home"><img style={{height:'40px'}} src={Logo} alt=""/></a>

                    <div style={{marginLeft:'500px'}} className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donation">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li style={{marginTop:'16px',marginLeft:'10px'}}>{loggedInUser.name} </li>
                        </ul>
                    </div>
                </nav>
            <h3>You have {volunteerEvents.length} registered events... </h3>
            {
                volunteerEvents.map(volunteerEvent => 
                <div key={volunteerEvent._id} style={boxStyle}>
                   <div style={{textAlign:'center',marginTop:'20px'}}>
                        <h3>{volunteerEvent.eventName} </h3>
                        <p><small>{volunteerEvent.date} </small></p>
                        <button onClick={()=>handleDelete(volunteerEvent._id)}>Cancel</button>
                   </div>
                </div>
                )
            }
        </div>
    );
};

export default AddedEvents;