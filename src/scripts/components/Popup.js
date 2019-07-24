import React from 'react';
import { connect } from 'react-redux';
import { closePopup, onChangePopup } from '../store/actions/singlePostActions';
import { updatePost } from '../store/actions/postsAction';

const Popup = (props) => {

    const handleChange = e => {
        const value = {
            [e.target.name]: e.target.value
        }
        props.onChangePopup(value);
    }

    const handleUpdatePost = () => {
        props.updatePost({
            title: props.popup.title,
            body: props.popup.body,
            post_id: props.popup.post_id 
        });
        props.closedPopup();
    }

    return (
        <div className="popup section">
            <div className="popup-box">
                <form>
                    <div className="input-field">
                        <label htmlFor="title" className="grey-text text-darken-3"><h5>Title:</h5></label>
                        <input className="grey-text" type="text" id="title" name="title" placeholder="Title" onChange={handleChange} value={props.popup.title} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="body" className="grey-text text-darken-3"><h5>Body:</h5></label>
                        <textarea name="body" id="body" plaecholder="Body" className="materialize-textarea grey-text" value={props.popup.body} onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn purple lighten-1" onClick={handleUpdatePost}>Update</button>
                    </div>
                </form>
                <i className="material-icons close-icon btn-floating small center red" onClick={() => {
                    props.closedPopup()
                }}>close</i>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.find(post => post.id === ownProps.popup.post_id)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closedPopup: () => {
            dispatch(closePopup());
        },
        onChangePopup: (value) => {
            dispatch(onChangePopup(value));
        },
        updatePost: (value) => {
            dispatch(updatePost(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);