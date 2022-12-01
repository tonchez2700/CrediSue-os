import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TouchableOpacity,
    Text, Image

} from 'react-native';
import Images from '@assets/images';
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

        <View style={{ flex: 1, backgroundColor: '#ECECEC', padding: 10 }}>
            <ScrollView>
                <View style={[tw`my-5 px-5 py-5`, { backgroundColor: '#FFFFFF' }]}>
                    <Text style={styles.titlleText}>Selecciona tu método de pago</Text>
                    <TouchableOpacity
                        style={styles.btnPayments}
                        onPress={() => console.log(state.AccountState)}
                    >
                        <View style={[tw`flex-row`, { alignItems: 'center' }]}>
                            <Image
                                source={Images.speiA}
                                accessible={true}
                                style={{ width: 66, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.btnText}>Transferencia electrónica</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPayments}
                        onPress={() => console.log(state.AccountState)}
                    >
                        <View style={[tw`flex-row`, { alignItems: 'center' }]}>
                            <Image
                                source={Images.visa}
                                accessible={true}
                                style={{ width: 66, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.btnText}>Transferencia electrónica</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPayments}
                        onPress={() => console.log(state.AccountState)}
                    >
                        <View style={[tw`flex-row`, { alignItems: 'center' }]}>
                            <Image
                                source={Images.oPaynet}
                                accessible={true}
                                style={{ width: 66, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.btnText}>Transferencia electrónica</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={[tw`flex-row`, styles.PaymentText]}>
                        <View style={{ width: '40%' }}>
                            <Text style={{
                                textAlign: 'left', fontSize: 15,
                            }}>Total de pago </Text>
                        </View>
                        <View style={{ width: '60%' }}>
                            <Text style={{
                                fontWeight: 'bold', textAlign: 'right', 
                                fontSize: 19, color: '#004480',
                            }}>$999.99</Text>
                        </View>
                    </View>
                    <Button
                        onPress={() => console.log(state.AccountState)}
                        title={'Cancelar'}
                        titleStyle={{ color: 'white' }}
                        buttonStyle={styles.btnMenu}
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
        fontWeight: 'bold',
        marginBottom: 15
    },
    btnText: {
        textAlign: 'center',
        fontSize: 15,
    },
    PaymentText: {
        backgroundColor: '#E9E9E9',
        borderRadius: 5,
        padding: 19,
        marginVertical: 15

    },
    btnPayments: {
        borderColor: '#F28000',
        alignItems: 'center',
        borderWidth: 2,
        paddingVertical: 25,
        borderRadius: 10,
        marginVertical: 7,
        backgroundColor: 'white'
    },
    btnMenu: {
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 4,
        backgroundColor: '#686F75'
    },
})
