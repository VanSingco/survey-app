import axios from 'axios';
import { FETCH_USER } from "./types";

export const  fetchUser = () =>  async(dispatch) => {
    const req_user = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: req_user});
}

export const handleToken = (token) => async(dispatch) => {
    const req_user = await axios.post('/api/stripe-token', token)
    dispatch({type: FETCH_USER, payload: req_user});
}
