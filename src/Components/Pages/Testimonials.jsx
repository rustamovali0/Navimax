import React, { useState } from "react";
import Girl1 from "../../Asserts/Girl_1_Img.png";
import Girl2 from "../../Asserts/Girl_2_Img.png";
import PhoneImg from "../../Asserts/PhoneImg.png";


const Testimonials = () => {
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
          Don’t take our word for it.
          <br />
          Over 100M people trust us
          </h1>

          <p className="slide-up slide-up-delay-2">
          Our team strives to provide the best customer experience possible. See how our dedication to customer satisfaction translates into success           </p>
          <p className="slide-up slide-up-delay-2">
          stories from our customers. These testimonials speak to our mission of making our customers happy and fulfilled.          </p>
          <div className="HomeButtons">
            <button className="slide-up slide-up-delay-3" style={{backgroundColor:"#d24f3d"}}>Get in Touch</button>
          </div>
        </article>
      </section>
      <section id="HomeSection4" className="slide-up-delay-7">
        <div className="HomeSection4Div">
          <article>
            <h5>Emily L.</h5>
            <h1>
              “I had tried every teeth whitening product out there, but nothing
              seemed to work. After just one session with Mobi, my teeth were
              multiple shades whiter. I couldn’t believe it!”
            </h1>
            <h5>5-star review from App Store</h5>
          </article>
          <img src={Girl1} alt="" />
        </div>
      </section>
      <section id="TestimonialSection1">
        <div className="TestimonialSection1Card TestimonialSection1Card1">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
        <div className="TestimonialSection1Card TestimonialSection1Card2">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
      </section>
      <section id="TestimonialSection1">
        <div className="TestimonialSection1Card TestimonialSection1Card3">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
        <div className="TestimonialSection1Card TestimonialSection1Card4">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
      </section>
      <section id="HomeSection10">
        <div className="HomeSection10Div">
          <article>
            <h5>Sarah T.</h5>
            <h1>
              “I was always self-conscious about my smile, but after getting
              teeth treatment from Mobi, I can’t stop grinning! My teeth look
              and feel amazing.”
            </h1>
            <h5>5-star review from App Store</h5>
          </article>
          <img src={Girl2} alt="" />
        </div>
      </section>
      <section id="HomeSection7" style={{marginTop:"2rem"}}>
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
}

export default Testimonials;
