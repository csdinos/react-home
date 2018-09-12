import React from 'react';
import { Circle } from 'rc-progress';
import { 
  TRAIL_COLOR,
  STROKE_COLOR
 } from '../../constants';

import './ProgressBar.css';

const ProgressBarComponent = (props) => (
  <div className="progressBar-container">
      <Circle percent={props.progress} strokeWidth="6" strokeColor={STROKE_COLOR} trailWidth="6" trailColor={TRAIL_COLOR}/>
      <span className="progressBar-title">{props.progress}% done!</span>
  </div>
);

export default ProgressBarComponent;