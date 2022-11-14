import React from 'react';
import { FaMapPin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function ContactDetails() {
  return (
    <div className="w-full py-20 px-4 bg-[#32B5F3]">
      <div className="max-w-[1240px] mx-auto text-white grid grid-cols-3 grid-flow-col items-center justify-between">
        <div className="flex-auto text-center">
          <div className="mx-auto mb-4">
            <FaMapPin className="mx-auto" size={40} />
          </div>
          <p className="text-[18px] uppercase font-bold">Address</p>
          <p>
            National Maritime Polytechnic Brgy. 97, Cabalawan, Tacloban City
            6500
          </p>
        </div>
        <div className="flex-auto text-center">
          <div className="mx-auto mb-4">
            <FaPhoneAlt className="mx-auto" size={40} />
          </div>
          <p className="text-[18px] uppercase font-bold">Phone Number</p>
          <p>09682601929 / 09273106584</p>
        </div>
        <div className="flex-auto text-center">
          <div className="mx-auto mb-4">
            <FaEnvelope className="mx-auto" size={40} />
          </div>
          <p className="text-[18px] uppercase font-bold">Email</p>
          <p>lrs@nmp.gov.ph</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
