import React, { useEffect } from 'react';

import {
    View,
    Image,
    ImageBackground
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import homewall from '../../../assets/homewall1.jpeg';


const Splash = ({ }) => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('ForgotPass')
        }, 2000);
    }, [])

    return (

        <View style={{flex:1}}>

            <ImageBackground
                source={homewall}
                style={{
                    zIndex: 1, opacity: 20,
                    width: '100%',
                    height: '100%'
                }}
                imageStyle={{
                    resizeMode: 'cover'
                }}
            >


            </ImageBackground>
        </View>


    );
};



export default Splash
