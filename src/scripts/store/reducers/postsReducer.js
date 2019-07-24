const postsReducer = (state = '', action) => {
    switch (action.type) {
        case "ADD_ALL_POSTS":
            return action.payload.posts;
        case "DELETE_POST":
            return state ? state.filter(post => post.id !== action.payload.post_id) : [];
        case "UPDATE_POST":
            console.log(action.payload)
            return state.map(post => {
                if (post.id === action.payload.post_id) {
                    post.title = action.payload.title,
                    post.body = action.payload.body
                }
                return post;
            })
        default:
            return state;
    }
}

export default postsReducer;