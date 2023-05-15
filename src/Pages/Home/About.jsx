import React from "react";
import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:gap-10  justify-center">
          <div className="lg:w-1/2 relative">
            <img
              src={img1}
              className=" rounded-lg shadow-2xl w-[450px] object-cover h-full "
            />
            <img
              src={img2}
              alt=""
              className="absolute w-1/2  border-8 border-white top-1/2 right-5  rounded-xl"
            />
          </div>
          <div className=" lg:w-1/2 space-y-5">
            <h3 className="text-primary font-bold"> About </h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <button className="btn-orange "> Get More Info </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
