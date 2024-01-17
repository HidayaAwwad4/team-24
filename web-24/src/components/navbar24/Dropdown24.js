import React from "react";
const Dropdown24 = (props) => {
    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#747e7e'}}>{props.title}</a>
            <ul className="dropdown-menu"></ul>
        </li>
    );
}
export default Dropdown24;