import React, {useState} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {HP, WP} from '../../component/constant';
import CheckBox from '@react-native-community/checkbox';

import {SwipeItem, SwipeButtonsContainer} from 'react-native-swipe-item';
import ViewOverflow from 'react-native-view-overflow';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NumericInput from 'react-native-numeric-input';

import pent from '../../../assets/pent.jpg';
import shirt from '../../../assets/shirt.jpg';

const SwipeData = [
  {
    id: '0',
    img: pent,
    name: 'Levis Jeans',
    color: 'Color: Dark Grey',
    size: 'Size: L',
    price: '$76',
    total: '$152',
  },

  {
    id: '1',
    img: shirt,
    name: 'Levis Shirt',
    color: 'Color: Blue',
    size: 'Size: M',
    price: '$80',
    total: '$190',
  },
];

export default function SwipeButtonCustom() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const rightButton = (
    <SwipeButtonsContainer
      style={{
        alignSelf: 'center',
        flexDirection: 'column',
      }}>
      <View>
        <Ionicons
          style={{paddingHorizontal: WP('3')}}
          name={'trash-outline'}
          size={25}
          color={'white'}
        />
      </View>
    </SwipeButtonsContainer>
  );

  return (
    <View>
      <FlatList
        data={SwipeData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <SwipeItem
              style={styles.button}
              swipeContainerStyle={styles.swipeContentContainerStyle}
              containerView={ViewOverflow}
              rightButtons={rightButton}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 2,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  marginTop: HP('1'),
                  paddingVertical: HP('1'),
                  borderBottomColor: '#dcdcdc',
                }}>
                <View style={{paddingVertical: HP('6'), paddingLeft: 10}}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                </View>

                <View>
                  <Image style={{height: 110, width: 80}} source={item.img} />
                </View>

                <View
                  style={{
                    paddingHorizontal: WP('3'),
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    {item.name}
                  </Text>

                  <Text style={{fontSize: 12}}>{item.color}</Text>

                  <Text style={{fontSize: 12}}>{item.size}</Text>

                  <Text style={{fontSize: 19, color: '#126881'}}>
                    {item.price}
                  </Text>

                  <View>
                    <NumericInput
                      onChange={value => ({value})}
                      onLimitReached={isMax => isMax}
                      totalWidth={100}
                      totalHeight={25}
                      step={1}
                      rounded
                      textColor="#B0228C"
                      iconStyle={{color: 'black'}}
                    />
                  </View>
                </View>

                <View
                  style={{paddingHorizontal: WP('2'), marginLeft: WP('20')}}>
                  <Ionicons name={'trash-outline'} size={25} color={'black'} />
                </View>
              </View>

              <View
                style={{
                  alignSelf: 'flex-end',
                  paddingHorizontal: WP('13'),
                  paddingVertical: HP('0.5'),
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: 'bold'}}>{'Sub Total:'}</Text>

                <Text
                  style={{
                    color: '#AE0000',
                    fontWeight: 'bold',
                    paddingLeft: 20,
                  }}>
                  {item.total}
                </Text>
              </View>
            </SwipeItem>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: HP('25'),
    marginBottom: HP('1'),
    backgroundColor: '#AE0000',
  },

  swipeContentContainerStyle: {
    backgroundColor: '#ffffff',
  },
});
