import React from 'react';
import Experience from './Experience'; 
import './ExperienceList.css'; 
import '../../App.css'; 

const experiencesData = [
  {
    companyName: 'Apple Computer, Inc.',
    duration: 'May 2015 – Present Employment',
    durationDetail: 'Duration 8 mos',
    iconUrl: 'https://social.webestica.com/assets/images/logo/08.svg', 
  },
  {
    companyName: 'Microsoft Corporation',
    duration: 'May 2017 – Present',
    durationDetail: 'Duration 1 yr 5 mos',
    iconUrl: 'https://social.webestica.com/assets/images/logo/09.svg', 
  },
  {
    companyName: 'Tata Consultancy Services',
    duration: 'May 2022 – Present Employment',
    durationDetail: 'Duration 6 yrs 10 mos',
    iconUrl: 'https://social.webestica.com/assets/images/logo/10.svg', 
  }
];

const ExperienceList = () => {
  return (
    <div className="col-md-6 col-lg-12">
      <div className="card">
      <div className="card-header d-flex justify-content-between border-0">
            <h5 className="cardTitle">Experience</h5>
            <a className="btn btn-primary-soft plus" href="#!"> <i className="bi bi-plus"></i></a>
            </div>
            <div className="card-body position-relative pt-0">
        {experiencesData.map((exp, index) => (
          <Experience
            key={index}
            companyName={exp.companyName}
            duration={exp.duration}
            durationDetail={exp.durationDetail}
            iconUrl={exp.iconUrl}
          />
        ))}
</div>

      </div>
    </div>
  );
};

export default ExperienceList;
