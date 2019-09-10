import React from 'react';
import styles from './style.scss';

class Input extends React.Component {
  constructor() {
    super();
    this.state={
        input: ""
    }

  }
  changeHandler(){
    this.setState({input:event.target.value});
    this.props.setInput(this.state.input);

  }
  doSomething() {
    this.props.addItem();
  }

  render() {
    return (
      <div>
        <div className={`card ${styles.card}`}>
          <div className="text-center font-weight-bold">Input</div>
          <div className="card-body">
            <h5 className="card-title">Typed: {this.props.input}</h5>
            <p className="card-text"><input placeholder="add a task" onChange={(event)=>{this.changeHandler(event)}}/>
            <button onClick={() => this.doSomething()}>add item</button></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;