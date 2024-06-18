import React, { useState, useEffect } from "react";
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

  return (
    <div className="BlogDiv">
         <section id="BlogSection1">
        <article>
          <h1 className="slide-up slide-up-delay-1">Get the latest news</h1>

          <p className="slide-up slide-up-delay-2">
            Zero code, maximum speed. Make professional sites easy, fast and fun
          </p>
          <p className="slide-up slide-up-delay-2">
            while delivering best-in-class SEO, performance.
          </p>
        </article>
        
      </section>
      <section id="BlogSection14">
        <div className="BlogSection14DivCon">
          <div className="BlogSection14Div">
            <img src={PlantsImg1} alt="" />
            <p>Apr 8, 2022</p>
            <h2>Starting and Growing a Career in Web Design</h2>
          </div>
          <div className="BlogSection14Div">
            <img src={PlantsImg2} alt="" />
            <p>Mar 15, 2022</p>
            <h2>Create a Landing Page That Performs Great</h2>
          </div>
          <div className="BlogSection14Div">
            <img src={PlantsImg3} alt="" />
            <p>Feb 28, 2022</p>
            <h2>How Can Designers Prepare for the Future?</h2>
          </div>
          <div className="BlogSection14Div">
            <img src={PlantsImg1} alt="" />
            <p>Apr 8, 2022</p>
            <h2>Starting and Growing a Career in Web Design</h2>
          </div>
          <div className="BlogSection14Div">
            <img src={PlantsImg2} alt="" />
            <p>Mar 15, 2022</p>
            <h2>Create a Landing Page That Performs Great</h2>
          </div>
        </div>
      </section>
      <section id="HomeSection7">
        <div className="HomeSection7Div">
          {" "}
          <article>
            <h1>Download our Mobi app to get started now</h1>
            <h5>
              Zero code, maximum speed. Make professional sites easy, fast and
              fun while delivering best-in-class SEO, performance.
            </h5>
            <div className="HomeSection7Buttons">
              <button>App store</button>
              <button>Google Play</button>
            </div>
          </article>
          <div className="HomeSection7Img">
            <img src={PhoneImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
