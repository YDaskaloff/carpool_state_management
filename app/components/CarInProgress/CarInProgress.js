import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fixCar } from '../../store/actions/garage';

import styles from './styles';

const CarInProgress = ({ car, fixCar, shopName }) => {
  const fixCurrentCar = () => {
    fixCar(shopName, car);
  };

  return (
    <View style={styles.card}>
      <Text>{`Brand: ${car.brand}`}</Text>
      <Text>{`Type: ${car.type}`}</Text>
      <Text>{`Issue: ${car.issue}`}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={fixCurrentCar}>
          <View style={styles.button}>
            <Text>Fix it!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  fixCar: (shopName, car) => dispatch(fixCar(shopName, car)),
});

export default connect(null, mapDispatchToProps)(CarInProgress);
