import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div className='my-12'>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;