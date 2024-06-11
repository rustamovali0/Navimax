import React, { useState, useEffect } from 'react';
import NameSection1 from "../../Asserts/NameSection1.png";
import NameSection2 from '../../Asserts/NameSection2.png';
import NameSection3 from '../../Asserts/NameSection3.png';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
    </div>
  );
};

const Testimonials = () => {
  const [selectedText, setSelectedText] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const texts = [
    { text: 'Answer some questions about you', description: 'Each feature is designed to bring out the smile you deserve. Thats why millions of people have changed their lives with our removable aligners.' },
    { text: 'Upload your smile and send us', description: 'Each feature is designed to bring out the smile you deserve. Thats why millions of people have changed their lives with our removable aligners.' },
    { text: 'Schedule an appointment', description: 'Each feature is designed to bring out the smile you deserve. Thats why millions of people have changed their lives with our removable aligners.' }
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
    <div className="HomeSection5">
       <div className="card">
        <Card image={images[imageIndex]} />
      </div>
      <div className="texts">
        {texts.map((item, index) => (
          <div key={index} className='textsCon'>
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
  );
};

export default Testimonials;
