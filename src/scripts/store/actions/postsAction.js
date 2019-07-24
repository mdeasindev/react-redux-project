import axios from 'axios';


export const updatePost = value => {
    return {
        type: "UPDATE_POST",
        payload: {
            ...value
        }
    }
}

const postsAction = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch( {
                type: "ADD_ALL_POSTS",
                payload: {
                    posts: res.data
                }
            } );
        })
        .catch(err => {
            dispatch( {
                type: "ADD_ALL_POSTS",
                payload: {
                    posts: []
                }
            } );
        })
    }

    
}

export default postsAction;