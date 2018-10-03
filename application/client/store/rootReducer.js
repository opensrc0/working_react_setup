import { combineReducers } from 'redux';
import testReducer from './test/testReducer';

export default combineReducers({
  test: testReducer,
});
