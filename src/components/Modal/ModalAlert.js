import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Modal, Pressable, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Context as PaymentsContext } from '../../context/PaymentsContext';
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

const ModalAlert = () => {

    const navigation = useNavigation();

    const { state,
        clearState,
        isVisibleModal
    } = useContext(PaymentsContext);
    return (
        <View style={styles.body}>
            <Modal
                visible={true}
                transparent
                onRequestClose={() =>
                    isVisibleModal()
                }
                animationType='slide'
                hardwareAccelerated
            >
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                        <View style={styles.warning_title}>
                            <Text style={styles.text}>Ocurrió un problema!</Text>
                        </View>
                        <View style={styles.warning_body}>
                            <Text style={styles.text}>{state.message}</Text>
                            <Pressable
                                onPress={() => isVisibleModal()}
                                style={[styles.warning_button, { borderBottomRightRadius: 20, top: 39 }]}
                                android_ripple={{ color: '#fff' }} >

                                <Text style={styles.text}>Aceptar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalAlert

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    warning_modal: {
        width: 250,
        height: 250,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },
    warning_title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    warning_body: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warning_button: {
        borderBottomRadius: 20,
        borderTopColor: 'black',
        borderWidth: 1,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})
