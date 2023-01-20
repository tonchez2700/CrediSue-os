import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const QuestionList = ({ data }) => {

    const navigation = useNavigation();
    return (

        <View>
            {
                data.map((e, index) =>
                    <View key={e} style={[tw`flex-col`, { backgroundColor: 'white' }]}>
                        <Text style={styles.TextQuestions}>{index + 1}-. {e[0]}</Text>
                        <Text>{e[1]}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default QuestionList

const styles = StyleSheet.create({

    TextTableItems: {
        fontSize: 13,
        padding: 10,
        textAlign: 'center',
        color: '#000000',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1

    },
    TextQuestions: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})
