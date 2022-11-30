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


const PaymentsScreen = () => {

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

        <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
            <ScrollView>
                <View style={[tw`my-5 px-3`, { backgroundColor: 'white' }]}>
                    <Text style={styles.titlleText}>Selecciona tu método de pago</Text>
                    <Button
                        onPress={() => console.log(state.AccountState)}
                        title={'Descargar estado de cuenta'}
                        titleStyle={{color:'black'}}
                        buttonStyle={styles.btnPayments}
                    />
                    <Button
                         onPress={() => console.log(state.AccountState)}
                         title={'Descargar estado de cuenta'}
                         titleStyle={{color:'black'}}
                         buttonStyle={styles.btnPayments}
                    />
                    <Button
                         onPress={() => console.log(state.AccountState)}
                         title={'Descargar estado de cuenta'}
                         titleStyle={{color:'black'}}
                         buttonStyle={styles.btnPayments}
                    />
                </View>
            </ScrollView>
        </View >
    )
}

export default PaymentsScreen

const styles = StyleSheet.create({
    titlleText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    btnPayments: {
       borderColor: '#F28000',
       borderWidth: 1,
       borderRadius: 10,
       marginVertical: 5,
       backgroundColor: 'white'
    },
})
