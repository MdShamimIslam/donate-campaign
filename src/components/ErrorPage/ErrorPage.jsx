import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-36 md:mt-64'>
            <h3 className="text-7xl text-red-700 font-bold">Ops!!!!</h3>
            <h2 className='text-4xl font-semibold mt-2'>Page not found</h2>
            <Link to='/' ><button className='mt-4 btn'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;