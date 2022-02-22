import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { carGenerator } from '../../helpers';
import { WORKSHOPS, SCREEN_NAMES } from '../../constants';
import Car from '../../components/Car/Car';
import Workshop from '../../components/Workshop/Workshop';
import styles from './styles';
import {
  addToShop,
  removeCarFromHome,
  addToHome,
} from '../../store/actions/garage';

const Cars = ({
  navigation,
  garage,
  addToShop,
  addToHome,
  removeCarFromHome,
}) => {
  const [counter, setCounter] = useState(0);

  const generateCar = () => {
    const newCar = carGenerator();
    addToHome(newCar);
  };

  useEffect(() => {
    if (garage.home.length === 0) {
      for (let i = 0; i < 10; i++) {
        generateCar();
      }
    }
  }, []);

  useEffect(() => {
    setCounter(prevState => prevState + 1);
  }, [garage]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  //ws = workshop
  const sendToWorkshopHandler = (ws, car) => {
    // for the "All good!" button:
    if (!ws) {
      removeCarFromHome(car);
      return;
    }

    addToShop(ws, car);
  };

  const goToGarage = workshop => {
    navigation.navigate(SCREEN_NAMES.GARAGE, {
      title: workshop,
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
          renderWorkShop(workshopName, idx, garage[workshopName]),
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
        {garage.home.length > 0
          ? garage.home
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

const mapStateToProps = state => ({
  garage: state.garage,
});

const mapDispatchToProps = dispatch => ({
  addToShop: (shop, car) => dispatch(addToShop(shop, car)),
  removeCarFromHome: car => dispatch(removeCarFromHome(car)),
  addToHome: car => dispatch(addToHome(car)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
