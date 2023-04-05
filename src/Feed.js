import React, { useEffect, useState } from "react";
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from "./InputOptions";
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Posts from "./Posts";
import { db } from "./Firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Feed () {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        });
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Sonny",
            descriptions: "this is a test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

    return(
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form className="input" onSubmit={sendPost}>
                        <input value={input} onChange={(e) => setInput(e.target.value)} 
                            type="text" />
                        <button onClick={sendPost} type='submit'>Post</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOptions Icon = {ImageIcon} title ="Photo" 
                    color="#70b5f9" />
                    <InputOptions Icon = {VideoCallIcon} title ="Video" 
                    color="#e7a33e" />
                    <InputOptions Icon = {AssignmentIcon} title ="Article" 
                    color="#7f315e" />
                </div>
            </div>
            <div className="posts">
                {posts.map(({ id, data: { name, descriptions, 
                    message, photoUrl } }) => (
                    <Posts 
                        key={id}
                        name={name}
                        descriptions={descriptions}
                        message={message}
                        photoUrl={photoUrl}
                    
                    />
                ))
                }
                
            </div>
        </div>       
    );
}

export default Feed;