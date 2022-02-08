import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {carGenerator} from '../../helpers';
import {WORKSHOPS, SCREEN_NAMES} from '../../constants';
import Car from '../../components/Car/Car';
import Workshop from '../../components/Workshop/Workshop';
import styles from './styles';

const Cars = ({navigation}) => {
  const [cars, setCars] = useState([]);

  const generateCar = () => {
    const newCar = carGenerator();
    setCars(prev => [...prev, newCar]);
  };

  useEffect(() => {
    if (cars.length === 0) {
      for (let i = 0; i < 10; i++) {
        generateCar();
      }
    }
  }, []);

  const goToGarage = workshop => {
    navigation.navigate(SCREEN_NAMES.GARAGE, {title: workshop});
  };

  const renderWorkShop = (workshopName, idx) => {
    return (
      <Workshop
        key={idx}
        title={workshopName}
        onPress={() => goToGarage(workshopName)}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.workShopsContainer}>
        {Object.values(WORKSHOPS).map((workshopName, idx) =>
          renderWorkShop(workshopName, idx),
        )}
      </View>
      <View style={styles.moreCarsButton}>
        <TouchableOpacity onPress={generateCar}>
          <View style={styles.moreCarsInner}>
            <Text>+ More cars</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        {cars.length > 0
          ? cars
              .map((car, idx) => {
                return <Car key={idx} car={car} />;
              })
              .reverse()
          : null}
      </ScrollView>
    </View>
  );
};

export default Cars;
