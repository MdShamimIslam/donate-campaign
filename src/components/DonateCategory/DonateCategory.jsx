import React from "react";

const DonateCategory = ({ category }) => {
  const {
    img,
    categoryName,
    title,
    price,
    card_bg,
    categoryName_bg,
    text_color,
  } = category;

  const cardBg = {
    backgroundColor: card_bg,
  };
  const categoryBg = {
    backgroundColor: categoryName_bg,
  };
  const textColor = {
    color: text_color,
  };

  const btnBG = {
    backgroundColor: text_color,
  };

  return (
    <div style={cardBg} className="card card-side shadow-xl mt-6">
      <figure>
        <img
          className="lg:h-[250px] md:h-[280px] h-[280px]"
          src={img}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <div style={categoryBg} className="w-[80px] p-1 rounded-lg text-center">
          <p style={textColor}>{categoryName}</p>
        </div>
        <h2 style={textColor} className="card-title">
          {title}
        </h2>
        <p style={textColor}>${price}</p>
        <div className="card-actions">
          <button style={btnBG} className="btn text-white">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCategory;
