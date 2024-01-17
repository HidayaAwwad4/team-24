import React from 'react';
import './Profile.css'
import backgroundImg from './background.png';
import profilepicture from './profilepic.png';
import 'bootstrap/dist/css/bootstrap.css';

const Profile = () => {
  return (
    <div className="card profile-component">
      <img className='backpicture' src={backgroundImg}></img>
      <div className="card-body content22">
        <div className="d-sm-flex align-items-start">
          <div>
            <div className="avatar-xxl mt-n5 mb-3">
              <img className="avatar-img rounded-circle" src={profilepicture} al="" />
            </div>
          </div>
          <div className="ms-sm-2 mt-sm-0">
            <h1 className="mb-0 h5">Sam Lanson </h1>
            <p>250 connections</p>
          </div>
          <div className="d-flex mt-3 justify-content-center ms-sm-auto">
            <button className="btn-danger-soft mybtn mx-2" type="button">
              <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
              Edit profile </button>
            <div>
              <button className="mybtn" type="button">
              <i className="bi bi-three-dots"></i>
              </button>
            </div>
          </div>
        </div>
        <ol className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
          <li className="list-inline-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
            </svg>
            Lead Developer
          </li>
          <li className="list-inline-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" margin-right='0.25rem !important' fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            New Hampshire
          </li>
          <li className="list-inline-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-plus" viewBox="0 0 16 16">
              <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            Joined on Nov 26, 2019
          </li>
        </ol>
      </div>
      <div className="card-footer mt-3 pt-2 pb-0">
        <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
          <li className="nav-item"> <a className="navlink" href='#!'> Posts </a> </li>
          <li className="nav-item"> <a className="navlink" href='#!'> About </a> </li>
          <li className="nav-item"> <a className="navlink" href='#!'> Connections <span className="badge bg-success bg-opacity-10 text-success small"> 230</span> </a> </li>
          <li className="nav-item"> <a className="navlink" href='#!'> Media</a> </li>
          <li className="nav-item"> <a className="navlink" href='#!'> Videos</a> </li>
          <li className="nav-item"> <a className="navlink" href='#!'> Events</a> </li>
          <li className="nav-item"> <a className="navlink" href='#!'> Activity</a> </li>
        </ul>
      </div>
    </div>

  );
}

export default Profile;