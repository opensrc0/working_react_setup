import { handle } from 'redux-pack';

const TEST_SYNC_CALL = 'TEST_SYNC_CALL';
const TEST_ASYNC_CALL = 'TEST_ASYNC_CALL';

const initialState = {
    name: '',
    other: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEST_SYNC_CALL:
      return {
        ...state,
        name: payload,
      };
    
    case TEST_ASYNC_CALL: return handle(state, action, {
      start: (s) => ({
        ...s,
      }),
      success: (s) => ({
        ...s,
        other: payload,
      }),
      failure: (s) => ({
        ...s,
      }),
    });
    
    default:
      return state;
  }
};

export const getTestData = (data) => (dispatch) => {
  dispatch({
    type: TEST_SYNC_CALL,
    payload: data,
  });    
};

export const getAPIData = (data) => (dispatch) => {
  dispatch({
    type: TEST_ASYNC_CALL,
    promise: fetch('https://sit-digital.ril.com/rildigitalws/v2/rrldigital/cms/pagedata?pageId=headerpage&pageType=contentPage')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    }),
  }); 
};