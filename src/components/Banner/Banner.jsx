import React from 'react';

const Banner = () => {
    return (
        <div className='mt-12 p-4'>
            <h2 className='text-5xl font-bold'>I Grow By Helping People In Need</h2>
            <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs mt-8" />
            <button className="btn btn-warning md:ml-2 mt-2 md:mt-0">Search</button>
        </div>
    );
};

export default Banner;