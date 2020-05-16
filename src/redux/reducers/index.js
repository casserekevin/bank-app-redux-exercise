export default (state, action) => {
    switch (action.type) {
      case 'WITHDRAW_MONEY':
        return {
            ...state,
            balance: state.balance - action.amount
        };
      case 'WITHDRAW_ALL_MONEY':
        return {
            ...state,
            balance: 0
        }    
      default:
        return state;
    }
  };