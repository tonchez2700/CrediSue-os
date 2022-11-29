import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TouchableOpacity,
    Text, FlatList

} from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as AccountDataContext } from '../context/AccountDataContext';
import tw from 'tailwind-react-native-classnames'
import EntryList from '../components/EntryList';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AccountStatementScreen = () => {

    const navigation = useNavigation();
    const { state,
        clearState,
        setDataAccount,
        setDataPayment
    } = useContext(AccountDataContext);

    useEffect(() => {
        setDataAccount()
        setDataPayment()
    }, []);

    return (

        <View style={{ flex: 1, backgroundColor: '#ECECEC', justifyContent: 'flex-start' }}>
            <ScrollView>
               
            </ScrollView>
        </View >
    )
}

export default AccountStatementScreen

const styles = StyleSheet.create({
    iconBtn: {
        backgroundColor: '#2D5DA0'
    },
    TextItems: {
        width: '50%',
        color: '#23233C',
        fontWeight: 'bold'
    },
    TextTable: {
        textAlign: 'center',
        fontSize: 14,
        paddingVertical: 10,
        fontWeight: 'bold',
        backgroundColor: '#004480',
        color: 'white',
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
