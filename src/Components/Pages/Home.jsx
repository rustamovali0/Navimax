import React, { useState, useEffect } from "react";
import PhoneImg from "../../Asserts/PhoneImg.png";
import ChatImg from "../../Asserts/ChatImg.png";
import UserImg from "../../Asserts/UsersImg.png";
import Girl1 from "../../Asserts/Girl_1_Img.png";
import Girl2 from "../../Asserts/Girl_2_Img.png";
import NameSection1 from "../../Asserts/NameSection1.png";
import NameSection2 from "../../Asserts/NameSection2.png";
import NameSection3 from "../../Asserts/NameSection3.png";
import Img1 from "../../Asserts/1.png";
import Img2 from "../../Asserts/2.png";
import Img3 from "../../Asserts/3.png";
import Img4 from "../../Asserts/4.png";
import tooth1 from "../../Asserts/tooth1.svg";
import tooth2 from "../../Asserts/tooth2.svg";
import tooth3 from "../../Asserts/tooth3.svg";
import tooth4 from "../../Asserts/tooth4.svg";
import PlantsImg1 from "../../Asserts/PlantsImg1.png";
import PlantsImg2 from "../../Asserts/PlantsImg2.png";
import PlantsImg3 from "../../Asserts/PlantsImg3.png";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
    </div>
  );
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [Img1, Img2, Img3, Img4];
  const questionsAndAnswers = [
    {
      question: "What kind of teeth treatments do you offer?",
      answer: "We offer a variety of teeth treatments, including dental cleanings, teeth whitening, fillings, root canals, crowns, and bridges."
    },
    {
      question: "How often should I get a dental check-up?",
      answer: "It is recommended to get a dental check-up every six months to ensure optimal oral health."
    },
    {
      question: "What is teeth whitening and how does it work?",
      answer: "Teeth whitening is a cosmetic treatment that uses bleach or other materials to lighten the color of your teeth. It works by breaking down the stains on your teeth and removing them."
    },
    {
      question: "What should I do if I have a toothache?",
      answer: "If you have a toothache, it is important to schedule an appointment with your dentist as soon as possible. In the meanwhile, you can try rinsing your mouth with warm salt water, taking pain medication as directed, and avoiding hot or cold foods and drinks."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care, dental implants can last a lifetime. However, the actual lifespan of dental implants may vary depending on several factors, including the patient's oral health habits and the quality of the implant and crown materials used."
    }
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    setOpenIndexes(prevIndexes => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);
  const [selectedText, setSelectedText] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const texts = [
    {
      text: "Answer some questions about you",
      description:
        "Each feature is designed to bring out the smile you deserve. Thats why millions of people have changed their lives with our removable aligners.",
    },
    {
      text: "Upload your smile and send us",
      description:
        "Each feature is designed to bring out the smile you deserve. Thats why millions of people have changed their lives with our removable aligners.",
    },
    {
      text: "Schedule an appointment",
      description:
        "Each feature is designed to bring out the smile you deserve. Thats why millions of people have changed their lives with our removable aligners.",
    },
  ];

  const images = [NameSection1, NameSection2, NameSection3];

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setSelectedText((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [texts.length, images.length]);

  const handleTextClick = (index) => {
    setSelectedText(index);
    setImageIndex(index);
  };

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
      <section id="HomeSection2" className="slide-up-delay-5">
        <img src={ChatImg} alt="" />
        <article>
          <h5>BENEFITS</h5>
          <h1>
            Save time and money with
            our powerful tools
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            enim in eros elementum tristique.
          </p>
          <button>Get In Touch</button>
        </article>
      </section>
      <section id="HomeSection3" className="slide-up-delay-6">
        <article>
          <h5>BENEFITS</h5>
          <h1>
            More then 7000+ Doctors are 
            members of Mobi
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius
            
            enim in eros elementum tristique.
          </p>
          <button>Download App-Free</button>
        </article>
        <img src={UserImg} alt="" />
      </section>
      <section id="HomeSection4" className="slide-up-delay-7">
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
      </section>
      <section id="HomeSection5" className="slide-up-delay-8">
        <h4>HOW IT WORKS</h4>
        <h1>
          Transform Your Teeth with
          <br />
          SmileBright: A Step-by-Step Guide
        </h1>
        <p>
          Mobi is a mobile app for dental health management, with appointment{" "}
          <br />
          tracking, reminders, and hygiene education.
        </p>
      </section>
      <div className="HomeSection6">
        <div className="card">
          <Card image={images[imageIndex]} />
        </div>
        <div className="texts">
          {texts.map((item, index) => (
            <div key={index} className="textsCon">
              <h1 onClick={() => handleTextClick(index)}>{item.text}</h1>
              {selectedText === index && (
                <>
                  <p>{item.description}</p>
                  <button>Learn More</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <section id="HomeSection7">
        <article>
          <h1>Download our Mobi app to get started now</h1>
          <h5>
            Zero code, maximum speed. Make professional sites easy, fast and fun
            while delivering best-in-class SEO, performance.
          </h5>
          <div className="HomeSection7Buttons">
            <button>App store</button>
            <button>Google Play</button>
          </div>
        </article>
        <div className="HomeSection7Img">
          <img src={PhoneImg} alt="" />
        </div>
      </section>
      <section id="HomeSection8">
        <h4>BENEFITS</h4>
        <h1>
          Straighten your teeth without braces
          <br />
          with our Clear Aligners
        </h1>
        <p>
          Are you looking for a discreet and comfortable way to straighten your
          teeth? Our teeth treatment
          <br />
          services offer clear aligners that are virtually invisible, perfect
          for busy individuals who want to improve their smile.
        </p>
      </section>
      <section id="HomeSection9">
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
      </section>
      <section id="HomeSection10">
        <article>
          <h5>Sarah T.</h5>
          <h1>
            “I was always self-conscious about my smile, but after getting teeth
            treatment from Mobi, I can’t stop grinning! My teeth look and feel
            amazing.”
          </h1>
          <h5>5-star review from App Store</h5>
        </article>
        <img src={Girl2} alt="" />
      </section>
      <section id="HomeSection11">
        <div className="HomeSection11Card">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
        <div className="HomeSection11Card">
          <h3>John D.</h3>
          <h2>
            “I had been experiencing tooth pain for years, but was too afraid to
            go to the dentist. Mobi made the process easy and painless, and now
            I’m pain-free!”
          </h2>
          <p>5-star review from Play Store</p>
        </div>
      </section>
      <section id="HomeSection12">
        <h4>ANALYTICS</h4>
        <h2>Join millions who find peace with us</h2>
        <div className="countersCon">
          <div className="counter">
            <h1>1541</h1>
            <p>Community Members</p>
          </div>
          <div className="counter">
            <h1>3941</h1>
            <p>Minutes spent in self-care</p>
          </div>
          <div className="counter">
            <h1>2143</h1>
            <p>5-star reviews</p>
          </div>
        </div>
      </section>
      <section id="HomeSection13">
        <div className="HomeSection13Div">
          <h4>BLOG</h4>
          <h2>Get the latest news</h2>
        </div>
        <div className="HomeSection13Div">
          <button>See All</button>
        </div>
      </section>
      <section id="HomeSection14">
        <div className="HomeSection14Div">
          <img src={PlantsImg1} alt="" />
          <p>Apr 8, 2022</p>
          <h2>Starting and Growing a Career in Web Design</h2>
        </div>
        <div className="HomeSection14Div">
          <img src={PlantsImg2} alt="" />
          <p>Mar 15, 2022</p>
          <h2>Create a Landing Page That Performs Great</h2>
        </div>
        <div className="HomeSection14Div">
          <img src={PlantsImg3} alt="" />
          <p>Feb 28, 2022</p>
          <h2>How Can Designers Prepare for the Future?</h2>
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
          <span className="plus-icon">{openIndexes.includes(index) ? 'x' : '+'}</span>
            <span>{qa.question}</span>
          </div>
          {openIndexes.includes(index) && (
            <div className="answer">
              {qa.answer}
            </div>
          )}
        </div>
      ))}
    </div>
      </section>
    </div>
  );
};

export default Home;
