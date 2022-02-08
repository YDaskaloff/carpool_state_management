import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const WorkShop = ({title, numOfCars, onPress}) => {
  return (
    <View style={styles.workShop}>
      <TouchableOpacity onPress={onPress}>
        <View style={{width: '100%'}}>
          <Text>{title}</Text>
          <Text>{numOfCars}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WorkShop;
