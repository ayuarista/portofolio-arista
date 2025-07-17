import { useEffect, useRef } from 'react';
import { FaRecycle } from 'react-icons/fa'; 
import React from 'react';

const ScrollingText = () => {
  const scrollRef = useRef(null);

  const repeatCount = 30
  useEffect(() => {
    const scroll = scrollRef.current;
    let scrollAmount = 0;

    const scrollText = () => {
      scrollAmount += 0.5; 
      scroll.style.transform = `translateX(-${scrollAmount}px)`;
      if (scrollAmount >= scroll.offsetWidth) {
        scrollAmount = 0;
      }
      requestAnimationFrame(scrollText);
    };

    scrollText();
  }, []);

  return (
    <div className="bg-black w-full overflow-hidden py-4 font-syne font-bold">
      <div ref={scrollRef} className="whitespace-nowrap flex items-center space-x-4">
        {Array.from({length: repeatCount}).map((_, index) => (
          <React.Fragment key={index}>
            <FaRecycle className="text-white" />
            <span className="text-white">My Skills!</span>
          </React.Fragment>
        ))}
        
      </div>
    </div>
  );
};

export default ScrollingText;
