import { Avatar } from '@mui/material';
import React from 'react';
import InputOptions from './InputOptions';
import './Posts.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';

function Posts ({name, descriptions, message, photoUrl }){
    return(
        <div className='post'>
            <div className='post-header'>
                <Avatar />
                <div className='post-info'>
                    <h2>{name}</h2>
                    <p>{descriptions}</p>
                </div>
            </div>
            <div className='post-body'>
                <p>{message}</p>
            </div>

            <div className='post-buttons'>
                <InputOptions Icon={ThumbUpIcon} title="Like"
                    color = "gray" />
                <InputOptions Icon={MessageIcon} title="Like"
                    color = "gray" />
                <InputOptions Icon={ShareIcon} title="Like"
                    color = "gray" />
                <InputOptions Icon={SendIcon} title="Like"
                    color = "gray" />
            </div>
        </div>
    );
}
export default Posts;