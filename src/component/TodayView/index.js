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

    import eliza from '../../../assets/elizaa.jpg';

    import user1 from '../../../assets/elizaa.jpg';
    import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
    import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
    import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
    import Entypo from 'react-native-vector-icons/Entypo';
    

import { HP, WP } from '../../component/constant';

const datatoday = [

    {
        id: '0',
        time: '09:20 AM',
        title: 'Tywin Lannister Said:',
        description: 'Lion does not concern himself of the opinions of the sheeps.'
    },

    {
        id: '1',
        time: '10:04 AM',
        title: 'Cersie Lannister Said:',
        description: 'When you play the Game Of Thrones, You win or you die, there is no middle ground.'
    },

    {
        id: '2',
        time: '12:00 AM',
        title: 'Lord Varys Said:',
        description: 'Power resides when men believe it resides.'
    }

    
]



const TodayView = () => {

  return (

    <FlatList
    data ={datatoday}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) =>{
        return(

        <View style={{ marginHorizontal: WP('5'),  flexDirection: 'row', marginVertical:HP('0.5')}}>

            <View style={{alignItems:'center', justifyContent:'center'}}>

                <Image
                    style={{ height: 30, width: 30, borderRadius: 50 }}
                    source={eliza}
                />

                <Text>
                    {item.time}
                </Text>
            </View>

            <View style={{backgroundColor:'#E9E9E7',marginRight:WP('10'), marginLeft:WP('5'), borderRadius:10, paddingVertical:HP('1'), paddingHorizontal:WP('3')}}>
                <Text style={{fontWeight:'bold', fontSize:16}}>
                    {item.title}
                </Text>

                <Text style={{flexWrap:'wrap'}}>
                    {item.description}
                </Text>
            </View>

        </View>

        )
    }}
    
    />



  );
};

export default TodayView;