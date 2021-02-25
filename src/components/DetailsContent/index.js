import React from 'react';
import './index.css';

const index = () => {
  return (
    <div className="details_wrapper">
      <div className="banner">
        <h3>Benner Content</h3>
      </div>
      <div className="wrapper_content_details">
        <div className="sidebar">
          <div className="color_h2_details_profile">
            <div className="setting_h2">
              <h1 className="the_date">Save The Date</h1>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="color_h2_details_profile">
            <div className="setting_h2">
              <h1 className="the_date_2">About The Event</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
