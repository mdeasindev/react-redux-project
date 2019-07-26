import React from 'react';
import Content from './Content'
import Navigation from './Navigation';
import Popup from '../../Popup';
import { connect } from 'react-redux';

const PostSingle = (props) => {
    const post_id = Number(props.match.params.post_id);

    return (
        <div className="single-post section">

            {props.popup && props.popup.post_id ? <Popup popup={props.popup} /> : ''}

            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <Content history={ props.history } posts={props.posts} post_id={post_id} />
                    <Navigation history={ props.history } posts={props.posts} post_id={post_id} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        popup: state.singlePost.popup
    }
}

export default connect(mapStateToProps)(PostSingle);