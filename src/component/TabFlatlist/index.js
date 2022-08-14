import React, {useState} from 'react';
import 
{
    SafeAreaView, 
    Text,
    View,
    StyleSheet,
    FlatList,
Image} 
    from 'react-native';


    import user1 from '../../../assets/elizaa.jpg';
    import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
    import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
    import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
    import Entypo from 'react-native-vector-icons/Entypo';
    

import { HP, WP } from '../../component/constant';

const dashboardData = [
    {
        id: '0',
        title: 'Dashboard',
        tasks: '20 Tasks',
        color: '#663399' ,

        icon:   <MaterialIcons
        name={'dashboard'}
        size={18}
        color={'#663399'}
        style={{ borderRadius: 20, padding: 3, backgroundColor: 'white' }}
    />    

    },

    {
        id: '1',
        title: 'App Design',
        tasks: '10 Tasks',
        color: '#76A69A',
        icon:                 <Entypo
        name={'mobile'}
        size={18}
        color={'#76A69A'}
        style={{ borderRadius: 20, padding: 3, backgroundColor: 'white' }}
    />   

    },

    {
        id: '2',
        title: 'App Development',
        tasks: '30 Tasks',
        color: '#DACA7D',
        icon:                 <MaterialIcons
        name={'adb'}
        size={18}
        color={'#DACA7D'}
        style={{ borderRadius: 20, padding: 3, backgroundColor: 'white' }}
    />        

    },
    
]



const TabFlatlist = () => {

  return (

    <FlatList
    data ={dashboardData}
    keyExtractor={(item) => item.id}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) =>{
        return(

            <View style={{borderRadius: 10, width: 140, height: 140, backgroundColor: item.color, paddingHorizontal:WP('2'), paddingTop:HP('1'), marginRight:WP('1') }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    {item.tasks}
                </Text>

                {item.icon}

            </View>

            <Text style={{ color: 'white', fontWeight: 'bold', paddingTop:HP('1.5') }}>
                {item.title}
            </Text>

            <View style={{flexDirection:'row', paddingTop:HP('5')}}>

                <Image
                    source={user1}
                    style={{ width: 25, height: 25, borderRadius:10 }}
                />

                <Image
                    source={user1}
                    style={{ width: 25, height: 25, borderRadius:10, marginLeft:10 }}
                />

            </View>


        </View>

        )
    }}
    
    />



  );
};

export default TabFlatlist;