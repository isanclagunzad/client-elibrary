import React from 'react';
import { FaSearch } from 'react-icons/fa';
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-[90vh] mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6x; text-4xl text-white font-bold md:py-6">
          Book Reading
        </h1>
        <h5 className="landing-header-subheading text-[30px] mb-7">
          Maritime Book Available
        </h5>
        <p className="font-light w-4/5 mx-auto text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quo
          repellendus amet temporibus eum mollitia asperiores id cumque cum
          maxime necessitatibus architecto consequatur, culpa, pariatur illo
          nisi, aliquid magnam quidem.
        </p>
        <div className="flex w-3/5 mx-auto">
          <input
            type="text"
            id="website-admin"
            className="rounded-l-full bg-[rgba(0,0,0,0.6)] border-[1px] border-white-100 block flex-1 min-w-0 w-full text-sm p-2.5 text-white"
            placeholder="Enter your book title here"
          />
          <span className="inline-flex items-center px-3 text-sm rounded-r-full w-10 border-[1px] border-white-100 border-l-0 bg-sky-700 cursor-pointer">
            <FaSearch color="white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
