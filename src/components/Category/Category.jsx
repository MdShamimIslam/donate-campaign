import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { title, categoryName, img,card_bg,categoryName_bg,text_color } = category;

  const cardBg = {
    backgroundColor: card_bg
  }
  const categoryBg = {
    backgroundColor: categoryName_bg
  }
  const textColor = {
    color: text_color
  }

  return (
    <Link to="/">
      <div style={cardBg} className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[200px]" src={img} alt="image" />
        </figure>
        <div className="card-body">
         <div style={categoryBg} className="w-[100px] rounded text-center p-1"> <p  style={textColor} className="text-lg ">{categoryName}</p></div>
          <h2 style={textColor}  className="card-title text-xl">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Category;
