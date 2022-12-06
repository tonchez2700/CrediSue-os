import React, { useContext } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { Provider as AccountDataProvider } from '../context/AccountDataContext';
import { navigationRef } from '../helpers/rootNavigation';
import AccountStatementScreen from './AccountStatementScreen';
import PaymentsScreen from './PaymentsScreen';
import { Context as AuthContext } from '../context/AuthContext';
import tw from 'tailwind-react-native-classnames';
import Images from '@assets/images';
import NavBar from '../components/NavBar'
import SimpleNavBar from '../components/SimpleNavBar'
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const WrapperInnerScreens = () => {

    const { signout } = useContext(AuthContext);
    const CustomDrawerContent = (props) => {
        return (
            <View style={[tw`flex-1`, { backgroundColor: '#ECECEC' }]}>

                <SimpleNavBar />
                <DrawerContentScrollView {...props}
                    style={{ paddingVertical: 0, marginTop: -5, backgroundColor: '#ECECEC' }}>
                    <DrawerItem
                        label="Inicio"
                        onPress={() => props.navigation.navigate('Inicio')}
                    />
                    <DrawerItem
                        label="Pagos"
                        onPress={() => props.navigation.navigate('PaymentsScreen')}
                    />
                    <DrawerItem
                        label="Estado de Cuenta"
                        onPress={() => props.navigation.navigate('AccountStatementScreen')}
                    />
                    <DrawerItem
                        label="Salir"
                        onPress={() => signout()}
                    />

                </DrawerContentScrollView>

            </View>
        )
    }

    return (
        <SafeAreaView style={[tw`flex-1 `, { backgroundColor: '#ECECEC' }]}>
            <AccountDataProvider>
                <Drawer.Navigator
                    screenOptions={{
                        drawerActiveBackgroundColor: '#005691',
                        drawerInactiveBackgroundColor: '#FFFFFF',
                        drawerActiveTintColor: '#FFFFFF',
                        drawerInactiveTintColor: '#23233C',
                        header: (...props) => (

                            <NavBar navigation={props[0].navigation} />
                        )
                    }}
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                    useLegacyImplementation>
                    <Drawer.Screen name="Inicio" component={HomeScreen} />
                    <Drawer.Screen name="PaymentsScreen" component={PaymentsScreen} />
                    <Drawer.Screen name="AccountStatementScreen" component={AccountStatementScreen} />
                </Drawer.Navigator>
            </AccountDataProvider>
        </SafeAreaView>
    )
}

export default WrapperInnerScreens

const styles = StyleSheet.create({
    card_content: {
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 20,
        shadowColor: 'black',
    },
    content_text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})