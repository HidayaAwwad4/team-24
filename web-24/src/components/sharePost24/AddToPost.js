import React from "react";
const AddToPost =(props) =>{
    return(
        <span className="add-post-links"><a href="#!"><i className={props.icon} style={{color:props.color}} data-bs-toggle="offcanvas" ></i>{props.title}</a></span>
    );
}
export default AddToPost;