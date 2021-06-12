import React, { useState } from 'react';
import firebase from '../firebase';
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";


function Login() { 
  const [user, dispatch] = useStateValue(null);
  const [phoneNumber, setPhoneNumber] = useState('') 
  const sendVerification = (e) => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
    .then((e) => {
      let code = prompt("Enter OTP");
      if(code === null){
        return
      }
      e.confirm(code).then((response) => {
        dispatch({
          type: "REGISTER_USER",
          user: {
            auth: auth,
          },
        });
      })
    }).catch((error) => {
      console.log(error)
    })
  }
    return (
        <div className="login">
          <div id="recaptcha-container"></div>
          <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
          <button onClick={sendVerification}>Send</button>
        </div>
    )
}

export default Login
