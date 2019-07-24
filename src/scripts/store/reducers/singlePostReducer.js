const initialState = {
    count: '',
    popup: {
        post_id: '',
        title: '',
        body: '',
        error: false
    }
}
const singlePost = (state = initialState, action) => {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                count: action.payload.count
            };
        }
        case "NEXT":
            return {
                count: state.count === action.payload.total_length ? 1 : state.count + 1
            }
        case "PREV":
            const prevs = { ...state }
            prevs.count = state.count === 1 ? action.payload.total_length : state.count - 1
            return prevs
        case "OPEN_POPUP": 
            return {
                ...state,
                popup: {
                    post_id: action.payload.singlePost.id,
                    title: action.payload.singlePost.title,
                    body: action.payload.singlePost.body
                }
            }
        case "ONCHANGE_POPUP": 
            return {
                ...state,
                popup: {
                    ...state.popup,
                    ...action.payload
                }
            }
        case "CLOSE_POPUP": 
            return {
                ...state,
                popup: {
                    ...state.popup,
                    post_id: ''
                }
            }
        default:
            return state;
    }
}

export default singlePost;