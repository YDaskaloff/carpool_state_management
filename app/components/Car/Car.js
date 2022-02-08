import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {WORKSHOPS} from '../../constants';

import styles from './styles';

const Car = ({car}) => {
  return (
    <View style={styles.card}>
      <Text>{`Brand: ${car.brand}`}</Text>
      <Text>{`Type: ${car.type}`}</Text>
      <Text>{`Issue: ${car.problem}`}</Text>
      <View style={styles.buttonsContainer}>
        {Object.values(WORKSHOPS).map((ws, idx) => {
          return (
            <TouchableOpacity key={idx} onPress={() => {}}>
              <View style={styles.button}>
                <Text>{ws}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.button}>
            <Text>All good!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Car;