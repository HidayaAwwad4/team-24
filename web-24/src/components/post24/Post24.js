import React, { useState ,useEffect ,useCallback} from 'react';
import {collection , doc , getDoc} from 'firebase/firestore';
import db from "../../firebase";
import "./Post24.css";
import CommentSection from '../comments/CommentSection';
const Post = (props) => {

    const [information , setInformation ] = useState({});

    const fetchData = useCallback( async () => {
        const projectCol= collection(db,'posts');
        const postDoc = doc(projectCol,props.document.id);
        const postSnapshot = await getDoc(postDoc);
        if (postSnapshot.exists()) {
            const data = postSnapshot.data();
            setInformation(data);
        }
    }, [props.document.id]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return(
        <div className="card posting">
            <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-story me-2">
                            <a href="#!"> <img className="rounded-circle pro-img" src={information.profilephoto} alt="" style={{width :'40px' , height : '40px'}}/> </a>
                        </div>
                        <div>
                        <div className="nav nav-divider">
                            <h6 className="nav-item mb-0"> <a href="#!" className='user-name'>{information.postedBy}</a></h6>
                            <i className="bi bi-dot" style={{color:"#908e8e" , padding:"0"}}></i>
                            <span className="nav-item smallspan">{information.time}</span>
                        </div>
                        <p className="mb-0 smallp">{information.job}</p>
                        </div>
                    </div>
                    <div>
                        <a href="#!" className="text-secondary btn btn-secondary-soft-hover py-1 px-2"><i className="bi bi-three-dots"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p className="text-post">{information.text}</p>
                {information.image && <img className="card-img image-post" src={information.image} alt=""/>}
                {/*<img className="card-img image-post" src={information.image} alt=""/>*/}
                <ul className="nav nav-stack py-3 small">
                    <li className="nav-item">
                        <a className="nav-link active liked" href="#!" style={{color : information.likeColor}}> <i className="bi bi-hand-thumbs-up-fill pe-1" style={{color : information.likeColor}}></i>Liked ({information.liked})</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link comments" href="#!" style={{color:"#4a4d4f"}}> <i className="bi bi-chat-fill pe-1" style={{color:"#4a4d4f"}}></i>Comments ({information.comments})</a>
                    </li>
                    <li className="nav-item dropdown ms-sm-auto">
                        <a className="nav-link mb-0 share" href="#!" style={{color:"#4a4d4f"}}><i className="fas fa-share flip-horizontal ps-1" style={{color:"#4a4d4f"}}></i>Share ({information.share})</a>
                    </li>
                </ul>
            </div>
            {information.image && <CommentSection/>}
        </div>
    );
}
export default Post; 