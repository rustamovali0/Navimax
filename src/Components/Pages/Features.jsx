import React from "react";
import tooth1 from "../../Asserts/tooth1.svg";
import tooth2 from "../../Asserts/tooth2.svg";
import tooth3 from "../../Asserts/tooth3.svg";
import tooth4 from "../../Asserts/tooth4.svg";
const Features = () => {
  return (
    <div>
      <section id="FeaturesSection1">
        <article>
          <h1 className="slide-up slide-up-delay-1">
            Straighten your teeth without
            <br />
            braceswith our Clear Aligners
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
      </section>
      <section id="FeaturesSection2">
        <div className="FeaturesSection2Card FeaturesSection2Card1">
          <img src={tooth1} alt="" />
          <h2>Maximize your control with Mobi</h2>
          <p>
            Precise and predictable technology. We can show the result you can
            expect before the treatment even starts.
          </p>
          <button>Learn More</button>
        </div>
        <div className="FeaturesSection2Card FeaturesSection2Card2">
          <img src={tooth2} alt="" />
          <h2>Maximize your control with Mobi</h2>
          <p>
            Precise and predictable technology. We can show the result you can
            expect before the treatment even starts.
          </p>
          <button>Learn More</button>
        </div>
        <div className="FeaturesSection2Card FeaturesSection2Card3">
          <img src={tooth3} alt="" />
          <h2>Maximize your control with Mobi</h2>
          <p>
            Precise and predictable technology. We can show the result you can
            expect before the treatment even starts.
          </p>
          <button>Learn More</button>
        </div>
        <div className="FeaturesSection2Card FeaturesSection2Card4">
          <img src={tooth4} alt="" />
          <h2>Maximize your control with Mobi</h2>
          <p>
            Precise and predictable technology. We can show the result you can
            expect before the treatment even starts.
          </p>
          <button>Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Features;
