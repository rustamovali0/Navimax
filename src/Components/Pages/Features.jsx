import React, { useState } from "react";
import tooth1 from "../../Asserts/tooth1.svg";
import tooth2 from "../../Asserts/tooth2.svg";
import tooth3 from "../../Asserts/tooth3.svg";
import tooth4 from "../../Asserts/tooth4.svg";
import ChatImg from "../../Asserts/ChatImg.png";
import UserImg from "../../Asserts/UsersImg.png";
import NameSection3 from "../../Asserts/NameSection3.png";
import NameSection2 from "../../Asserts/NameSection2.png";
import PhoneImg from "../../Asserts/PhoneImg.png";
import Img1 from "../../Asserts/1.png";
import Img2 from "../../Asserts/2.png";
import Img3 from "../../Asserts/3.png";
import Img4 from "../../Asserts/4.png";

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [Img1, Img2, Img3, Img4];
  const questionsAndAnswers = [
    {
      question: "What kind of teeth treatments do you offer?",
      answer:
        "We offer a variety of teeth treatments, including dental cleanings, teeth whitening, fillings, root canals, crowns, and bridges.",
    },
    {
      question: "How often should I get a dental check-up?",
      answer:
        "It is recommended to get a dental check-up every six months to ensure optimal oral health.",
    },
    {
      question: "What is teeth whitening and how does it work?",
      answer:
        "Teeth whitening is a cosmetic treatment that uses bleach or other materials to lighten the color of your teeth. It works by breaking down the stains on your teeth and removing them.",
    },
    {
      question: "What should I do if I have a toothache?",
      answer:
        "If you have a toothache, it is important to schedule an appointment with your dentist as soon as possible. In the meanwhile, you can try rinsing your mouth with warm salt water, taking pain medication as directed, and avoiding hot or cold foods and drinks.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care, dental implants can last a lifetime. However, the actual lifespan of dental implants may vary depending on several factors, including the patient's oral health habits and the quality of the implant and crown materials used.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);
  const toggleAnswer = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };
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
      <section id="HomeSection9">
        <div className="HomeSection9Grid">
          <div className="HomeSection9Card">
            <img src={tooth1} alt="" />
            <h2>Maximize your control with Mobi</h2>
            <p>
              Precise and predictable technology. We can show the result you can
              expect before the treatment even starts.
            </p>
            <button>Learn More</button>
          </div>
          <div className="HomeSection9Card">
            <img src={tooth2} alt="" />
            <h2>Maximize your control with Mobi</h2>
            <p>
              Precise and predictable technology. We can show the result you can
              expect before the treatment even starts.
            </p>
            <button>Learn More</button>
          </div>
          <div className="HomeSection9Card">
            <img src={tooth3} alt="" />
            <h2>Maximize your control with Mobi</h2>
            <p>
              Precise and predictable technology. We can show the result you can
              expect before the treatment even starts.
            </p>
            <button>Learn More</button>
          </div>
          <div className="HomeSection9Card">
            <img src={tooth4} alt="" />
            <h2>Maximize your control with Mobi</h2>
            <p>
              Precise and predictable technology. We can show the result you can
              expect before the treatment even starts.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section id="HomeSection2" className="slide-up-delay-5">
        <div className="HomeSection2Div">
          <img src={ChatImg} alt="" />
          <article>
            <h5>BENEFITS</h5>
            <h1>
              Save time and money with our <br /> powerful tools
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius
              <br /> enim in eros elementum tristique.
            </p>
            <button>Get In Touch</button>
          </article>
        </div>
      </section>
      <section id="HomeSection3" className="slide-up-delay-6">
        <div className="HomeSection3Div">
          <article>
            <h5>BENEFITS</h5>
            <h1>
              More then 7000+ Doctors are <br />
              members of Mobi
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius <br />
              enim in eros elementum tristique.
            </p>
            <button>Download App-Free</button>
          </article>
          <img src={UserImg} alt="" />
        </div>
      </section>
      <section id="HomeSection2" className="slide-up-delay-5">
        <div className="HomeSection2Div">
          <img src={NameSection3} alt="" />
          <article>
            <h5>BENEFITS</h5>
            <h1>
              Plan an appointment with your <br /> doctor in the interval of the
              time you <br /> want
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius
              <br /> enim in eros elementum tristique.
            </p>
            <button>Get In Touch</button>
          </article>
        </div>
      </section>
      <section id="HomeSection3" className="slide-up-delay-6">
        <div className="HomeSection3Div">
          <article>
            <h5>BENEFITS</h5>
            <h1>
              Everything is more perfect with <br /> advanced tooth recognition
              system
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius <br />
              enim in eros elementum tristique.
            </p>
            <button>Download App-Free</button>
          </article>
          <img src={NameSection2} alt="" />
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
      <section id="HomeSection15">
        <h4>HELP CENTER</h4>
        <h2>Frequently Asked Questions</h2>
        <p>
          Our customer support team is here to assist you. Start by browsing our
          FAQ
          <br />
          section to find answers to your questions.
        </p>
      </section>
      <section id="HomeSection16">
        <div className="container">
          {questionsAndAnswers.map((qa, index) => (
            <div key={index} className="question-container">
              <div className="question" onClick={() => toggleAnswer(index)}>
                <span className="plus-icon">
                  {openIndexes.includes(index) ? "x" : "+"}
                </span>
                <span>{qa.question}</span>
              </div>
              {openIndexes.includes(index) && (
                <div className="answer">{qa.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
