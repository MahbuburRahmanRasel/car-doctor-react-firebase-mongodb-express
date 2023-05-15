import React from "react";
import img1 from "../../assets/images/homeCarousel/1.jpg";
import img2 from "../../assets/images/homeCarousel/2.jpg";
import img3 from "../../assets/images/homeCarousel/3.jpg";
import img4 from "../../assets/images/homeCarousel/4.jpg";

const Banner = () => {


  const textContent = 
  <>
    <div className="absolute w-full h-full   bg-gradient-to-r from-black to-[rgba(21,21,21,0)] flex items-center pl-5 rounded-xl">
            <div className="text-white w-1/3 ml-5 space-y-5 ">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          
            <div className="flex gap-3">
              <button className="btn-orange">
                Discover More
              </button>
              <button className="btn btn-outline text-white hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
            </div>
          </div>
  </>


  return (
    <div>
      <div className="carousel w-full h-[600px] 	rounded-xl	">
        <div id="slide1" className="carousel-item relative w-full   ">
          <img src={img1} className="w-full object-cover" />
            {textContent}
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/3">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover" />
          {textContent}
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/3">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover" />
          {textContent}
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/3">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover" />
          {textContent}
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/3">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
