import React from "react";
import { Link } from "react-router-dom";


const Service = ({ service }) => {
  const { _id,service_id, title, img, price } = service;

  



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

            <Link to= {`/checkout/${_id}`}>
            <button className="btn btn-orange">Book Now </button>
            </Link>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
