import React from 'react';
import { connect } from 'react-redux';
import postDelete from '../../../store/actions/postDelete';
import { Popup } from '../../../store/actions/singlePostActions';


const Content = ({ post_id, posts, deletePost, history, updatePopup }) => {
    const getSinglePost = posts ? posts.find(post => post.id === post_id) : '';


    const handleDelete = () => {
        deletePost(post_id);
        history.push('/');
    }

    const handlePopup = () => {
        updatePopup(getSinglePost);
    }
    
    return (
        <div className="card">
            {getSinglePost ? 
                <React.Fragment>
                    <div className="card-content">
                        <span className="card-title"> {getSinglePost.title}:  {getSinglePost.id}</span>
                        <hr />
                        <p>{getSinglePost.body}</p>
                    </div>
                    <div className="card-action right-align">

                        <i className="material-icons btn-floating waves-effect waves-dark yellow lighten-2 center small purple-text text-lighten-2" onClick={handlePopup}>edit</i>
                        
                        <i className="material-icons btn-floating waves-effect waves-dark purple lighten-2 center small " onClick={handleDelete}>delete</i>
                    </div>
                </React.Fragment> :
                ''}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: (post_id) => {
            dispatch(postDelete(post_id))
        },
        updatePopup: (singlePost) => {
            dispatch(Popup(singlePost));
        }
    }
}

export default connect(null, mapDispatchToProps)(Content);