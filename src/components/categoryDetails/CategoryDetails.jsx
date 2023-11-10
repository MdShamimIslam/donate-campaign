import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './CategoryDetails.css';

const CategoryDetails = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const category = categories.find((category) => category.id === idInt);
  const { img, price, categoryName, description,text_color
  } = category;
  console.log(category);

  const categoryBg = {
    backgroundColor:text_color

  }

  return (
    <div className="mt-12">
      <div className="card w-[600px] mx-auto ml-6 md:ml-24">
        <div className="image-container">
            <img className="rounded-lg image" src={img} alt="category-image" />
            <div className="overlay"></div>
            <button style={categoryBg} className="w-[140px] p-2 rounded-md -mt-16 ml-4 ">Donate ${price}</button>
        </div>
        <div className="mt-12">
        <h2 className="text-3xl font-semibold">{categoryName}</h2>
        <p className="text-lg mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
