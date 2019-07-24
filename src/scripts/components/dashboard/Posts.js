import React, { Fragment } from 'react';
import PostBox from './PostBox';

const Posts = ({ posts, page_id }) => {
    const start_slice = page_id === 1 ? 0 : (page_id - 1) * 10;
    const end_slice = page_id * 10;

    return (
        <React.Fragment>
            {posts ?
                posts.length ?
                    posts.slice(start_slice, end_slice).map(post => {
                        return <PostBox key={post.id} post={post} />
                    })
                    : <p className="flow-text">No posts were found.</p>
                :
                <p className="flow-text">Loading...</p>
            }
        </React.Fragment>
    )
}

export default Posts;