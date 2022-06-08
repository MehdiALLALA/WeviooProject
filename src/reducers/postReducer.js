import {
    GET_POSTS,
    GET_POSTS_BY_TAGS,
    GET_POSTS_BY_USER,
    GET_POST_DETAILS,
    POSTS_LOADING
} from '../actions/types';

const initialState = {
    posts: [], //List of posts
    postsByTags: [],
    selectedPost: null, //selected post
    isLoading: false,
    postsNumber: null //isloading flag to synchronize the api call with component rendering 
}

function postReducer(state = initialState, action) {
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_BY_USER:
            return {
                ...state,
                posts: action.payload.data,
                postsNumber: action.payload.total,
                isLoading: false
            };
        case GET_POSTS_BY_TAGS:
            return {
                ...state,
                postsByTags: action.payload.data,
                isLoading: false,
                posts: Array.from(new Set(state.postsByTags))
            }
        case GET_POST_DETAILS:
            return {
                ...state
            };
        case POSTS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
}

export default postReducer;