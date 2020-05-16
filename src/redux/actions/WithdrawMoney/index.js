const withdrawMoney = (amount) => {
    return {
      type: 'WITHDRAW_MONEY',
      amount
    };
  }

  export default withdrawMoney