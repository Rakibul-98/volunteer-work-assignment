import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../logos/Group 1329.png'






const Registration = () => {

    const [loggedInUser] = useContext(UserContext);

    const imgStyle={
        height:'100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '12%',
        marginTop:'50px'
    }

    const boxStyle={
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:'430px',
        width: '400px',
        marginTop:'20px',
        border:'1px solid black',
        borderRadius:'3px'
    }

    const inputStyle={
        marginTop:'25px',
        width:'350px',
        marginLeft:'20px',
        borderTop:'none',
        borderLeft:'none',
        borderRight:'none',
        borderBottom:'1px solid grey'
    }

    const buttonStyle={
        width:'350px',
        marginLeft:'20px',
        marginTop:'35px',
        borderRadius:'0'
    }


    const [eventData, setEventData] = useState([]);

    const history = useHistory();



    const { register, handleSubmit} = useForm();
    const onSubmit = data =>{
        const newEvent ={...loggedInUser, ...data}
         fetch('https://secure-temple-36850.herokuapp.com/addEvent', {
             method:"POST",
             headers:{"Content-Type" : "application/json"},
             body:JSON.stringify(newEvent)
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
         })
        setEventData(data)
        history.push('/addedEvents')
    }


    return (

        <div>
            <Link to="/"><img style={imgStyle} src={Logo} alt=""/></Link>
            <div style={boxStyle}>
               <h4 style={{marginLeft:'20px',marginTop:'20px'}}>Register as a volunteer</h4>

               
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="fullName" placeholder="Full Name" style={inputStyle} ref={register} value={loggedInUser.name} />
                    <input name="email" placeholder="User-name or Email" style={inputStyle} ref={register} value={loggedInUser.email} />
                    <input name="date" placeholder="Date" style={inputStyle} ref={register} value={new Date().toDateString("dd/MM/yyyy")} required />
                    <input name="description" placeholder="Description" style={inputStyle} ref={register} />
                    <input name="eventName" placeholder="Event Name" style={inputStyle} ref={register} required />

                    <button className="btn btn-primary" style={buttonStyle}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;