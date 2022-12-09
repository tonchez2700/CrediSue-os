import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TouchableOpacity,
    Text, Dimensions, TextInput, Image
} from 'react-native';
import { Icon, Button, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as AccountDataContext } from '../context/AccountDataContext';
import WebView from 'react-native-webview';
import Images from '@assets/images';
import MaskInput, { Masks } from 'react-native-mask-input';
import tw from 'tailwind-react-native-classnames'
import moment from 'moment';

const { width } = Dimensions.get('window');
const CardPaymentScreen = () => {

    const navigation = useNavigation();
    const { state
    } = useContext(AccountDataContext);

    return (

        <View style={{ flex: 1, backgroundColor: '#ECECEC', padding: 17, marginTop: 4, }}>
            <WebView
                source={{
                    uri: 'https://sandbox-api.openpay.mx/v1/mfdrqbmeydurvbqhspqx/charges/trmlu7rd9gkcqd1zcbvq/card_capture'
                }}
                style={{ marginTop: 20 }}
            />
        </View >
    )
}

export default CardPaymentScreen

const styles = StyleSheet.create({

    titlleText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 15
    },
    titlle2Text: {
        textAlign: 'center',
        fontSize: 11,
        marginBottom: 15
    },
    InputText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 12,
    },
    DataText: {
        textAlign: 'left',
        fontSize: 12,
    },
    InputPayments: {
        borderWidth: 1,
        height: 35,
        paddingVertical: 9,
        paddingLeft: 9,
        borderRadius: 4,
        borderColor: '#707070',
        marginTop: 4,
        marginBottom: 6,
    },
})
