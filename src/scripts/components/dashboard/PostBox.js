import React from 'react';
import { Link } from 'react-router-dom';

const PostBox = ({ post }) => {
    return (
        <div className="post-box">
            <div className="card">
                <div className="card-content">
                    <Link className="grey-text text-darken-3" to={`/post/${post.id}`}><span className="card-title">{post.title} : {post.id}</span></Link>
                    <p className="truncate">{post.body}</p>
                </div>
                <div className="card-action right-align">
                    <Link to={`/post/${post.id}`} className="pink-text text-darken-2">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default PostBox;