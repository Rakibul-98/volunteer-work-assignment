import { TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        height:'450px',
        width: '400px',
        marginTop:'20px',
        border:'1px solid black',
        borderRadius:'3px'
    }

    const inputStyle={
        marginBottom:'15px',
        width:'350px',
        marginLeft:'20px'
    }

    const buttonStyle={
        marginBottom:'15px',
        width:'350px',
        marginLeft:'20px',
        marginTop:'15px',
        borderRadius:'0'
    }

    const handleSubmit = () => {
        
    }

    return (

        <div>
            <Link to="/"><img style={imgStyle} src={Logo} alt=""/></Link>
            <div style={boxStyle}>
               <h4 style={{marginLeft:'20px',marginTop:'20px'}}>Register as a volunteer</h4>
               <form className='reg-form' action="">
                <TextField style={inputStyle}  id="standard" label="Full Name" value={loggedInUser.name} />
                <TextField style={inputStyle}  id="standard" label="User-name or Email" value={loggedInUser.email} />
                <TextField style={inputStyle}  id="standard" label="Date" />
                <TextField style={inputStyle} id="standard" label="Description" />
                <TextField style={inputStyle} id="standard" label="Event name" />
                <Link to='/addedEvents'><button onClick={handleSubmit} className="btn btn-primary" style={buttonStyle} type="submit">Registration</button></Link>
               </form>
            </div>
        </div>
    );
};

export default Registration;