import React, { useState, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import PlantsImg1 from "../../Asserts/PlantsImg1.png";
import PlantsImg2 from "../../Asserts/PlantsImg2.png";
import PlantsImg3 from "../../Asserts/PlantsImg3.png";
import PhoneImg from "../../Asserts/PhoneImg.png";
import Img1 from "../../Asserts/11.png";
import Img2 from "../../Asserts/22.png";
import Img3 from "../../Asserts/33.png";
import Img4 from "../../Asserts/44.png";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [Img1, Img2, Img3, Img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <div className="BlogDiv" data-aos="fade-up">
         <section id="BlogSection1">
        <article>
          <h1 data-aos="fade-up">Get the latest news</h1>

          <p data-aos="fade-up">
            Zero code, maximum speed. Make professional sites easy, fast and fun
          </p>
          <p data-aos="fade-up">
            while delivering best-in-class SEO, performance.
          </p>
        </article>
        
      </section>
      <section id="BlogSection14" data-aos="fade-up">
        <div className="BlogSection14DivCon">
          <div className="BlogSection14Div" data-aos="fade-up">
            <img src={PlantsImg1} alt="" />
            <p>Apr 8, 2022</p>
            <h2>Starting and Growing a Career in Web Design</h2>
          </div>
          <div className="BlogSection14Div" data-aos="fade-up">
            <img src={PlantsImg2} alt="" />
            <p>Mar 15, 2022</p>
            <h2>Create a Landing Page That Performs Great</h2>
          </div>
          <div className="BlogSection14Div" data-aos="fade-up">
            <img src={PlantsImg3} alt="" />
            <p>Feb 28, 2022</p>
            <h2>How Can Designers Prepare for the Future?</h2>
          </div>
          <div className="BlogSection14Div" data-aos="fade-up">
            <img src={PlantsImg1} alt="" />
            <p>Apr 8, 2022</p>
            <h2>Starting and Growing a Career in Web Design</h2>
          </div>
          <div className="BlogSection14Div" data-aos="fade-up">
            <img src={PlantsImg2} alt="" />
            <p>Mar 15, 2022</p>
            <h2>Create a Landing Page That Performs Great</h2>
          </div>
        </div>
      </section>
      <section id="HomeSection7" data-aos="fade-up">
        <div className="HomeSection7Div">
          {" "}
          <article>
            <h1>Download our Mobi app to get started now</h1>
            <h5>
              Zero code, maximum speed. Make professional sites easy, fast and
              fun while delivering best-in-class SEO, performance.
            </h5>
            <div className="HomeSection7Buttons" data-aos="fade-up">
            <button><i class="fa-brands fa-app-store"></i>App store</button>
            <button><i class="fa-brands fa-google-play"></i>Google Play</button>
            </div>
          </article>
          <div className="HomeSection7Img" data-aos="fade-up">
            <img src={PhoneImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
