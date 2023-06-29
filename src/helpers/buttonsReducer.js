export const initial_state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export const onAddMark = (state, action) => {
  switch (action.type) {
    case 'good':
      return {
        ...state,
        good: state.good + action.payload,
      };
    case 'neutral':
      return {
        ...state,
        neutral: state.neutral + action.payload,
      };
    case 'bad':
      return {
        ...state,
        bad: state.bad + action.payload,
      };
    default:
      return state;
  }
};
