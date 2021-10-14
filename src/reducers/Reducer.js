const authReducer = (state = 0, action) => {
    switch (action.type) {
        case "check_login":
                return action.payload
        case 'userError':
                return action.payload
    
        default:
            return state
    }
}

export default authReducer