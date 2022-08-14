import React, { useState } from 'react';

import {
    View, Image, Text, TextInput, FlatList, Icon, TouchableOpacity
} from 'react-native';

import { HP, WP } from '../../component/constant';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

import img2 from '../../../assets/top1.jpg';
import img1 from '../../../assets/dress2.jpeg';
import img3 from '../../../assets/eliza.jpg';
import img4 from '../../../assets/dress1.jpg';

const ratingData = [
    {
        id: '0',
        icon: 'star',
    },
    {
        id: '1',
        icon: 'star',
    },
    {
        id: '2',
        icon: 'star',
    },
    {
        id: '3',
        icon: 'star',
    },
    {
        id: '4',
        icon: 'star',
    },
]

const ProductData = [
    {
        id: '0',
        text1: 'Black Top Dress',
        price: '$97',
        rating: '4.3',
        isLike: false,
        image:
            <Image
                source={img1}
                style={{ width: 160, height: 270, borderRadius: 20 }}
            />
    },

    {
        id: '1',
        text1: 'Blue Sweeter',
        price: '$32',
        isLike: false,
        rating: '5.0',
        image:
            <Image
                source={img2}
                style={{ width: 160, height: 230, borderRadius: 20 }}
            />
    },

    {
        id: '2',
        text1: 'Cocktail Shirt',
        price: '$200',
        isLike: false,
        rating: '3.2',
        image:
            <Image
                source={img4}
                style={{ width: 160, height: 220, borderRadius: 20 }}
            />
    },

    {
        id: '3',
        text1: 'Elizabeth Outfit',
        price: '$800',
        isLike: false,
        rating: '2.3',
        image:
            <Image
                source={img3}
                style={{ width: 160, height: 270, borderRadius: 20 }}
            />
    }
]


const Products = () => {
    const [product, setProduct] = useState(ProductData)
    
    const handlelikePress = (index) => {
        const cloneProducts = [...product]
        cloneProducts[index].isLike = !cloneProducts[index].isLike
        setProduct(cloneProducts)
    }

    return (

        <View style={{ flex: 1, borderWidth: 1 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: WP('3'), marginTop: HP('1') }}>
                <View style={{ borderWidth: 0.5, borderColor: '#d3d3d3', paddingLeft: WP('2'), paddingRight: WP('60'), borderRadius: 30, zIndex: -1, backgroundColor: 'white' }}>
                    <TextInput
                        placeholder='Search'
                    />
                </View>

                <Feather
                    name={'search'}
                    size={20}
                    color={'white'}
                    style={{ borderRadius: 30, padding: 13, paddingHorizontal: 19, marginLeft: WP('-15'), backgroundColor: '#7BC5E9' }}
                />

                <Ionicons
                    name={'ios-cart-outline'}
                    size={20}
                    color={'white'}
                    style={{ borderRadius: 30, padding: 13, backgroundColor: '#7BC5E9', marginLeft: WP('1') }}
                />

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP('3'), justifyContent: 'space-between', marginHorizontal: WP('5') }}>
                <Text>
                    {'20 Items Found'}
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <Octicons
                        name={'three-bars'}
                        size={20}
                        color={'black'}
                        style={{ paddingRight: 6 }}
                    />

                    <Text>
                        {'Filters'}
                    </Text>

                </View>
            </View>


            <View style={{ marginHorizontal: WP('1'), marginBottom: HP('16') }}>
                <FlatList
                    data={product}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item , index }) => {
                        return (
                            <View style={{ marginTop: HP('2'), marginHorizontal: WP('2') }}>
                                <View style={{ position: 'relative' }}>
                                    {item.image}
                                    <TouchableOpacity onPress={() => handlelikePress(index)}>
                                        <View style={{ position: 'absolute', bottom: 10, left: WP('32') }}>
                                            {
                                                item.isLike === true ?
                                                    <Ionicons
                                                        name={'heart-sharp'}
                                                        size={23}
                                                        color={'#ff1493'}
                                                    />
                                                    :
                                                    <Ionicons
                                                        name={'heart-outline'}
                                                        size={23}
                                                        color={'#ff1493'}
                                                    />
                                            }

                                        </View>
                                    </TouchableOpacity>
                                </View>



                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: HP('1') }}>
                                    <View>
                                        <Text>
                                            {item.text1}
                                        </Text>

                                        <View style={{ flexDirection: 'row' }}>
                                            <FlatList
                                                data={ratingData}
                                                keyExtractor={(item) => item.id}
                                                horizontal={true}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <Entypo
                                                            name={item.icon}
                                                            size={15}
                                                            color={'#ffd700'}
                                                        />

                                                    )
                                                }}
                                            />

                                            <Text style={{ fontSize: 11, paddingLeft: 2 }}>
                                                {item.rating}
                                            </Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: '#483d8b' }}>
                                            {item.price}
                                        </Text>
                                    </View>

                                </View>
                            </View>
                        )
                    }}

                />
            </View>





        </View>









    )
}
export default Products
