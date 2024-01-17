import React, { useState, useEffect } from 'react';
import { ref, onValue, query, orderByKey, startAfter, limitToFirst, push } from 'firebase/database';
import { database } from '../../firebase'; 
import Comment from './Comment'; 
import './CommentSection.css';
const INITIAL_COMMENTS_LIMIT = 3;

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [lastKey, setLastKey] = useState('');
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const [newComment, setNewComment] = useState(''); 

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = () => {
    let commentsQuery = lastKey
      ? query(ref(database, 'myCommentSectionApp/comments'), orderByKey(), startAfter(lastKey), limitToFirst(INITIAL_COMMENTS_LIMIT))
      : query(ref(database, 'myCommentSectionApp/comments'), orderByKey(), limitToFirst(INITIAL_COMMENTS_LIMIT));

    onValue(commentsQuery, (snapshot) => {
      if (snapshot.exists()) {
        const fetchedComments = [];
        snapshot.forEach((childSnapshot) => {
          fetchedComments.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });

        if (fetchedComments.length < INITIAL_COMMENTS_LIMIT) {
          setHasMoreComments(false);
        }

        if (fetchedComments.length > 0) {
          setLastKey(fetchedComments[fetchedComments.length - 1].id);
          fetchUserDetails(fetchedComments);
        }
      } else {
        setHasMoreComments(false);
      }
    });
  };

  const fetchUserDetails = (newComments) => {
    const userPromises = newComments.map(comment => {
      return new Promise(resolve => {
        const userRef = ref(database, `myCommentSectionApp/users/${comment.userId}`);
        onValue(userRef, (userSnapshot) => {
          if (userSnapshot.exists()) {
            resolve({ ...comment, username: userSnapshot.val().name, avatar: userSnapshot.val().avatar });
          } else {
            resolve(comment);
          }
        });
      });
    });

    Promise.all(userPromises).then(commentsWithUserDetails => {
      setComments(prevComments => {
       
        const combinedComments = [...prevComments, ...commentsWithUserDetails];
        const uniqueCommentIds = new Set();
        return combinedComments.filter(comment => {
          if (uniqueCommentIds.has(comment.id)) {
            return false;
          } else {
            uniqueCommentIds.add(comment.id);
            return true; 
          }
        });
      });
    });
  };

  const handlePostComment = () => {
    if (newComment.trim() === '') {
      return; 
    }

   
    const newCommentObj = {
      userId: 'userId', 
      text: newComment,
      likes: 0,
    };

   
    const commentsRef = ref(database, 'myCommentSectionApp/comments');
    push(commentsRef, newCommentObj)
      .then((newCommentRef) => {
       
        newCommentRef.on('value', (snapshot) => {
          if (snapshot.exists()) {
            const newCommentData = { id: snapshot.key, ...snapshot.val() };
            setComments((prevComments) => [...prevComments, newCommentData]);
          }
        });
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
      });

    setNewComment('');
  };

  return (
    <div className="comment-section">
    <div className="d-flex mb-3 avatars">
      <div className="avatar-xs me-2">
        <a href="#!"> 
          <img 
            className="rounded rounded-circle" 
            src="https://social.webestica.com/assets/images/avatar/12.jpg?fbclid=IwAR1xOBBhlcl3d3yE67vBD8i3dVw9GDb_kAtodm68einym-FZNs4b4wztzew" 
            alt="User Avatar"
            style={{width :'35px' , height : '35px'}}
          />
        </a>
      </div>
      <form className="position-relative w-100">
        <textarea 
          className="input-comment form-control pe-4" 
          rows="1" placeholder="Add a comment..."
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)}
          >
        </textarea>
      </form>
      <button onClick={handlePostComment} className="btn-add-comment">Post</button>
      </div>

      {comments.map((comment) => (
        <Comment
          key={comment.id}
          username={comment.username || 'Amanda Reed'}
          avatar={comment.avatar || 'https://social.webestica.com/assets/images/avatar/12.jpg?fbclid=IwAR1xOBBhlcl3d3yE67vBD8i3dVw9GDb_kAtodm68einym-FZNs4b4wztzew'}
          text={comment.text}
          likes={comment.likes}
        />
      ))}
      {hasMoreComments ? (
        <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center load-more" onClick={loadComments}>
          <i className="bi bi-three-dots"></i>
          Load more comments 
        </a>
      ) : (
        <p className="no-more-comments">No recent comments to show.</p>
      )}
    </div>
  );
};

export default CommentSection;
