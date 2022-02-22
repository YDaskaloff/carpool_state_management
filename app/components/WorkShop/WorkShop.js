import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Workshop = ({title, carsInWorkshop, onPress}) => {
  return (
    <View style={styles.workShop}>
      <TouchableOpacity onPress={onPress}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Text>{title}</Text>
          <Text>{carsInWorkshop.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Workshop;
