import React from "react";

const Service = ({ service }) => {
  const { service_id, title, img, price } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
            className="h-[200px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p className="text-primary font-bold text-xl">Price : ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
