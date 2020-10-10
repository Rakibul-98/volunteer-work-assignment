import React, { useContext, useState } from 'react';
import Logo from '../../logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../logos/google.png'



firebase.initializeApp(firebaseConfig);




const Login = () => {

    const [user, setUser] = useState({
        isSignedIn:false,
        name:'',
        email:''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
            const signedInUser ={
                isSignedIn:true,
                name:displayName,
                email:email
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch(err=>{
            console.log(err)
            console.log(err.message)
        })
    }

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
    // .alter-btn{
    //     border: 1px solid grey;
    //     ;
    //     ;
    //     ;
    // }

    const buttonStyle={
        marginTop:'10px',
        marginLeft:'23px',
        border:'1px solid grey',
        backgroundColor: 'white',
        borderRadius: '20px',
        width: '350px',
        padding:'5px'
    }

    return (
        <div>
            <Link to="/"><img style={imgStyle} src={Logo} alt=""/></Link>
            <div style={boxStyle}>
                <h3 style={{textAlign:'center',marginTop:'80px'}}>Login with</h3>
                <button onClick={handleSignIn} style={buttonStyle}><img style={{height:'25px',padding:'0 0 3px',marginRight:'60px'}} src={googleIcon} alt=""/> <span style={{marginRight:'90px'}}>Continue With Google</span> </button>
                <p style={{textAlign:'center',marginTop:'10px'}}><small>Don't Have an account?<Link to="/login">Create an account</Link></small></p>
            </div>
        </div>
    );
};

export default Login;