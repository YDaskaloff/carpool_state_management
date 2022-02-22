import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CarInProgress from '../../components/CarInProgress/CarInProgress';
import { connect } from 'react-redux';

import styles from './styles';

const Garage = ({ route, garage }) => {
  const { title } = route?.params || {};
  const cars = garage[title];
  return (
    <View style={styles.screen}>
      <View style={styles.carNumberContainer}>
        <Text>{`Number of cars: ${cars.length}`}</Text>
      </View>
      <ScrollView>
        {cars.map((car, idx) => (
          <CarInProgress car={car} key={idx} shopName={title} />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  garage: state.garage,
});

export default connect(mapStateToProps)(Garage);
