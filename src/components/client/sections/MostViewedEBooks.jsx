import React from 'react';
import SectionHeading from '../reusable/SectionHeading';
import { sampleBookCoverImg } from '../../../../src/assets/index';

function MostViewedEBooks() {
  const title = 'Most Viewed E-Books';
  const subTitle =
    'The Online Books Guide is the biggest big store and the biggest books library in the world that has alot of the popular and the most top category books presented here. Top Authors are here just subscribe your email address and get updated with us.';
  return (
    <div className="bg-[#f0f0f0]">
      <div className="container mx-auto pb-20">
        <SectionHeading title={title} subTitle={subTitle} />
        <div className="w-full px-[100px]">
          <div className="flex justify-center items-center">
            <div className="flex-3 px-4">
              <div className="frame">
                <div className="book">
                  <a href="http://localhost:3002/">
                    <ul>
                      <li className="page page3"></li>
                      <li className="page page2"></li>
                      <li className="page page1"></li>
                      <li
                        className="cover"
                        style={{
                          background: `url(${sampleBookCoverImg}) center center`,
                          backgroundSize: 'cover',
                        }}
                      ></li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-3 px-4">
              <div className="frame">
                <div className="book">
                  <a href="http://localhost:3002/">
                    <ul>
                      <li className="page page3"></li>
                      <li className="page page2"></li>
                      <li className="page page1"></li>
                      <li
                        className="cover"
                        style={{
                          background: `url(${sampleBookCoverImg}) center center`,
                          backgroundSize: 'cover',
                        }}
                      ></li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-3 px-4">
              <div className="frame">
                <div className="book">
                  <a href="http://localhost:3002/">
                    <ul>
                      <li className="page page3"></li>
                      <li className="page page2"></li>
                      <li className="page page1"></li>
                      <li
                        className="cover"
                        style={{
                          background: `url(${sampleBookCoverImg}) center center`,
                          backgroundSize: 'cover',
                        }}
                      ></li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-3 px-4">
              <div className="frame">
                <div className="book">
                  <a href="http://localhost:3002/">
                    <ul>
                      <li className="page page3"></li>
                      <li className="page page2"></li>
                      <li className="page page1"></li>
                      <li
                        className="cover"
                        style={{
                          background: `url(${sampleBookCoverImg}) center center`,
                          backgroundSize: 'cover',
                        }}
                      ></li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostViewedEBooks;
