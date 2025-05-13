import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SocialRegister from '../SocialRegister/SocialRegister';
import './Register.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handleRegister = event => {
        event.preventDefault();
        const name=nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      
        createUserWithEmailAndPassword(email, password);

    }
    const navigate=useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
       
        errorElement=<p className='text-danger'>Error: {error?.message}</p>
 
     }


      if(loading){
        return <Loading></Loading>
      }

      if(user){
        navigate(from, { replace: true });
    }
    return (
        <div className='container mx-auto mt-5 Register shadow-lg p-3 mb-5 '>
            <h2 className='text-dark text-center'>Sign Up</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="User name" required />
                </Form.Group>
                <p className='text-center'>{errorElement}</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button className='signUpBtn' type="submit">
                        Submit
                    </Button>
                    <p className='mt-2 newPortal'>Have an account?</p>
                    <Button className='loginBtn' variant="" type="button"><Link className='text-dark btn-link' to='/login'>Login</Link>
                    </Button>
                </div>

            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
