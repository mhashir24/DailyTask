import {
    View, Image, Text, TouchableOpacity
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { HP, WP } from '../../component/constant';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SwipeButtonCustom from '../../component/SwipeComponent';


const MyCart = () => {
    const navigation = useNavigation()

    const submit = () => {
        navigation.navigate('Products')
    }
    return (

        <View style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', paddingHorizontal: WP('3'), paddingVertical: HP('2'), alignItems: 'center' }}>

                    <Feather
                        style={{ borderRadius: 20, padding: 5, alignItems: 'center', backgroundColor: '#7BC5E9' }}
                        name={'arrow-left'}
                        size={15}
                        color={'white'}
                    />

                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                        {'My Cart'}
                    </Text>

                    <Entypo
                        name={'dots-three-vertical'}
                        size={20}
                        color={'black'}
                    />

                </View>

                <View style={{ marginTop: HP('1') }}>
                    <SwipeButtonCustom />
                </View>
            </View>


            <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, paddingVertical: HP("4"), borderTopLeftRadius: 30 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: WP('10'), paddingTop: HP('2') }}>
                    <Text>
                        {'Subtotal'}
                    </Text>

                    <Text style={{ color: '#AE0000', fontWeight: 'bold', fontSize: 16 }}>
                        {'$390'}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => submit()}>
                    <View style={{ marginTop: HP('3'), backgroundColor: '#126881', marginHorizontal: WP('8'), paddingVertical: HP('3'), borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>
                            {'CHECK OUT'}
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>



        </View>







    )
}
export default MyCart
