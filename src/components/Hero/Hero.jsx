import React from "react";
import BiryaniImg1 from "../../assets/biryani.png";
import Vector from "../../assets/vector3.png";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
];
const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);

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
    <div
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to {" "}
              <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                City
              </span>{" "}
              Eats
            </h1>
            <p className="text-lg font-bold" style={{ color: '#006400', fontFamily: 'Arial' }}>
    Feel the aroma that tells the story!
</p>

            <div>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Order Now
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-once="true"
                src={imageId}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
              />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default Hero;