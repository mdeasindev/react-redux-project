import React, { useEffect } from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import Pagination from './Pagination';

const Dashboard = ({ posts, match, history }) => {
    const page_id = match.params.id > 1 ? Number(match.params.id) : 1;

    return (
        <div className="dashboard section">
            <div className="all-posts">
                <Posts
                    page_id={page_id}
                    posts={posts}
                />
            </div>

            {posts.length > 10 ? 
                <div className="pagination-container">
                    <Pagination
                        page_id={page_id}
                        posts={posts}
                    />
                </div>
                : ''
            }
            
        </div>
        
    )
};

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Dashboard);