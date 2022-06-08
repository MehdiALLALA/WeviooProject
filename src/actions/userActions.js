import { GET_USERS, USERS_LOADING } from "./types";
import api from "../helpers/api";


export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}
export const getUsers = () => dispatch => {

    api.get('/user')
    .then(res => {
        dispatch(setUsersLoading())
        dispatch({
            type: GET_USERS,
            payload : res.data
        })
    })
    .catch(()=> {
        console.log('error loading users')
    });
};