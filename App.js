import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as ChatProvider } from './src/context/ChatContext'
import { navigationRef } from './src/helpers/rootNavigation'
import AuthScreen from './src/screens/AuthScreen';
import ChatScreen from './src/screens/ChatScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import WrapperInnerScreens from './src/screens/WrapperInnerScreens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} theme={{ colors: { background: 'white' } }}>
      <AuthProvider>
        <ChatProvider>
          <Stack.Navigator 
            initialRouteName="LoadingScreen" 
            screenOptions={{ headerShown: false }}>
              <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
              <Stack.Screen name="WrapperInnerScreens" component={WrapperInnerScreens} />
              <Stack.Screen name="AuthScreen" component={AuthScreen} />
              <Stack.Screen name="ChatScreen" component={ChatScreen} />
          </Stack.Navigator>
        </ChatProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
