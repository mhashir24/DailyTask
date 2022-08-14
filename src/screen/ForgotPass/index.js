import {
  View, Image, Text, TouchableOpacity
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HP, WP } from '../../component/constant';
import Feather from 'react-native-vector-icons/Feather';
import BarCode from '../../component/BarCode';

const Stack = createNativeStackNavigator();


const ForgotPass = () => {
  const navigation = useNavigation()

  const submit = () => {
    navigation.navigate('MyCart')
  }
  return (

    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#7BC5E9', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HP('30%'), paddingHorizontal: WP('7'), paddingVertical: HP('3') }}>
        <Feather
          style={{ paddingBottom: HP('8') }}
          name={'arrow-left'}
          size={20}
          color={'white'}
        />

        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
          {'Forgot password'}
        </Text>

        <Text style={{ color: 'white', marginTop: 10 }}>
          {'If you forget your password then dont worry!'}
        </Text>

        <Text style={{ color: 'white', marginTop: 5 }}>
          {'And reset your password easily.'}
        </Text>

      </View>



      <View style={{ flex: 1 }}>

        <View>
          <BarCode />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HP('10') }}>
          <Text style={{ color: '#a9a9a9' }}>
            {'Code was sent your email'}
          </Text>

          <Text style={{ color: '#126881' }}>
            {'Kylie_04@gmail.com'}
          </Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HP('10'), flexDirection: 'row' }}>
          <Text style={{ color: '#a9a9a9' }}>
            {'This code will expire on'}
          </Text>

          <Text style={{ color: '#126881', paddingLeft: 5 }}>
            {'5 minutes'}
          </Text>
        </View>

        <View style={{ marginTop: HP('4') }}>
        <TouchableOpacity onPress={() => submit()}>
          <View style={{ backgroundColor: '#126881', marginHorizontal: WP('8'), paddingVertical: HP('3'), borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>
              {'VERIFY CODE'}
            </Text>
          </View>
          </TouchableOpacity>

          <View style={{ backgroundColor: '#ACBBC2', marginHorizontal: WP('8'), marginTop: HP('1'), paddingVertical: HP('3'), borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>
              {'RESEND CODE'}
            </Text>
          </View>

        </View>



      </View>


    </View>





  )
}
export default ForgotPass
