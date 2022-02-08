import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREEN_NAMES} from '../constants';
import CarPool from '../screens/CarPool/CarPool';
import Garage from '../screens/Garage/Garage';

const CarsStackNavigator = createNativeStackNavigator();

const CarsStack = () => {
  return (
    <CarsStackNavigator.Navigator>
      <CarsStackNavigator.Screen
        name={SCREEN_NAMES.CAR_POOL}
        component={CarPool}
      />
      <CarsStackNavigator.Screen
        name={SCREEN_NAMES.GARAGE}
        component={Garage}
        options={({route}) => ({title: route.params.title})}
      />
    </CarsStackNavigator.Navigator>
  );
};

export default CarsStack;
