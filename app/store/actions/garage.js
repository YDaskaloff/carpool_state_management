import { ADD_TO_SHOP, FIX_CAR, REMOVE_CAR, ADD_TO_HOME } from './types';

export const addToShop = (shop, car) => ({
    type: ADD_TO_SHOP,
    payload: { shop, car },
});

export const fixCar = (shop, car) => {
    return {
        type: FIX_CAR,
        payload: { shop, car },
    };
};

export const removeCarFromHome = car => ({
    type: REMOVE_CAR,
    payload: { car },
});

export const addToHome = car => ({
    type: ADD_TO_HOME,
    payload: { car },
});
