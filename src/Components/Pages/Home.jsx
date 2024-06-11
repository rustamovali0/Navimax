import React, { useState, useEffect } from "react";
import PhoneImg from "../../Asserts/PhoneImg.png";
import ChatImg from "../../Asserts/ChatImg.png";
import UserImg from '../../Asserts/UsersImg.png';
import Girl1 from '../../Asserts/Girl_1_Img.png';
import Girl2 from '../../Asserts/Girl_2_Img.png';

import Img1 from "../../Asserts/1.png";
import Img2 from "../../Asserts/2.png";
import Img3 from "../../Asserts/3.png";
import Img4 from "../../Asserts/4.png";

const Home = () => {
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
    <div>
      <section id="HomeSection1">
        <article>
          <h1 className="slide-up slide-up-delay-1">
            Direct path to loved ones
          </h1>

          <p className="slide-up slide-up-delay-2">
            Zero code, maximum speed. Make professional sites easy, fast and fun
          </p>
          <p className="slide-up slide-up-delay-2">
            while delivering best-in-class SEO, performance.
          </p>
          <div className="HomeButtons">
            <button className="slide-up slide-up-delay-3">App store</button>
            <button className="slide-up slide-up-delay-3">Google Play</button>
          </div>
        </article>
        <div className="PhoneImgHome slide-up slide-up-delay-4">
          <img src={PhoneImg} alt="Phone" />
        </div>
        <div className="carousel slide-up slide-up-delay-4">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="slide">
                <img
                  src={item}
                  alt={`Image ${index + 1}`}
                  className="CarouselImgs"
                />
              </div>
            ))}
            {items.map((item, index) => (
              <div key={index + items.length} className="slide">
                <img
                  src={item}
                  alt={`Image ${index + 1}`}
                  className="CarouselImgs"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="HomeSection2">
        <img src={ChatImg} alt="" />
        <article>
          <h5>BENEFITS</h5>
          <h1>
            Save time and money with
            <br />
            our powerful tools
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius
            <br />
            enim in eros elementum tristique.
          </p>
          <button>Get In Touch</button>

        </article>
      </section>
      <section id="HomeSection3">
        <article>
          <h5>BENEFITS</h5>
          <h1>
          More then 7000+ Doctors are             <br />
          members of Mobi
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius
            <br />
            enim in eros elementum tristique.
          </p>
          <button>Download App-Free</button>
        </article>
        <img src={UserImg} alt="" />
      </section>
      <section id="HomeSection4">
        <article>
          <h5>Emily L.
          </h5>
          <h1>
          “I had tried every teeth whitening product out there, but nothing seemed to work. After just one session with Mobi, my teeth were multiple shades whiter. I couldn’t believe it!”
          </h1>
          <p>
          5-star review from App Store


          </p>
        </article>
        <img src={Girl1} alt="" />
      </section>
    </div>
  );
};

export default Home;
