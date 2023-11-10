import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonateApplication } from '../../utility/localstorage';
import DonateCategory from '../DonateCategory/DonateCategory';


const Donation = () => {
    const categories = useLoaderData();
    const [donateCategories,setDonateCategories] = useState([]);
    
    useEffect(()=>{
        const storedDonateIds = getStoredDonateApplication();
        if(categories.length > 0){
            const donateApplications = categories.filter(category => storedDonateIds.includes(category.id));
            setDonateCategories(donateApplications);
        }
    },[])

    return (
        <div className='mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                {
                    donateCategories.map(category => <DonateCategory key={category.id} category={category}></DonateCategory>)
                }
            </div>
        </div>
    );
};

export default Donation;