import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CarInProgress from '../../components/CarInProgress/CarInProgress';

import styles from './styles';

const Garage = ({route}) => {
  const {cars, title} = route?.params || {};

  return (
    <View style={styles.screen}>
      <View style={styles.carNumberContainer}>
        <Text>{`Number of cars: ${cars.length}`}</Text>
      </View>
      <ScrollView>
        {cars.map((car, idx) => (
          <CarInProgress car={car} key={idx} onFixIt={() => undefined} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Garage;
