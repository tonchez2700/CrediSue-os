import React, { useContext } from 'react'
import { TouchableOpacity, StatusBar } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';
import Images from '@assets/images';

const NavBar = () => {
    const { signout } = useContext(AuthContext);
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <StatusBar
            backgroundColor={'#004480'}
            barStyle="light-content" 
            rightContainerStyle={{ justifyContent: 'center' }}
            rightComponent={
                <TouchableOpacity
                    onPress={() => signout()}
                    style={{ position: 'absolute', }}
                >
                    <Icon
                        size={25}
                        name='sign-out'
                        type='font-awesome'
                        color='white' />
                </TouchableOpacity>

            }
            leftComponent={
                <TouchableOpacity
                    onPress={() => openDrawer()}
                    style={{ position: 'absolute', }}>
                    <Icon
                        name='cube'
                        size={25}
                        type='font-awesome'
                        color='white' />
                </TouchableOpacity>

            }
        />

    )
}

export default NavBar
