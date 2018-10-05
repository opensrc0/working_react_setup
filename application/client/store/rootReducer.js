import { combineReducers } from 'redux';
import testReducer from './test/testReducer';
import homeReducer from './homeReducer/homeReducer';

export default combineReducers({
  test: testReducer,
  home: homeReducer,
});
