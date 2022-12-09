import { Alert } from 'react-native'
import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpClient from '../services/httpClient'
import * as rootNavigation from '../helpers/rootNavigation';
import { INVITED_ENTRY_TYPE, PROVIDER_ENTRY_TYPE, SERVICE_ENTRY_TYPE } from '../config/defines';
import moment from 'moment';

const initialState = {
    error: false,
    message: "",
    fetchingData: false,
    typePayment: '',
}

const PaymentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CLEAR_STATE':
            return {
                ...initialState,
            }
        case 'FETCHING_DATA':
            return { ...state, fetchingData: action.payload.fetchingData }
        case 'SET_REQUEST_ERROR':
            return {
                ...state,
                error: true,
                message: action.payload.message,
                fetchingData: false
            }
        case 'CHANGE_TYPE_PAYMENT':
            return {
                ...state,
                typePayment: action.payload.type
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

const TypeChange = (dispatch) => {
    return async (type) => {

        dispatch({
            type: 'CHANGE_TYPE_PAYMENT',
            payload: { type }
        })
    }
}


const TypeSelection = (dispatch) => {
    return async (type) => {
        console.log(type);
        switch (type) {
            case 1:
                rootNavigation.navigate('CardPaymentScreen');
                break;
            case 2:
                rootNavigation.navigate('CardDepositScreen');
                break;
            case 3:
                rootNavigation.navigate('CashPaymentScreen');
                break;

            default:
                break;
        }
    }
}


export const { Context, Provider } = createDataContext(
    PaymentsReducer,
    {
        clearState,
        TypeChange,
        TypeSelection,


    },
    initialState
);