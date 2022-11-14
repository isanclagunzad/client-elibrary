import React from 'react';

function SectionHeading({ title, subTitle }) {
  return (
    <div className="section-heading-content">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      <div className="w-4/5 mx-auto">
        <p className="text-center">{subTitle}</p>
      </div>
    </div>
  );
}

export default SectionHeading;
