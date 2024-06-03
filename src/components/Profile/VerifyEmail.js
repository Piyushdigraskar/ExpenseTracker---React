import React from "react";
import classes from './VerifyEmail.module.css';
import { useSelector } from "react-redux";


const Verify = ()=>{
    const token = useSelector(state => state.auth.token);
    const SubmitHandler = ()=>{
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAr5BGRbCS0_i84yY5l8cjSMO1Ty7hOEE4`, {
            method:'POST',
            body:JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken:token
            }),
            headers:{
                'content-type':'application/json'
            }
        }).then((res) => {
            if(res.ok){
                
                console.log('Email successfully sent for verification');
            }else{
                throw new Error('Response is not ok');
            }
        }).catch((err) => {
            console.error('Error occured during sending email',err);
        });
    }
    return <div>
        <button className={classes.action} onClick={SubmitHandler}>Verify Email</button>
    </div>
}

export default Verify;