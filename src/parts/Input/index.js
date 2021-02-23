import React from 'react';
import './index.css';

export default function index(props) {
  if (props.inputEmailName) {
    return (
      <div className="form-email">
        <p className="text-title">{props.title}</p>
        <input
          type="text"
          className="input-form-1 form-email"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    );
  }

  if (props.inputPassword) {
    return (
      <div className="form-password">
        <p className="text-title">{props.title}</p>
        <input
          type="password"
          className="input-form-1 form-password"
          placeholder="• • • • • • • •"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    );
  }

  return (
    <div className="card-text-people-icon">
      <input type="file" className="custom-file-input" />
    </div>
  );
}
