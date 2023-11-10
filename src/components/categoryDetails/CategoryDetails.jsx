import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './CategoryDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateApplication } from "../../utility/localstorage";

const CategoryDetails = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const category = categories.find((category) => category.id === idInt);
  const { img, price, categoryName, description,text_color} = category;
  

  const categoryBg = {
    backgroundColor:text_color

  }

  const notify = () => {
    saveDonateApplication(idInt)
    toast("Your Donate Successfully")
  };

  return (
    <div className="mt-12">
      <div className="card w-[600px] mx-auto p-4">
        <div className="image-container">
            <img className="rounded-lg image" src={img} alt="category-image" />
            <div className="overlay"></div>
            <button onClick={notify} style={categoryBg} className="absolute w-[140px] p-2 rounded-md -mt-16 ml-4 ">Donate ${price}</button>
        </div>
        <div className="mt-12">
        <h2 className="text-3xl font-semibold">{categoryName}</h2>
        <p className="text-lg mt-2">{description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CategoryDetails;
