import React, { useState, useEffect } from 'react';
import {setDoc, collection , doc , getDoc} from 'firebase/firestore';
import db from "../../firebase";
import { getDocs } from 'firebase/firestore';
import "./ShareYourThoughts.css";
import AddToPost from "./AddToPost";
import Post from '../post24/Post24';

const ShareYourThoughts =() =>{
    const [inputValue , setInputValue] = useState('');
    const [information , setInformation ] = useState({});
    const [posts, setPosts] = useState([]);

    const fetchProfileData = async () => {
        const projectCol= collection(db,'personalProfile');
        const profileDoc = doc(projectCol,'personal_information');
        const profileSnapshot = await getDoc(profileDoc);
        if (profileSnapshot.exists()) {
            const data = profileSnapshot.data();
            setInformation(data);
        }
    }

    const fetchPosts = async () => {
        const projectCol = collection(db, 'posts');
        const postsSnapshot = await getDocs(projectCol);
        const postsData = postsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setPosts(postsData);
    };

    useEffect(() => {
        fetchProfileData();
        fetchPosts();
    },[]);

    const inputChange = (textInput) => {
    setInputValue(textInput.target.value);
    };

    const postButton = async () => {
        if(inputValue){ 
                const projectCol= collection(db,'posts');
                const postDoc = doc(projectCol);
                const currentTime = new Date().toLocaleString();
                await setDoc( postDoc , {
                    liked : 0,
                    comments : 0,
                    share : 0,
                    likeColor : "#4a4d4f",
                    image : null,
                    job : information.job,
                    postedBy : information.name,
                    profilephoto : information.profilePicture,
                    text : inputValue,
                    time : currentTime,

                });
                setInputValue('');
                fetchPosts();
        }
    };
    return(
        
        <div className="write-post">
            <div className="card card-body cont24">
        
            <div className="post-input">
            <img src={information.profilePicture} alt="" className="rounded icons rounded-circle" style={{width :'40px' , height : '40px'}}/>
            <input type='text' placeholder='share your thoughts...' value={inputValue} onChange={inputChange} className="col-sm-10 col-md-8"/>
                <div className="add-to-post">
                    <AddToPost icon ="bi bi-image-fill" color ="#4ec887" title ="Photo"/>
                    <AddToPost icon ="bi bi-camera-reels-fill" color ="#4a95db" title ="Video"/>
                    <AddToPost icon ="bi bi-calendar2-event-fill" color ="#cd2f2f" title ="Event"/>
                    <AddToPost icon ="bi bi-emoji-smile-fill" color ="#eac82e" title ="Feeling/Activity"/>
                    <span className="add-post-links post-button-span"><a href="#!" className="post-button" onClick={postButton}>{inputValue ? 'Post' : '...'}</a></span>
                </div>
            </div>
            </div>
            <div className='post-list'>
            {posts.map((post) => ( 
                <div key={post.id} className="post">
                    <Post document={post}/>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ShareYourThoughts;


