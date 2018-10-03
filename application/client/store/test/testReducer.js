const SET_UTM_PARAMS = 'SET_UTM_PARAMS';

const initialState = {
  utmParams: {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_UTM_PARAMS:
      return {
        ...state,
        utmParams: payload,
      };
    default:
      return state;
  }
};
