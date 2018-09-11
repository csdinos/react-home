import React from 'react';
import { Circle } from 'rc-progress';
import './ProgressBar.css';

const ProgressBarComponent = (props) => (
  <div className="progressBar-container">
      <Circle percent={props.progress} strokeWidth="6" strokeColor="#7FFF00" trailWidth="6" trailColor="#f1f1f1"/>
      <span className="progressBar-title">{props.progress}% done!</span>
  </div>
);

export default ProgressBarComponent;