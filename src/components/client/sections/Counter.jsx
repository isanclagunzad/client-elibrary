import React, { useState, useEffect } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 100) {
        setCounter((prevCount) => prevCount + 1);
      }
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  return (
    <div className="w-full py-12 px-4 bg-[#32B5F3]">
      <div className="max-w-[1240px] mx-auto text-white flex items-center justify-between">
        <div className="flex-auto text-center">
          <h1 className="uppercase font-bold text-[70px]">{counter}</h1>
          <p className="text-[18px] uppercase font-bold">Active Users</p>
        </div>
        <div className="flex-auto text-center">
          <h1 className="uppercase font-bold text-[70px]">{counter}</h1>
          <p className="text-[18px] uppercase font-bold">Total Downloads</p>
        </div>
        <div className="flex-auto text-center">
          <h1 className="uppercase font-bold text-[70px]">{counter}</h1>
          <p className="text-[18px] uppercase font-bold">Books Read</p>
        </div>
        <div className="flex-auto text-center">
          <h1 className="uppercase font-bold text-[70px]">{counter}</h1>
          <p className="text-[18px] uppercase font-bold">Best Authors</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
