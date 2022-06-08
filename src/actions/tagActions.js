import { GET_TAGS, TAGS_LOADING } from "./types";
import api from "../helpers/api";

export const setTagsLoading = () => {
    return {
        type: TAGS_LOADING
    }
}
export const getTags = () => dispatch => {

    api.get('/tag')
    .then(res => {
        dispatch(setTagsLoading())
        dispatch({
            type: GET_TAGS,
            payload : res.data
        })
    })
    .catch(()=> {
        console.log('error loading tags')
    });
};