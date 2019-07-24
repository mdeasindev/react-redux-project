import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Next, Prev, Count } from '../../../store/actions/singlePostActions';

const Navigation = (props) => {
    
    useEffect(() => {
        props.setCount(props.post_id ? Number(props.post_id) : 0);
    }, []);

    useEffect(() => {
        if (props.posts && props.count) {
            let count = Number(props.count);
            props.history.push(`/post/${props.posts[count - 1].id}`)
        }
    }, [props.count]);

    return (
        <div className="post-navigation section">
            <button className="btn waves-effect waves-light purple darken-3 left" onClick={() => props.goPrev()}>Previous Post</button>
            <button className="btn waves-effect waves-light purple darken-3 right" onClick={() => props.goNext()}>Next Post</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.singlePost.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goNext: () => {
            dispatch(Next(ownProps.posts.length));
        },
        goPrev: () => {
            dispatch(Prev(ownProps.posts.length));
        },
        setCount: (countInit) => {
            dispatch(Count(countInit))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);