import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Logo from '../../logos/Group 1329.png';
import Icon1 from '../../logos/users-alt 1.png';
import Icon2 from '../../logos/plus 1.png';

const Admin = () => {


    const [loggedInUser] = useContext(UserContext);
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('https://secure-temple-36850.herokuapp.com/events?email='+loggedInUser.email, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setLists(data))
     },[])

    const listStyle ={
        width: '80%',
        marginTop: '20px',
    }



    return (
        <div style={{display:'flex'}} className="container">
            <div className="img-container">
               <a href="/"><img style={{height:'50px',marginTop:'20px'}} src={Logo} alt=""/></a>
               <p style={{marginTop:'40px',color:'blue'}}><small style={{fontWeight:'bold'}}><img style={{height:'14px'}} src={Icon1} alt=""/> Volunteer register list</small></p>
               <p><small style={{fontWeight:'bold'}}> <img style={{height:'14px'}} src={Icon2} alt=""/> Add event</small></p>
            </div>
            <div style={listStyle}>
                <h5 style={{marginLeft:'130px'}}><strong>Volunteer register list</strong></h5>
                <div style={{border:'1px solid black',marginLeft:'50px',marginTop:'20px',padding:'10px'}}>
                    <p><span style={{fontWeight:'bold'}}>Name</span> <span style={{marginLeft:'95px',fontWeight:'bold'}}>Email ID</span> <span style={{marginLeft:'195px',fontWeight:'bold'}}>Registration Date</span> <span style={{marginLeft:'70px',fontWeight:'bold'}}>Event name</span></p>
                   {
                       lists.map(list => <p key={list._id}>{list.name} <span style={{marginLeft:'40px'}}>{list.email}</span> <span style={{marginLeft:'40px'}}>{list.date}</span> <span style={{marginLeft:'90px'}}>{list.eventName}</span> </p>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Admin;