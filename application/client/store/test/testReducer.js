const TEST = 'TEST';

const initialState = {
  testParams: {
    test_source: '',
    test_medium: '',
    test_campaign: '',
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEST:
      return {
        ...state,
        testParams: payload,
      };
    default:
      return state;
  }
};
