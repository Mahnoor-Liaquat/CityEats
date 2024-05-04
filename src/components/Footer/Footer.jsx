import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-1 py-5">
          <div className=" py-8 px-12 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              City Eats            </h1>
            <p className="">
            City Eats Biryani Center invites you to indulge in the magic of biryani. Join us and discover why we are the go-to destination for those who crave the aromatic allure and spicy excellence of this regal delicacy. At City Eats Biryani Center, every meal is a celebration of tradition, taste, and the joy of shared dining experiences.{" "}
            </p>
          </div>
        </div>
        <div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
