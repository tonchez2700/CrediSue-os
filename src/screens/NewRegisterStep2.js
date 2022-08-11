import React, { useContext, useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Alert, View, Text, ActivityIndicator } from 'react-native'
import { useNavigation, } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements'
import DateRange from '../components/DateRange';
import StepStatus from '../components/StepStatus';
import ModalApostille from '../components/Modal/ModalApostille';
import ModalDiplo from '../components/Modal/ModalDiplo';
import ModalProg from '../components/Modal/ModalProg';
import HeadTitleScreen from '../components/Forms/HeadTitleScreen';
import DropdownSelect from '../components/DropdownSelect';
import tw from 'tailwind-react-native-classnames'
import moment from 'moment'

const NewRegisterStep2 = () => {

    const navigation = useNavigation();
    const countries = [
        'Egypt',
        'Canada',
        'Australia',
        'Ireland',
        'Brazil',
        'England',
        'Dubai',
        'France',
        'Germany',
        'Saudi Arabia',
        'Argentina',
        'India',
    ];


    const getContent = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <HeadTitleScreen title='Nuevo Registro' />
                <View style={tw`mb-7`}>
                    <StepStatus />
                </View>
                <View>
                    <Text style={[tw` text-sm`, { color: 'gray' }]}>Nombre: <Text style={[tw` text-sm`, { color: 'black' }]}>Miguel Zuniga</Text></Text>
                    <Text style={[tw` text-sm`, { color: 'gray' }]}>Email: <Text style={[tw` text-sm`, { color: 'black' }]}>miguel@zunit.mx</Text></Text>
                    <Text style={[tw` text-sm`, { color: 'gray' }]}>Telefono: <Text style={[tw` text-sm`, { color: 'black' }]}>8121213828</Text></Text>
                </View>
                <Text style={tw`text-xl my-5`}>Programa Educativo</Text>
                <Text style={[tw` text-sm font-bold`, { color: '#133C60' }]}>Items</Text>

                <View style={tw`flex-row justify-around`}>
                    <ModalDiplo />
                    <ModalProg />
                    <ModalApostille />
                </View>
                <View style={tw`flex-row items-start my-8`}>
                    <Text style={[tw` text-sm w-9/12 text-white pl-2`, styles.itemsT]}>Items:</Text>
                    <Text style={[tw` text-sm w-60 text-white pl-2`, styles.itemsT]}>Monto</Text>
                </View>
                <View style={tw`flex-row my-10 justify-around items-center `}>
                    <Button
                        titleStyle={tw`text-base font-bold`}
                        buttonStyle={[tw` mr-2 w-32 rounded-full `, { backgroundColor: '#868686' }]}
                        title="Cancelar"
                    //onPress={() => toggleModalVisibility()}
                    /><Button
                        titleStyle={tw`text-base font-bold `}
                        buttonStyle={[tw`mr-2 w-32 rounded-full  `, { backgroundColor: '#2D5DA0' }]}
                        title="Siguiente"
                        onPress={() => navigation.navigate('NewRegisterStep3')}
                    />

                </View>
            </ScrollView>
        );
    }
    return (
        <View>
            {

                getContent()

            }
        </View>
    )
}

export default NewRegisterStep2

const styles = StyleSheet.create({

    itemsT: {
        backgroundColor: '#2D5DA0',
        color: 'white'
    },

})