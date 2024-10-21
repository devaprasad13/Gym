import React from 'react';
import './Gym.css'; // Custom CSS for the component
import bg from '../Image/v1.mp4'
const SuccessStories = () => {
  return (
    <div className="li">
    <section className="success-stories">
      <div className="success-header">
        <h2>SUCCESS STORIES</h2>
        <p>Don’t just take our word for it. Hear from our satisfied members who have transformed their lives at Bull Gym.</p>
        <div className="navigation">
          <button className="nav-arrow">&lt;</button>
          <button className="nav-arrow">&gt;</button>
        </div>
      </div>
      <div className="success-videos">
        <div className="video-card">
          <video width="300" height="200" autoPlay loop muted>
            <source src={bg} type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
          {/* <div className="overlay">
            <span className="name">David R.</span>
          </div> */}
        </div>
        <div className="video-card">
          <video width="300" height="200" controls>
            <source src="/path-to-alex-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="overlay">
            <span className="name">Alex P.</span>
          </div> */}
        </div>
      </div>
      <div className="stats">
        <div className="stat-item">
          <h3>6,154</h3>
          <p>Gym Members Since January 2024 - Up Until Now</p>
        </div>
        <div className="stat-item">
          <h3>350</h3>
          <p>Born A New Body Builder Champion Every Year</p>
        </div>
        <div className="stat-item">
          <h3>90%</h3>
          <p>Member get their fat burned in 3 - 6 months</p>
        </div>
        <div className="stat-item">
          <h3>20%</h3>
          <p>Mass Muscle Increase in 6 - 12 Months Training</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default SuccessStories;
