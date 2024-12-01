import React from "react";
import Slider from "react-slick";
import HeroImage from "../assets/heroImage.jpg";
import HeroImage1 from "../assets/heroImage1.jpg";
import HeroImage3 from "../assets/heroImage3_1.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter } from 'react-simple-typewriter';

const Home = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

    // Using the useTypewriter hook
    const [text] = useTypewriter({
      words: [
        "I'm a Full Stack Developer",
        "I Love Being Part of something bigger",
        "I am passionate about computer science",
      ], // Text to display
      loop: 0, // 0 = Infinite loop
      typeSpeed: 70, // Typing speed in ms
      deleteSpeed: 50, // Deleting speed in ms
      delaySpeed: 1500, // Delay between typing and deleting
    });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-20 md:pt-0">
        {/* Adjusted padding-top (pt-16) for mobile */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <span>{text}</span>
          <span className="text-cyan-500">|</span> {/* Cursor effect */}
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I have spent the past few years improving myself in the field of
            software engineering. Also, right now I am working as an Associate
            Software Engineer at DiproIT(Pvt) Ltd. During this time, I have
            developed several small applications, websites, and mobile
            applications. Currently, I am seeking an internship opportunity for
            my third year in university.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={27} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mt-0">
          <Slider {...settings}>
            <div>
              <img
                src={HeroImage}
                alt="My Profile"
                className="rounded-2xl w-full max-w-md mx-auto sm:max-w-xs" // Adjust carousel size
              />
            </div>
            <div>
              <img
                src={HeroImage1}
                alt="My Profile"
                className="rounded-2xl w-full max-w-md mx-auto sm:max-w-xs" // Adjust carousel size
              />
            </div>
            <div>
              <img
                src={HeroImage3}
                alt="My Profile"
                className="rounded-2xl w-full max-w-md mx-auto sm:max-w-xs" // Adjust carousel size
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
