
import React from 'react';
import "./Comment.css"
const Comment = ({ username, avatar, text, likes }) => {
  return (
    <div className='comment'>
      <div className="d-flex position-relative ">
        <div className="avatar avatar-xs">
          <a href="#!"><img className="rounded-circle avatar" src={avatar} alt="" style={{width :'35px' , height : '35px'}}/></a>
        </div>

        <div className="ms-2">
            <div className="rounded-start-top-0 p-3 rounded content">
              <div className="d-flex justify-content-between">
                <h6 className="mb-1 user-name1">{username}</h6>
                <small className="ms-2 time24">5hr</small>
              </div>
              <p className="small mb-0 text-input">{text}</p>
            </div>

          <ul className="nav nav-divider py-2 small">
                    <li className="nav-item">
                        <a className="nav-link" href="#!" style={{color:"#868686"}}> Like ({likes})</a>
                    </li>
                    <i className="bi bi-dot" style={{color:"#908e8e"}}></i>
                    <li className="nav-item">
                        <a className="nav-link" href="#!" style={{color:"#868686"}}> Reply</a>
                    </li>
                    <i className="bi bi-dot" style={{color:"#908e8e"}}></i>
                    <li className="nav-item">
                        <a className="nav-link" href="#!" style={{color:"#868686"}}> View 5 replies</a>
                    </li>
                    </ul>
          

        </div>
      </div>
    </div>
  );
};

export default Comment;

