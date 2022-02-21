import {REDUCERWORKSHOPS} from '../../constants';

const initialState = {
  mechanic: [],
  tyreShop: [],
  bodyShop: [],
  home: [],
};

export const garageReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'Mechanic':
      return {
        ...state,
        mechanic: [...state.mechanic, action.payload.client],
        home: [...state.home.filter((v, idx) => idx !== action.payload.index)],
      };
    case 'Tyre shop':
      return {
        ...state,
        tyreShop: [...state.tyreShop, action.payload.client],
        home: [...state.home.filter((v, idx) => idx !== action.payload.index)],
      };
    case 'Body shop':
      return {
        ...state,
        bodyShop: [...state.bodyShop, action.payload.client],
        home: [...state.home.filter((v, idx) => idx !== action.payload.index)],
      };
    case 'Home':
      if (action.payload.type) {
        console.log('it have type');
        return {
          ...state,
          [REDUCERWORKSHOPS[action.payload.type]]: [
            ...state[REDUCERWORKSHOPS[action.payload.type]].filter(
              (v, idx) => idx !== action.payload.index,
            ),
          ],
          home: [...state.home, action.payload.client],
        };
      }
      return {
        ...state,
        home: [...state.home, action.payload.client],
      };
    case 'All Good':
      return {
        ...state,
        home: [...state.home.filter((v, idx) => idx !== action.payload.index)],
      };
    default:
      return state;
  }
};
