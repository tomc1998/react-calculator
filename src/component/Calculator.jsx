import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /** Accumulator */
      acc: 0,
      /** Current display */
      curr: 0,
    };
  }

  render() {
    return (
      <div id="calc">
        <textarea rows="1" cols="10"></textarea>
        <table>
          <tbody>
            <tr>
              <td><button id="1">1</button></td>
              <td><button id="2">2</button></td>
              <td><button id="3">3</button></td>
              <td><button id="/">/</button></td>
            </tr>
            <tr>
              <td><button id="4">4</button></td>
              <td><button id="5">5</button></td>
              <td><button id="6">6</button></td>
              <td><button id="*">*</button></td>
            </tr>
            <tr>
              <td><button id="7">7</button></td>
              <td><button id="8">8</button></td>
              <td><button id="9">9</button></td>
              <td><button id="-">-</button></td>
            </tr>
            <tr>
              <td><button id="0">0</button></td>
              <td><button id=".">.</button></td>
              <td><button id="=">=</button></td>
              <td><button id="+">+</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calculator;
