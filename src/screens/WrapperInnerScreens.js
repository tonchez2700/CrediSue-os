import React from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'tailwind-react-native-classnames';
import Images from '@assets/images';
import StatusScreen from './StatusScreen';
import MenuFooter from '../components/MenuFooter';
import NavBar from '../components/NavBar'
import HomeScreen from './HomeScreen';




const AppStack = createNativeStackNavigator();

const WrapperInnerScreens = () => {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <ImageBackground source={Images.background} resizeMode="cover" style={[tw`flex-1`]}>
                <NavBar />
                <View style={{ width: '100%', height: '80%', backgroundColor: 'transparent' }}>

                    <AppStack.Navigator screenOptions={{ headerShown: false }}>
                        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
                        <AppStack.Screen name="StatusScreen" component={StatusScreen} />
                    </AppStack.Navigator>

                </View>
                <MenuFooter />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default WrapperInnerScreens

