import BannerImage from "../../../../Asset/Banner/banner.png";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
        <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

    <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Resell your used Projectors</h2>
            <p className="mt-4 text-base text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>

            <button className="btn btn-primary mt-5">Get Started</button>
        </div>
    </div>
</section>

  );
};

export default Banner;
