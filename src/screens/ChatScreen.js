import { View } from 'react-native'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Context as ChatContext } from '../context/ChatContext';

const ChatScreen = () => {

  const { state, onSendMessage, fetchUserChatHistory } = useContext(ChatContext);

  useEffect(() => {

    fetchUserChatHistory();   

  }, [])

  return (
    <View style={{ flex:1 }}>
      <GiftedChat
        placeholder="Escriba su mensaje"
        isLoadingEarlier={true}
        messages={state.messages}
        onSend={messages => onSendMessage(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

export default ChatScreen