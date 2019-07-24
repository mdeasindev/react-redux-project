export const Next = length => {
    return {
        type: "NEXT",
        payload: {
            total_length: length
        }
    }
}

export const Prev = length => {
    return {
        type: "PREV",
        payload: {
            total_length: length
        }
    }
}

export const Count = (count) => {
    return {
        type: "INIT",
        payload: {
            count
        }
    }
}

export const Popup = (singlePost) => {
    return {
        type: "OPEN_POPUP",
        payload: {
            singlePost
        }
    }
}

export const closePopup = () => {
    return {
        type: "CLOSE_POPUP"
    }
}

export const onChangePopup = (value) => {
    return {
        type: 'ONCHANGE_POPUP',
        payload: value
    }
}