import React, { useRef } from 'react';
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email" />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button onClick={signIn} type="submit">Sign In</button>


        <h4>
          <span className='signUpScreen__gray'>New to Netflix? </span>
          <span onClick={register} className='signUpScreen__link'>Sign up now.</span>
        </h4>
      </form>
    </div>
  ); 
}

export default SignUpScreen;
