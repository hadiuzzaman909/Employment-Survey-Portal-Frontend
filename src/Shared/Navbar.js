import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Employment Survey Portal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div class="d-flex me-3" >
                            {user ? <button type="button" className='btn btn-link sign-out text-decoration-none' onClick={handleSignOut}>Sign Out</button> : <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>}
                        </div>
                        <div class="d-flex " >
                            <Button className='signUpBtn' variant="" type="button"><Link className='text-light btn-link' to='/register'>Sign Up</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;