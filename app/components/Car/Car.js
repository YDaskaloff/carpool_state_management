import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {WORKSHOPS} from '../../constants';

import styles from './styles';

const Car = ({car, sendToWorkshop}) => {
  return (
    <View style={styles.card}>
      <Text>{`Brand: ${car.brand}`}</Text>
      <Text>{`Type: ${car.type}`}</Text>
      <Text>{`Issue: ${car.issue}`}</Text>
      <View style={styles.buttonsContainer}>
        {Object.values(WORKSHOPS).map((ws, idx) => {
          return (
            <TouchableOpacity key={idx} onPress={() => sendToWorkshop(ws, car)}>
              <View style={styles.button}>
                <Text>{ws}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity onPress={() => sendToWorkshop(null, car)}>
          <View style={styles.button}>
            <Text>All good!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Car;
