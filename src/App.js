import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";

import "./App.css";

import store from './redux/store'

import WithdrawMoney from './redux/actions/WithdrawMoney'
import WithdrawAllMoney from './redux/actions/WithdrawAllMoney'

const handleClickAmountValue = (event) => {
  const amount = Number(event.target.dataset.amount);
  store.dispatch(WithdrawMoney(amount));
}

const handleClickAllValue = (event) => {
  store.dispatch(WithdrawAllMoney());
}

class App extends Component {
  
  render() {
    const { balance, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(balance)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={handleClickAmountValue}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={handleClickAmountValue}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" onClick={handleClickAllValue}>Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
