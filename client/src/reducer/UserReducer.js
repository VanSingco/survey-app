import { FETCH_USER } from "../action/types";

const UserReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload.data || false
        default:
            return state
    }
}

export default UserReducer;