import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TouchableOpacity,
    Text, FlatList

} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as RegisterContext } from '../context/RegisterContext';
import tw from 'tailwind-react-native-classnames'
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {

    const navigation = useNavigation();
    const { state,
        clearState,
        setFetchingList,
        ViewComing,
        handleInputChange } = useContext(RegisterContext);

    return (

        <View style={{ flex: 1, backgroundColor: '#ECECEC', justifyContent: 'flex-start' }}>
            <View style={tw`my-5`}>
                <Text style={{ textAlign: 'center' }}>Bienvenido "Usuario 001"</Text>
                <View style={[tw`my-5`, { backgroundColor: 'white', width: '100%', elevation: 10 }]}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', marginVertical: 10 }}>Sucursal 0001</Text>
                    <View style={tw`flex-row  justify-between p-5`}>
                        <View style={[tw`flex-col pl-5`, { width: '50%' }]}>
                            <Text style={[tw`text-black font-bold`, { color: '#23233C' }]}>Sucursal:</Text>
                            <Text style={[tw`text-black font-bold`, { color: '#23233C' }]}>No de cuenta:</Text>
                            <Text style={[tw`text-black font-bold`, { color: '#23233C' }]}>Artículo:</Text>
                            <Text style={[tw`text-black font-bold`, { color: '#23233C' }]}>Plan:</Text>
                            <Text style={[tw`text-black font-bold`, { color: '#23233C' }]}>Saldo actual:</Text>
                        </View>
                        <View style={[tw`flex-col pl-5`, { width: '50%' }]}>
                            <Text style={{ textAlign: 'left' }}>Sucursal 0001</Text>
                            <Text style={{ textAlign: 'left' }}>0123456789</Text>
                            <Text style={{ textAlign: 'left' }}>XXXXXXXXX:</Text>
                            <Text style={{ textAlign: 'left' }}>XXXXXXXXX</Text>
                            <Text style={{ textAlign: 'left' }}>$9999.99</Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', padding: 20, fontSize: 20 }}>Su cuenta se encuentra al corriente.</Text>
                </View>
            </View>
            <View style={tw`my-5`}>
                <View style={[tw`my-5`, { backgroundColor: 'white', width: '100%' }]}>
                    <View style={[tw`my-5`]}>
                        <Text style={{ textAlign: 'center' }}>Últimos 3 pagos</Text>
                    </View>
                </View>

            </View>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    iconBtn: {
        backgroundColor: '#2D5DA0'
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        marginVertical: 20,
    },
    TextTable: {
        textAlign: 'center',
        fontSize: 14,
        paddingVertical: 10,
        fontWeight: 'bold',
        backgroundColor: '#2D5DA0',
        color: 'white',
        borderBottomWidth: 1
    },
    TextTableItems: {
        fontSize: 13,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1

    },
})
