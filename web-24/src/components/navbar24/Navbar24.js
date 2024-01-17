import React, { useState ,useEffect} from 'react';
import {collection , doc , getDoc} from 'firebase/firestore';
import db from "../../firebase";
import './Navbar24.css';
import Dropdown24 from './Dropdown24';
const Navbar24 =() => {

    const [information , setInformation ] = useState({});

    const fetchData = async () => {
        const projectCol= collection(db,'project');
        const profileDoc = doc(projectCol,'personalProfile');
        const profileSnapshot = await getDoc(profileDoc);
        if (profileSnapshot.exists()) {
            const data = profileSnapshot.data();
            setInformation(data);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">

            <form className="d-flex" role="search">
                <div className="input-group">
                    <p className="p-1 mb-1 bg-primary text-white rounded plogo">
                        <i className="bi bi-megaphone-fill logo" style={{color:'#ffffff'}}></i>
                    </p>
                    <span className="input-group-text bg-body-secondary rounded-start">
                        <i className="bi bi-search" style={{color:'#5c6065'}}></i>
                    </span>
                    <input className="form-control bg-body-secondary" type="search" placeholder="Search..." aria-label="Search" />
                </div>
            </form>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="buttonStyling">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Dropdown24 title="Demo"/>
                            <Dropdown24 title="Pages"/>
                            <Dropdown24 title="Account"/>

                            <li className="nav-item"><a className="nav-link" href="#!" style={{color:'#747e7e'}}>My Network</a></li>

                            <p className="p-1 mb-1 bg-body-secondary rounded icons">
                                <i className="bi bi-chat-left-text-fill logo" style={{color:'#5c6065'}}></i>
                            </p>
                            <p className="p-1 mb-1 bg-body-secondary rounded icons">
                                <i className="bi bi-gear-fill logo" style={{color:'#5c6065'}}></i>
                            </p>
                            <p className="p-1 mb-1 bg-body-secondary rounded icons notification">
                                <i className="bi bi-bell-fill logo" style={{color:'#5c6065'}}></i>
                            </p>
                            <img src={information.profilePhoto} alt="" className="rounded icons" style={{width :'35px' , height : '35px'}}/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar24;