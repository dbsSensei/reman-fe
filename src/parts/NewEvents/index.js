import React from 'react';
import './index.css';

function index() {
  return (
    <div>
      <div className="card__newEvent">
        <div className="lebel">Now Events</div>
        <div className="foto_acara">foto</div>
      </div>
      <div className="card__newEvent2">
        <div className="lebel">Next Events</div>
        <div className="foto_acara2">foto</div>
      </div>
      <div className="card__newEvent2">
        <div className="lebel">Past Events</div>
        <div className="foto_acara2">foto</div>
      </div>
    </div>
  );
}

export default index;
