import {
    View, Image, Text, TouchableOpacity, useWindowDimensions
} from 'react-native';




import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import user1 from '../../../assets/elizaa.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TabFlatlist from '../../component/TabFlatlist';
import TodayView from '../../component/TodayView';

import eliza from '../../../assets/elizaa.jpg';

import { HP, WP } from '../../component/constant';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';



const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white', marginTop:HP('1.5'), marginBottom:5  }} >

    <TodayView/>

    </View>

);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'blue' }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'blue' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
});


const Stack = createNativeStackNavigator();


const TabViewComponent = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Today' },
        { key: 'second', title: 'Week' },
        { key: 'third', title: 'Month' },
    ]);


    const navigation = useNavigation()

    const submit = () => {
        navigation.navigate('MyCart')
    }

    const renderTabBar = props => (
        <TabBar
            {...props}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color: 'black' }}>
                    {route.title}
                </Text>
            )}
            indicatorStyle={{ backgroundColor: '#DACA7D' }}
            style={{ backgroundColor: 'white', marginTop:-20 }}
        />
    );



    return (

        <View style={{ flex: 1}}>

            <View style={{ flex: 0.7 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: WP('5'), marginTop: HP('1') }}>

                    <SimpleLineIcons
                        name={'menu'}
                        size={20}
                        color={'#663399'}
                    />

                    <Image
                        style={{ height: 30, width: 30, borderRadius: 50 }}
                        source={eliza}
                    />
                </View>

                <View style={{ marginHorizontal: WP('5') }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#663399', marginTop: HP('1') }}>
                        {'Hello, Paul'}
                    </Text>

                    <View style={{ flexDirection: 'row', marginTop: HP('1') }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#663399' }}>
                            {'5'}
                        </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 5 }}>
                            {'Pending Tasks'}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: HP('1.5'), borderRadius: 20, marginTop: HP('2'), backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, color: '#663399', fontWeight: 'bold', paddingLeft: WP('35') }}>
                            {'Search'}
                        </Text>

                        <FontAwesome
                            name={'search'}
                            size={20}
                            color={'#663399'}
                            style={{ paddingLeft: WP('25') }}
                        />

                    </View>
                </View>

            </View>


            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: WP('5'), marginTop: HP('1') }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#663399' }}>
                        {'Projects'}
                    </Text>

                    <FontAwesome5
                        name={'plus'}
                        size={18}
                        color={'#663399'}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: WP('5'), marginTop: HP('1') }}>
                    <TabFlatlist />

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: WP('5'), marginTop: HP('1') }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#663399' }}>
                        {'Personal Task'}
                    </Text>

                    <FontAwesome5
                        name={'plus'}
                        size={18}
                        color={'#663399'}
                    />
                </View>

            </View>


            <View style={{ flex: 1 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    initialLayout={{ width: layout.width }}
                />
            </View>


        </View>





    )
}
export default TabViewComponent
