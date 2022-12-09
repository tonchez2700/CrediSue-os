import React, { useState, useEffect, useContext, useRef } from 'react'
import {
    StyleSheet, View, ScrollView, TouchableOpacity, Text
} from 'react-native';
import AnimetedText from '../components/AnimetedText';
import { Icon, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as PaymentsContext } from '../context/PaymentsContext';
import tw from 'tailwind-react-native-classnames'


const PaymentsScreen = () => {

    const navigation = useNavigation();

    const { state,
        clearState,
        TypeChange,
        TypeSelection,
    } = useContext(PaymentsContext);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            clearState()
        });
        return unsubscribe;
    }, [navigation]);


    return (

        <View style={{ flex: 1, backgroundColor: '#ECECEC', padding: 17, paddingTop: 4 }}>
            <ScrollView>
                <View style={[tw`my-5 px-5 py-5`, { backgroundColor: '#FFFFFF' }]}>
                    <Text style={styles.titlleText}>Selecciona tu método de pago</Text>
                    <TouchableOpacity
                        style={[styles.btnPayments, state.typePayment === 1 ? { backgroundColor: "#004480" } : null]}
                        onPress={() => TypeChange(1)}
                    >
                        <View style={[tw`flex-row`, { width: '100%', paddingHorizontal: 25, alignItems: 'center' }]}>
                            <Icon
                                size={30}
                                name='credit-card'
                                style={{ marginRight: 10 }}
                                type='FontAwesome5'
                                color={state.typePayment === 1 ? "white" : null} />
                            <Text style={[styles.btnText, state.typePayment === 1 ? { color: "white" } : null]}>Tarjetas de débito o crédito</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnPayments, state.typePayment === 2 ? { backgroundColor: "#004480" } : null]}
                        onPress={() => TypeChange(2)}
                    >
                        <View style={[tw`flex-row`, { width: '100%', paddingHorizontal: 25, alignItems: 'center' }]}>
                            <Icon
                                size={30}
                                name='receipt'
                                style={{ marginRight: 10 }}
                                type='FontAwesome5'
                                color={state.typePayment === 2 ? "white" : null} />
                            <Text style={[styles.btnText, state.typePayment === 2 ? { color: "white" } : null]}>Ficha de depósito</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnPayments, state.typePayment === 3 ? { backgroundColor: "#004480" } : null]}
                        onPress={() => TypeChange(3)}
                    >
                        <View style={[tw`flex-row`, { width: '100%', paddingHorizontal: 25, alignItems: 'center' }]}>
                            <Icon
                                size={30}
                                name='shop'
                                style={{ marginRight: 10 }}
                                type='entypo'
                                color={state.typePayment === 3 ? "white" : null} />
                            <Text style={[styles.btnText, state.typePayment === 3 ? { color: "white" } : null]}>Pago con efectivo en tiendas</Text>
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

                    {
                        state.typePayment == ''
                            ?
                            <AnimetedText />
                            :
                            null
                    }
                    <Button
                        onPress={() => TypeSelection(state.typePayment)}
                        title={'Continuar'}
                        titleStyle={{ color: 'white' }}
                        buttonStyle={[styles.btnMenu, state.typePayment === '' ? { backgroundColor: '#686F75' } : { backgroundColor: '#004480' }, { marginTop: 30 }]}
                    />
                    <Button
                        onPress={() => console.log(state.AccountState)}
                        title={'Cancelar'}
                        titleStyle={{ color: 'white' }}
                        buttonStyle={[styles.btnMenu, { marginTop: 22, backgroundColor: '#686F75' }]}
                    />
                </View>
            </ScrollView >
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
    },
    btnMenu: {
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
})
