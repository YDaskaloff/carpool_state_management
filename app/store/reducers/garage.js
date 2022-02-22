import { ADD_TO_SHOP, FIX_CAR, REMOVE_CAR, ADD_TO_HOME } from '../actions/types';
import { WORKSHOPS } from '../../constants';

const initialState = {
  [WORKSHOPS.MECHANIC]: [],
  [WORKSHOPS.TYRE_SHOP]: [],
  [WORKSHOPS.BODY_SHOP]: [],
  home: [],
};

export const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HOME: {
      return {
        ...state,
        home: [...state.home, action.payload.car],
      };
    }
    case ADD_TO_SHOP: {
      const index = state.home.indexOf(action.payload.car);
      const updatedHomePool = [
        ...state.home.slice(0, index),
        ...state.home.slice(index + 1, state.home.length),
      ];
      return {
        ...state,
        [action.payload.shop]: [
          ...state[action.payload.shop],
          action.payload.car,
        ],
        home: updatedHomePool,
      };
    }
    case FIX_CAR: {
      const index = state[action.payload.shop].indexOf(action.payload.car);
      const updatedShopPool =
        index < 0
          ? []
          : [
            ...state[action.payload.shop].slice(0, index),
            ...state[action.payload.shop].slice(
              index + 1,
              state[action.payload.shop].length,
            ),
          ];

      return {
        ...state,
        home: [...state.home, action.payload.car],
        [action.payload.shop]: updatedShopPool,
      };
    }
    case REMOVE_CAR:
      const index = state.home.indexOf(action.payload.car);
      const updatedHomePool = [
        ...state.home.slice(0, index),
        ...state.home.slice(index + 1, state.home.length),
      ];
      return {
        ...state,
        home: updatedHomePool,
      };
    default:
      return state;
  }
};
