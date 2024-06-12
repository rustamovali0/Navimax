import React, { useState } from 'react';

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="question" onClick={toggleAnswer}>
        <span>What kind of teeth treatments do you offer?</span>
        <span className="plus-icon">+</span>
      </div>

      {isOpen && (
        <div className="answer">
          We offer a variety of teeth treatments, including dental cleanings, teeth whitening, fillings, root canals, crowns, and bridges.
        </div>
      )}
    </div>
  );
}

export default Testimonials;
