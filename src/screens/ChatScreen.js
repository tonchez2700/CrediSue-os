import { View } from 'react-native'
import React, { useEffect, useCallback, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Context as ChatContext } from '../context/ChatContext';

const ChatScreen = () => {
  const { state, sendChatMessage, initChatData } = useContext(ChatContext);

  useEffect(() => {
    initChatData();   
  }, [])

  const onSend = useCallback((messages = []) => {
    sendChatMessage(messages)
  }, [])

  return (
    <View style={{ flex:1 }}>
      {
        state.currentUser?.id_user
        ? <GiftedChat
            placeholder="Escriba su mensaje"
            isLoadingEarlier={true}
            messages={state.messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: state.currentUser?.id_user,
              name: state.currentUser?.username,
            }}
          />
        : null
      }
      
    </View>
  )
}

export default ChatScreen