import { combineReducers } from 'redux';

// Reducers
import heroReducer from './hero.reducer';

export default combineReducers({
  heroState: heroReducer,
});
