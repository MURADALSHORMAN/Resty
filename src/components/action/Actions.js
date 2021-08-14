const initialState = {
    history: [],
  };
  
  function historyReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
    case 'ADD-TO-HISTORY':
      const history = [...state.history, payload.history];
      return { history };
    default:
      return state;
    }
  }
  
  function historyAction(history) {
    return {
      type: 'ADD-TO-HISTORY',
      payload: { history },
    };
  }
  
  module.exports = {
    initialState,
    historyReducer,
    historyAction,
  };