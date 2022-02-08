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
  const [counter, setCounter] = useState(0);
  const [workshopCars, setWorkshopCars] = useState({
    [WORKSHOPS.MECHANIC]: [],
    [WORKSHOPS.TYRE_SHOP]: [],
    [WORKSHOPS.BODY_SHOP]: [],
  });

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

  useEffect(() => {
    setCounter(prevState => prevState + 1);
  }, [workshopCars]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const sendToWorkshopHandler = (ws, car) => {
    const index = cars.indexOf(car);
    if (index > -1) {
      setCars(prevState => {
        return [
          ...prevState.slice(0, index),
          ...prevState.slice(index + 1, prevState.length),
        ];
      });
    }

    // for the "All good!" button:
    if (!ws) {
      return;
    }

    // Wrong way to update:
    // workshopCars[ws].push(car);
    // setWorkshopCars(workshopCars);

    setWorkshopCars({
      ...workshopCars,
      [ws]: [...workshopCars[ws], car],
    });
  };

  const goToGarage = workshop => {
    navigation.navigate(SCREEN_NAMES.GARAGE, {
      title: workshop,
      cars: workshopCars[workshop],
    });
  };

  const renderWorkShop = (workshopName, idx, carsInWorkshop) => {
    return (
      <Workshop
        key={idx}
        title={workshopName}
        onPress={() => goToGarage(workshopName)}
        carsInWorkshop={carsInWorkshop}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.workShopsContainer}>
        {Object.values(WORKSHOPS).map((workshopName, idx) =>
          renderWorkShop(workshopName, idx, workshopCars[workshopName]),
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
                return (
                  <Car
                    key={idx}
                    car={car}
                    sendToWorkshop={sendToWorkshopHandler}
                  />
                );
              })
              .reverse()
          : null}
      </ScrollView>
    </View>
  );
};

export default Cars;
