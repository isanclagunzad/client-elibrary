import React from 'react';

function RegisterNow() {
  return (
    <div className="w-full py-12 px-4 bg-[#2a2a2a]">
      <div className="max-w-[1240px] mx-auto text-white flex items-center justify-between">
        <div className="flex-auto">
          <h1 className="uppercase font-bold text-[24px]">
            NMP Online Library System
          </h1>
          <p className="text-[16px]">
            Here you can get the Ebooks easily where are available in our stock.
          </p>
        </div>
        <div className="flex-auto w-20">
          <div className="grid grid-cols-2">
            <button className="uppercase font-medium py-3 w-full bg-[#444444] inline">
              E-Books
            </button>
            <button className="uppercase font-medium py-3 w-full bg-sky-700 ml-5 inline">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterNow;
