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
    
    case TEST_ASYNC_CALL:
      return {
        ...state,
        other: payload,
      };
    
    default:
      return state;
  }
};

// export const getTestData = (data) => ({
//     type: TEST_SYNC_CALL,
//     payload: data
// });

// export const setTestData = (data) => ({
//   type: TEST_SYNC_CALL,
//   payload: data
// });


// const setGoalList = (goalList) => {
//   return {
//       type: GET_GOAL_LIST,
//       payload: goalList,
//   }
// }

export const getTestData = (data) => (dispatch) => {
    dispatch({
        type: TEST_SYNC_CALL,
        payload: data,
    });    
};

export const getAPIData = (data) => (dispatch) => {
  fetch('https://sit-digital.ril.com/rildigitalws/v2/rrldigital/cms/pagedata?pageId=headerpage&pageType=contentPage')
    .then((response) => response.json())
    .then((response) => {
      dispatch({
          type: TEST_ASYNC_CALL,
          payload: response,
      }); 
      console.log(response)
    });
};