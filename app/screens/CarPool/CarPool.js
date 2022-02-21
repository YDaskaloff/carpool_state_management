/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector, useStore} from 'react-redux';

import {carGenerator} from '../../helpers';
import {WORKSHOPS, SCREEN_NAMES, REDUCERWORKSHOPS} from '../../constants';
import Car from '../../components/Car/Car';
import Workshop from '../../components/WorkShop/WorkShop';
import styles from './styles';

const Cars = ({navigation}) => {
  const mechanic = useSelector(store => store.garage.mechanic);
  const tyreShop = useSelector(store => store.garage.tyreShop);
  const bodyShop = useSelector(store => store.garage.bodyShop);
  const cars = useSelector(store => store.garage.home);
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);
  const store = useStore().getState().garage;

  const generateCar = () => {
    const newCar = carGenerator();
    dispatch({type: 'Home', payload: {client: newCar}});
    //setCars(prev => [...prev, newCar]);
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
  }, [cars, mechanic, bodyShop, tyreShop]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const sendToWorkshopHandler = (ws, car) => {
    const index = cars.indexOf(car);
    if (index > -1) {
      dispatch({type: ws, payload: {client: car, index}});
    }

    // for the "All good!" button:
    if (!ws) {
      dispatch({type: 'All Good', payload: {index}});
    }

    // Wrong way to update:
    // workshopCars[ws].push(car);
    // setWorkshopCars(workshopCars);
  };

  const goToGarage = workshop => {
    navigation.navigate(SCREEN_NAMES.GARAGE, {
      title: workshop,
      cars: store[REDUCERWORKSHOPS[workshop]],
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
          renderWorkShop(
            workshopName,
            idx,
            store[REDUCERWORKSHOPS[workshopName]],
          ),
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
