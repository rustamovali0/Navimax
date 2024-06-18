import React, { useState, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import Girl1 from "../../Asserts/Girl_1_Img.png";
import Girl2 from "../../Asserts/Girl_2_Img.png";
import PhoneImg from "../../Asserts/PhoneImg.png";
import Img1 from "../../Asserts/11.png";
import Img2 from "../../Asserts/22.png";
import Img3 from "../../Asserts/33.png";
import Img4 from "../../Asserts/44.png";

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
    <div className="TestimodalDiv">
    <section id="FeaturesSection1" data-aos="fade-up">
        <article>
          <h1 data-aos="fade-up">
          Don’t take our word for it.
          Over 100M people trust us
          </h1>

          <p data-aos="fade-up">
          Our team strives to provide the best customer experience possible. See how our dedication to customer satisfaction translates into success           </p>
          <p data-aos="fade-up">
          stories from our customers. These testimonials speak to our mission of making our customers happy and fulfilled.          </p>
          <div className="HomeButtons" data-aos="fade-up">
            <button style={{backgroundColor:"#d24f3d"}}>Get in Touch</button>
          </div>
        </article>
      </section>
      <div className="carousel" data-aos="fade-up">
          <div
            className="slides1"
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

        <div className="carousel" data-aos="fade-up">
          <div
            className="slides2"
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
     
      <section id="HomeSection4" data-aos="fade-up" style={{marginTop:"2rem"}}>
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
      <section id="TestimonialSection1" data-aos="fade-up">
        <div className="TestimonialSection1Card TestimonialSection1Card1" data-aos="fade-up">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
        <div className="TestimonialSection1Card TestimonialSection1Card2" data-aos="fade-up">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
      </section>
      <section id="TestimonialSection1" data-aos="fade-up">
        <div className="TestimonialSection1Card TestimonialSection1Card3" data-aos="fade-up">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
        <div className="TestimonialSection1Card TestimonialSection1Card4" data-aos="fade-up">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
      </section>
      <section id="HomeSection10" data-aos="fade-up">
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
      <section id="HomeSection7" data-aos="fade-up" style={{marginTop:"2rem"}}>
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
          <div className="HomeSection7Img">
            <img src={PhoneImg} alt="" />
          </div>
        </div>
      </section>
      <section id="HomeSection15" data-aos="fade-up">
        <h4>HELP CENTER</h4>
        <h2>Frequently Asked Questions</h2>
        <p>
          Our customer support team is here to assist you. Start by browsing our
          FAQ
          <br />
          section to find answers to your questions.
        </p>
      </section>
      <section id="HomeSection16" data-aos="fade-up">
        <div className="container" data-aos="fade-up">
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
