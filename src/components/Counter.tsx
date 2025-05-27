// ----- Code 02 : Conversion de Counter en TypeScript -----
import React, { Component } from 'react';
import '../styles/App.css';

// Définition du type pour l'état
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // Fonction pour incrémenter le compteur avec un typage correct
  increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="counter-container">
        <p className="counter-text">Count: {this.state.count}</p>
        <button className="counter-button" onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;