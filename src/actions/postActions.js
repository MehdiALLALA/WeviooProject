import { GET_POSTS, GET_POSTS_BY_TAGS, GET_POSTS_BY_USER, POSTS_LOADING } from "./types";
import api from "../helpers/api";

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}
export const getPosts = () => dispatch => {

    api.get('/post')
    .then(res => {
        dispatch(setPostsLoading())
        dispatch({
            type: GET_POSTS,
            payload : res.data
        })
    })
    .catch(()=> {
        console.log('error loading posts')
    });
};

export const getPostsByUser = (userId) => dispatch => {

    api.get('/user/'+userId+"/post")
    .then(res => {
        dispatch(setPostsLoading())
        dispatch({
            type: GET_POSTS_BY_USER,
            payload : res.data
        })
    })
    .catch(()=> {
        console.log('error loading posts')
    });
};

export const getPostsByTags = (tagsList) => dispatch => {
    
    tagsList.map(tag => {
        console.log('/tag/'+tag+"/post")
        api.get('/tag/'+tag+"/post")
        .then(res => {
            dispatch(setPostsLoading())
            dispatch({
                type: GET_POSTS_BY_TAGS,
                payload : res.data
            })            
        })
        .catch(()=> {
            console.log('error loading posts')
        });
    })
};