import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    text: "City Eats never disappoints! From the vibrant ambiance to the rich flavors of their biryanis, it's a go-to spot for a satisfying culinary experience.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    text: "City Eats is my biryani haven! The attention to detail in every dish, from the Royal Mughlai to the Spicy Seafood Delight, keeps me coming back for more.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    text: "City Eats Biryani is a flavor explosion! The diverse menu, including the Vegetarian Paradise, caters to every palate. Consistently delicious my favorite biryani spot!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              "City Eats Biryani is an absolute delight! The Royal Mughlai
              Biryani took me on a flavorful journey, and the Spicy Seafood
              Delight Biryani was a true coastal indulgence. The Vegetarian
              Paradise Biryani surprised me with its rich taste. Each biryani is
              a testament to their commitment to authenticity and exceptional
              flavors. A must-try for biryani enthusiasts!"
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
