import React from 'react';
import { nmpLogoWithCaptionImg } from '../../../assets';
import { FaAngleRight, FaMapMarkerAlt } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-grid container mx-auto">
          <div className="grid grid-cols-4 gap-0 justify-center">
            <div>
              <div className="footer-heading-content">
                <div className="footer-heading">
                  <h6>About Us</h6>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, laboriosam at animi earum numquam delectus et
                  corrupti, quod atque adipisci quo.
                </p>
                <div className="relative mb-4">
                  <FaMapMarkerAlt
                    size={18}
                    className="absolute top-[3px] left-0"
                  />
                  <p className="pl-7">
                    National Maritime Polytechnic
                    <br />
                    Brgy. 97, Cabalawan,
                    <br />
                    Tacloban City 6500
                    <br />
                  </p>
                </div>
                <div className="relative mb-4">
                  <BsTelephone
                    size={18}
                    className="absolute top-[3px] left-0"
                  />
                  <p className="pl-7">09682601929 / 09273106584</p>
                </div>
                <div className="relative mb-4">
                  <FiMail size={18} className="absolute top-[3px] left-0" />
                  <p className="pl-7">nmpresearchteam@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <div className="footer-heading-content">
                <div className="footer-heading">
                  <h6>Latest News</h6>
                </div>
                <div className="relative mb-4">
                  <BiNews size={18} className="absolute top-[3px] left-0" />
                  <p className="pl-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa id repudiandae tempore harum consequatur! Velit illum
                    atque repellendus quo adipisci rem illo dolore iure nobis.
                    Quasi incidunt deserunt distinctio consequatur.
                  </p>
                </div>
                <div className="relative mb-4">
                  <BiNews size={18} className="absolute top-[3px] left-0" />
                  <p className="pl-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa id repudiandae tempore harum consequatur! Velit illum
                    atque repellendus quo adipisci rem illo dolore iure nobis.
                    Quasi incidunt deserunt distinctio consequatur.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="footer-heading-content">
                <div className="footer-heading">
                  <h6>Useful Links</h6>
                </div>
                <ul className="footer-links">
                  <li className="mb-4 flex items-center justify-between cursor-pointer">
                    <a href="http://localhost:3000">Books</a>
                    <FaAngleRight />
                  </li>
                  <li className="mb-4 flex items-center justify-between cursor-pointer">
                    <a href="http://localhost:3000">Resources</a>
                    <FaAngleRight />
                  </li>
                  <li className="mb-4 flex items-center justify-between cursor-pointer">
                    <a href="http://localhost:3000">Contact</a>
                    <FaAngleRight />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-4/5 mx-auto"
                src={nmpLogoWithCaptionImg}
                alt="NMP Logo"
              />
            </div>
          </div>
        </div>
        <div className="copyright">
          © Copyright
          <strong className="color-[#89a9ee]">
            <a href="https://nmp.gov.ph/" target="_blank" rel="noreferrer">
              National Maritime Polytechnic
            </a>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
