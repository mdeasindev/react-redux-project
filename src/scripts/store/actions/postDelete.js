const postDelete = (post_id) => {
    return {
        type: "DELETE_POST",
        payload: {
            post_id
        }
    }
}

export default postDelete;