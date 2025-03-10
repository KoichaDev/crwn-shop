import React from 'react';
import './Sign-in-and-sign-out.style.scss';
import SignIn from './../../Components/sign-in/sign-in.component';
import SignUp from './../../Components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
