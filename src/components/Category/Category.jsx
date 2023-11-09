import React from "react";

const Category = ({ category }) => {
const {title,categoryName} = category;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className="text-lg">{categoryName}</p>
        <h2 className="text-xl">{title}</h2>
       
      </div>
    </div>
  );
};

export default Category;
