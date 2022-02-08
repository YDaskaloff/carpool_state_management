import {createStore, combineReducers} from 'redux';
import {garageReducer} from './reducers/garage';

const rootReducer = combineReducers({
  garage: garageReducer,
});

const store = createStore(rootReducer);

export default store;
