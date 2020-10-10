import React from 'react';
import Logo from '../../logos/Group 1329.png'

const Login = () => {

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
        height:'300px',
        width: '400px',
        marginTop:'50px',
        border:'1px solid black',
        borderRadius:'3px'
    }

    const buttonStyle={
        marginTop:'10px',
        marginLeft:'110px'
    }

    return (
        <div>
            <img style={imgStyle} src={Logo} alt=""/>
            <div style={boxStyle}>
                <h3 style={{textAlign:'center',marginTop:'80px'}}>Login with</h3>
                <button style={buttonStyle}>Continue With Google</button>
                <p style={{textAlign:'center',marginTop:'10px'}}>Don't Have an account?<a href="">Create an account</a></p>
            </div>
        </div>
    );
};

export default Login;