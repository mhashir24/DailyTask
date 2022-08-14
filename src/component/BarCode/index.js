import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { HP, WP } from '../../component/constant';

const styles = StyleSheet.create({
  root: {paddingHorizontal: WP('13'), paddingTop:HP('5')},
  cell: {
    width: 50,
    height: 50,
    fontSize: 18,
    borderRadius:10,
    paddingVertical:10,
    textAlign:'center',
    backgroundColor:'#e6e6fa'
  },

});

const CELL_COUNT = 4;

const BarCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {(isFocused ? <Cursor /> : "") || symbol ? "•" : symbol}
            {/* {isFocused ? <Cursor /> : "•"} */}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default BarCode;