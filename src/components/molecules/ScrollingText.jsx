import { useEffect, useRef } from 'react';
import { FaRecycle } from 'react-icons/fa'; 

const ScrollingText = () => {
  const scrollRef = useRef(null);

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
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">My Skills!</span>
        
      </div>
    </div>
  );
};

export default ScrollingText;
