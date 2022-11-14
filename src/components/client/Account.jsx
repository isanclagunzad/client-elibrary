import React from 'react';
import { nmpLogoImg, squaresBgImg } from '../../assets';

function index() {
  return (
    <>
      <div
        className="h-screen flex justify-center items-center"
        style={{ background: `url(${squaresBgImg})` }}
      >
        <div className="mx-auto">
          <img
            className="w-1/12 mx-auto mb-2"
            src={nmpLogoImg}
            alt="NMP Logo"
          />
          <p className="text-center text-xs ml-3 font-bold">
            National Maritime Polytechnic
          </p>
          <p className="text-center text-3xl ml-3 font-bold">
            E-Library System
          </p>
          <div className="pb-6 px-8 mt-4 bg-white rounded shadow-xl w-[20%] mx-auto">
            <i className="w-full text-center block pt-6 mb-2">
              Sign-in to start your session.
            </i>
            <form action="">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-800 font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="username"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-bold"
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="@email"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
                <div className="flex justify-between">
                  <a
                    href="http://localhost:3000"
                    className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
                  >
                    Forget Password?
                  </a>
                  <a
                    href="http://localhost:3000"
                    className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
                  >
                    Register
                  </a>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="cursor-pointer py-2 px-4 block mt-6 bg-red-500 text-white font-bold text-center rounded">
                  Back
                </button>
                <button className="cursor-pointer py-2 px-4 block mt-6 bg-blue-500 text-white font-bold text-center rounded">
                  Sign-In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
