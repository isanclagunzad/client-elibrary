import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { nmpLogoImg } from '../../../assets';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div
      id="navbar-header"
      className={
        props.offset > 100
          ? 'drop-shadow-xl fixed top-0 w-full z-10 bg-white fixed-navbar'
          : ''
      }
      style={{
        backgroundColor: '#2a2a2a',
        transition: 'background 1s',
      }}
    >
      <div
        className={
          props.offset > 100
            ? 'flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white'
            : 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'
        }
      >
        <div className="flex items-center">
          <img
            className={props.offset > 100 ? 'w-[6%]' : 'w-1/12'}
            src={nmpLogoImg}
            alt="NMP Logo"
          />
          <div>
            <p className="text-xs ml-3 font-bold">
              National Maritime Polytechnic
            </p>
            <p
              className={
                props.offset > 100
                  ? 'text-white text-xl ml-3 font-bold leading-none'
                  : 'text-white text-3xl ml-3 font-bold'
              }
            >
              E-Library System
            </p>
          </div>
        </div>
        <ul className="md:flex hidden items-center">
          <li className="text-white p-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white p-4 font-bold">
            <Link to="/books">Books</Link>
          </li>
          <li className="text-white p-4 font-bold">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="text-white p-4 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-white p-4 font-bold">
            <Link to="/account">Account</Link>
          </li>
        </ul>
        <div
          onClick={props.handleNav}
          className="block md:hidden cursor-pointer"
        >
          {!props.nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div
          className={
            !props.nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700'
              : 'fixed left-[-100%]'
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            ELib.v2
          </h1>
          <ul className="uppercase p-4">
            <li className="text-white p-4 border-b border-gray-600">Home</li>
            <li className="text-white p-4 border-b border-gray-600">Books</li>
            <li className="text-white p-4 border-b border-gray-600">
              Resources
            </li>
            <li className="text-white p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
