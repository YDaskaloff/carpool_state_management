import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const CarInProgress = ({car}) => {
  return (
    <View style={styles.card}>
      <Text>{`Brand: ${car.brand}`}</Text>
      <Text>{`Type: ${car.type}`}</Text>
      <Text>{`Issue: ${car.problem}`}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text>Fix it!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarInProgress;
