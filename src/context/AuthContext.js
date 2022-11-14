

import createDataContext from './createDataContext'
import httpClient from '../services/httpClient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as rootNavigation from '../helpers/rootNavigation';
import moment from 'moment';

const initialState = {
    error: false,
    message: null,
    fetchingData: false,
    user: null,
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CLEAR_STATE':
            return initialState
        case 'FETCHING_DATA':
            return {
                ...state,
                error: false,
                message: null,
                fetchingData: action.payload.fetchingData
            }
        case 'SIGNIN':
            return {
                ...state,
                error: false,
                message: null,
                fetchingData: false,
                user: action.payload.user
            }
        case 'SIGNOUT':
            return { ...state, user: null, message: null }
        case 'SET_RESPONSE_ERROR':
            return {
                ...state,
                error: true,
                message: action.payload.message,
                fetchingData: false,
                user: null
            }
        case 'SET_REQUEST_ERROR':
            return {
                ...state,
                error: true,
                message: action.payload.message,
                fetchingData: false,
                user: null
            }
        default:
            return state
    }

}

const clearState = (dispatch) => {
    return () => {
        dispatch({ type: 'CLEAR_STATE' });
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'))
        if (user) {
            dispatch({ type: 'SIGNIN', payload: { user } });
            rootNavigation.navigate('WrapperInnerScreens')
        } else {
            rootNavigation.navigate('AuthScreen')
        }
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        dispatch({ type: 'FETCHING_DATA', payload: { fetchingData: true } });
        try {
            tryAuth(email, password, dispatch);
        } catch (error) {
            dispatch({
                type: 'SET_REQUEST_ERROR',
                payload: {
                    error: true,
                    message: 'Por el momento el servicio no está disponible, inténtelo mas tarde.'
                }
            });
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('user')
        dispatch({ type: 'SIGNOUT' });
        rootNavigation.navigate('AuthScreen')
    }
}

const tryAuth = async (email, password, dispatch) => {
    dispatch({ type: 'FETCHING_DATA', payload: { fetchingData: true } });
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: email, pass: password })
    }; fetch(
        'https://webservices.franciscocaballero.com.mx/ws_jwt.php', requestOptions)
        .then(response => {
            console.log(response);
        })


    // const response = await httpClient.post('ws_jwt.php', { user: email, pass: password })
    // console.log(response);
    // if (!response.status){
    //     dispatch({ type: 'FETCHING_DATA', payload: { fetchingData: false } })
    //     throwAlertError(
    //         "Error en autentificacion", 
    //         response.message,
    //     );
    // }else{
    //     const user = { ...response.user, token: `${response.token_type} ${response.token}`, expires_at: response.expires_at }
    //     await AsyncStorage.setItem('user', JSON.stringify(user))
    //     dispatch({ type: 'SIGNIN', payload: { user } });
    // }
}

export const { Context, Provider } = createDataContext(
    loginReducer,
    { signin, signout, tryLocalSignin, clearState },
    initialState
);