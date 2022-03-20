import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const CarInProgress = ({car, onFixIt}) => {
  return (
    <View style={styles.card}>
      <Text>{`Brand: ${car.brand}`}</Text>
      <Text>{`Type: ${car.type}`}</Text>
      <Text>{`Issue: ${car.issue}`}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onFixIt}>
          <View style={styles.button}>
            <Text>Fix it!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarInProgress;
