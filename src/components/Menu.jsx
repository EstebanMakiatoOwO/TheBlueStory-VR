import React from 'react';
import { StarBackground } from './StarBackground';
import '../styles/Menu.css';

export function Menu({ onStartVR, onStartNonVR }) {
  return (
    <div className="menu-container">
      <StarBackground />
      <div className="menu-content">
        <h1>The Blue Story</h1>
        <div className="menu-buttons">
          <button className="menu-button" onClick={onStartVR}>
            Enter in VR Mode
          </button>
          <button className="menu-button" onClick={onStartNonVR}>
            Enter in Non-VR Mode
          </button>
        </div>
      </div>
    </div>
  );
}
