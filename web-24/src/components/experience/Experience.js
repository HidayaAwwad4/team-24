import React from 'react';
import '../../App.css'; 
import './Experience.css';
const Experience = ({ companyName, duration, durationDetail, iconUrl }) => {
  return (
    <div className="d-flex">
    <div className="avatar me-3 image11">
    <a href="#!"> <img className=" rounded-circle experience-icon" src={iconUrl} alt={`${companyName} logo`} /> </a>
      </div>

      <div className="experience-info">
                <h6 className="mb-0 experience-company">{companyName}</h6>
                <div className="experience-duration">{duration}</div>
                
                <p className="small">{durationDetail}
                  <a className="btn btn-primary-soft btn-xs ms-2 " href="#!">Edit </a>
                </p>
                
                </div>

    </div>

  );
};

export default Experience;
//experience-duration-detail