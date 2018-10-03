import { createStore, compose, applyMiddleware } from 'redux';
import { default as reduxThunk } from 'redux-thunk';
import apiService from './../services/apiService';
import rootReducer from './rootReducer';

const CreateStore = ({
  history,
  isBrowser
}) => {

  const middleware = [];
  const composeEnhancers = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
  );

  const middlewares = [
    reduxThunk.withExtraArgument({ api: apiService, history }),
  ].filter(Boolean);

  return (initialState) => createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
};

export default CreateStore;
