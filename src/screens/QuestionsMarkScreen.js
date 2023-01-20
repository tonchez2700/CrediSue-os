import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView,
    Text, Dimensions, TextInput, ActivityIndicator
} from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as AccountDataContext } from '../context/AccountDataContext';
import QuestionList from '../components/QuestionList';
import tw from 'tailwind-react-native-classnames'
import moment from 'moment';

const { width } = Dimensions.get('window');
const QuestionsMarkScreen = () => {

    const navigation = useNavigation();
    const { state, setQuestions } = useContext(AccountDataContext);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setQuestions()
        });
        return unsubscribe;
    }, []);

    const renderContent = () => {

        return (
            <View style={{ flex: 1, backgroundColor: '#ECECEC', padding: 17, marginTop: 4, }}>
                <Text style={styles.titlleText}>Preguntas frecuentes</Text>

                <ScrollView style={{ backgroundColor: '#FFFFFF', width: '100%', padding: 19 }}>
                    {
                        state.questions != '' ?
                            <QuestionList
                                data={state.questions} />
                            : null
                    }
                    <Button
                        onPress={() => {
                            navigation.navigate('Inicio')
                        }}
                        title={'Regresar'}
                        buttonStyle={{ backgroundColor: '#004480', marginVertical: 30, borderRadius: 9 }}
                    />
                </ScrollView >
            </View >

        );
    }
    return (
        !state.fetchingData
            ?
            !state.error
                ?
                renderContent()
                :
                <View style={tw`flex-1 p-5 justify-center items-center`}>
                    <Text style={tw`text-center text-lg mb-3`}>
                        {state.message}
                    </Text>
                    <Button
                        containerStyle={{ width: 120 }}
                        buttonStyle={[{ backgroundColor: '#118ea6' }]}
                        title="Actualizar"
                        onPress={() => setQuestions()}
                    />
                </View>
            :
            <ActivityIndicator size="large" color="#118EA6" style={tw`mt-5`} />

    )
}

export default QuestionsMarkScreen

const styles = StyleSheet.create({

    titlleText: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '900',
        marginBottom: 9
    },
    titlle2Text: {
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 15
    },
    InsText: {
        textAlign: 'left',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2
    },
    InsDataText: {
        textAlign: 'left',
        fontSize: 12,
        marginBottom: 2
    },
})
