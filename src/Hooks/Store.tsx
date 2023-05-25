import { createStore, combineReducers} from 'redux';
import Reducer_Mobile from './Reducers';
 
const rootReducer = combineReducers({
  all: Reducer_Mobile,
});
 
export const store = createStore(rootReducer);