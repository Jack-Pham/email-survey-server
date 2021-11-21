import axios from 'axios';
import { FETCH_SURVEYS, FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const handleToken = (token) => async (dispatch) => {
    try {
        const res = await axios.post('/api/stripe', token);
        dispatch({ type: FETCH_USER, payload: res.data })
    } catch (error) {
        console.log(error);
    }
}

export const submitSurvey = (values, history) => async (dispatch) => {
    try {
        const res = await axios.post('/api/surveys', values);
        history.push('/surveys');
        dispatch({ type: FETCH_USER, payload: res.data });
    } catch (error) {
        console.log(error);
    }
}

export const fetchSurveys = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/surveys');
        dispatch({ type: FETCH_SURVEYS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
}
