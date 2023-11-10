import React from "react";

const DonateCategory = ({ category }) => {
  const { img, categoryName, title, price } = category;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
        className="lg:h-[240px] md:h-[270px] h-[270px]"
          src={img}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <p>{categoryName}</p>
        <h2 className="card-title">{title}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">view details</button>
        </div>
      </div>
    </div>
  );
};

export default DonateCategory;
