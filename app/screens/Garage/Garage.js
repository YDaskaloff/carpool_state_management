import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CarInProgress from '../../components/CarInProgress/CarInProgress';
import {useSelector, useDispatch} from 'react-redux';
import {REDUCERWORKSHOPS} from '../../constants';

import styles from './styles';

const Garage = ({route, navigation}) => {
  const {title} = route?.params || {};
  const cars = useSelector(store => store.garage[REDUCERWORKSHOPS[title]]);
  const dispatch = useDispatch();

  const fixCar = idx => {
    const client = cars.find((value, index) => idx === index);
    dispatch({type: 'Home', payload: {client, index: idx, type: title}});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.carNumberContainer}>
        <Text>{`Number of cars: ${cars.length}`}</Text>
      </View>
      <ScrollView>
        {cars.map((car, idx) => (
          <CarInProgress car={car} key={idx} onFixIt={() => fixCar(idx)} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Garage;
