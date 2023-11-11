import React from 'react';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import { useEffect, useState } from 'react';

const Home = () => {

    const [categories,setCategories] = useState([]);
    const [displayCategories,setDisplayCategories] = useState([]);
    
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>{
            setCategories(data);
            setDisplayCategories(data)
        })
    },[])

    const handleCategoriesFilter = filter =>{
        if(filter === 'health' || 'Health'){
            const healthCategory = categories.filter(category => category.categoryName === 'Health');
            setDisplayCategories(healthCategory)
        }
        else if(filter === 'food' || 'Food'){
            const healthCategory = categories.filter(category => category.categoryName === 'Food');
            setDisplayCategories(healthCategory)
        }
        else if(filter === 'education' || 'Education'){
            const healthCategory = categories.filter(category => category.categoryName === 'Education');
            setDisplayCategories(healthCategory)
        }
        else if(filter === 'clothing' || 'Clothing' || 'cloth' || 'Cloth'){
            const healthCategory = categories.filter(category => category.categoryName === 'Clothing');
            setDisplayCategories(healthCategory)
        }
        
        
    }

    return (
        <div>
           <Banner handleCategoriesFilter={handleCategoriesFilter}></Banner>
           <Categories displayCategories={displayCategories}></Categories>
        </div>
    );
};

export default Home;