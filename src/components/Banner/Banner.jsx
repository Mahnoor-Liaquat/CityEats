import React from "react";
import BiryaniImg from "../../assets/biryani_cover.jpg";
import Vector from "../../assets/vector3.png";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]" id="about">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  About CityEats:
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                At City Eats Biryani Center, our passion for this royal dish is unparalleled. We have dedicated ourselves to perfecting the art of biryani, ensuring that each preparation reflects the rich heritage and diverse flavors that make this dish a culinary masterpiece.
                  <br />
                  <br />
                  Our journey began with a vision to create a biryani haven that stands out for its commitment to quality, authenticity, and, of course, spice.
                </p>
              
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
