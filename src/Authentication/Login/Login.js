import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

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
        <div className='container mx-auto mt-5 Login shadow-lg p-3 mb-5 '>
        <ToastContainer />
        <h2 className='text-dark text-center'>Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  className='w-100' ref={emailRef}  type="email" placeholder="Enter email" required />
            </Form.Group>
            <p className='text-center'>{errorElement}</p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='w-100' ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <div className='d-flex justify-content-between'>
            <Button  className='loginBtn'  variant="" type="submit">
                Login
            </Button>
            <p className='mt-2 newPortal'>New to this Portal?</p>
            <Button  className='signUpBtn' variant="" type="button"><Link className='text-light btn-link' to='/register'>Sign Up</Link>
            </Button>
            </div>
        </Form>

        <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;