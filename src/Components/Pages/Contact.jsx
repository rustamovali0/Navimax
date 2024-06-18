import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <section id="ContactSection1" data-aos="fade-up">
        <article>
          <h5>CONTACT</h5>
          <h1>Get in touch</h1>
          <p>
            Reach out to us through the contact form or the details provided
            below to share your feedback, inquiries, or suggestions.
          </p>
        </article>
        <form>
          <input type="text" name="Name" placeholder="Name"/>
          <input type="email" name="Email" id="" placeholder="Email"/>
          <textarea name="Message" id="message" placeholder="Message"></textarea>
          <button>Sign Up</button>
        </form>
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

export default Contact;
