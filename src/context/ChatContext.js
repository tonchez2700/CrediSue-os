

import createDataContext from './createDataContext'
import httpClient from '../services/httpClient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as rootNavigation from '../helpers/rootNavigation';

const initialState = {
  error: false,
  fetchingData: false,
  messages: [],
}

const chatReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CLEAR_STATE':
      return initialState
    case 'SET_USER_CHAT_HISTORY':
      return { ...state, messages: action.payload.messages  }
    case 'ADD_MESSAGE':
      return { ...state, messages: [ action.payload.message, ...state.messages ]  }
    default:
      return state
  }

}

const clearState = (dispatch) => {
  return () => {
    dispatch({ type: 'CLEAR_STATE' });
  }
}

const onSendMessage = (dispatch) => {
  return async (message) => {
    /**
     * Add messages to firebase
     */
    dispatch({ type: 'ADD_MESSAGE', payload: { message: message[0] } });
  }
}

const fetchUserChatHistory = (dispatch) => {
  return async () => {

    /***
     * Fetch messagges from firebase
     */
    const messages = [
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];

    dispatch({ type: 'SET_USER_CHAT_HISTORY', payload: { messages } });

  }
}

export const { Context, Provider } = createDataContext(
  chatReducer,
  { onSendMessage, fetchUserChatHistory },
  initialState
);