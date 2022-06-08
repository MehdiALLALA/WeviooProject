import {
    GET_TAGS,
    TAGS_LOADING
} from '../actions/types'

const initialState = {
    tags : [],
    tagsLoading : false
}

function tagReducer(state = initialState, action){
    switch(action.type){
        case GET_TAGS:
            return {
                ...state,
                tags: action.payload.data,
                tagsLoading: false
            };
        case TAGS_LOADING:
            return {
                ...state,
                tagsLoading: true
            };
        default:
            return state;
    }
}

export default tagReducer;