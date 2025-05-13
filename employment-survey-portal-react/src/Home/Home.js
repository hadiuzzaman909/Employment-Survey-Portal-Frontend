import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h3 className="text-center">Welcome to Employment Survey Portal</h3>
            <div className='text-center'>
            <Link to="/survey-form"><Button className='btn-primary' type="">Go For Survey</Button></Link>
            </div>

        </div>
    );
};

export default Home;