import {
    GET_USERS,
    USERS_LOADING
} from '../actions/types'

const initialState = {
    users : [],
    usersLoading : false
}

function userReducer(state = initialState, action){
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload.data,
                usersLoading: false
            };
        case USERS_LOADING:
            return {
                ...state,
                usersLoading: true
            };
        default:
            return state;
    }
}

export default userReducer;