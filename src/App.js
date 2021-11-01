import React, {useState, useReducer} from 'react';
import reducer, {initialState} from './reducers'
import {addOne, applyNumber, changeOperation, clearDisplay, setMemory, changeMemory, clearMemory} from './actions'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleAdd = () => {
  //   dispatch(addOne())
  // }

  const handleChange1 = () => {
    dispatch(applyNumber(1))
  }

  const handleChange2 = () => {
    dispatch(applyNumber(2))
  }

  const handleChange3 = () => {
    dispatch(applyNumber(3))
  }

  const handleChange4 = () => {
    dispatch(applyNumber(4))
  }

  const handleChange5 = () => {
    dispatch(applyNumber(5))
  }

  const handleChange6 = () => {
    dispatch(applyNumber(6))
  }

  const handleChange7 = () => {
    dispatch(applyNumber(7))
  }

  const handleChange8 = () => {
    dispatch(applyNumber(8))
  }

  const handleChange9 = () => {
    dispatch(applyNumber(9))
  }

  const handleAdd = () => {
    dispatch(changeOperation('+'));
  }

  const handleSubtract = () => {
    dispatch(changeOperation('-'));
  }

  const handleMultiply = () => {
    dispatch(changeOperation('*'));
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleSetMemory = () => {
    dispatch(setMemory())
  }

  const handleChangeMemory = () => {
    dispatch(changeMemory(state.memory))
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleSetMemory}/>
              <CalcButton value={"MR"} onClick={handleChangeMemory}/>
              <CalcButton value={"MC"} onClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleChange1}/>
              <CalcButton value={2} onClick={handleChange2}/>
              <CalcButton value={3} onClick={handleChange3}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleChange4}/>
              <CalcButton value={5} onClick={handleChange5}/>
              <CalcButton value={6} onClick={handleChange6}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleChange7}/>
              <CalcButton value={8} onClick={handleChange8}/>
              <CalcButton value={9} onClick={handleChange9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleAdd}/>
              <CalcButton value={"*"} onClick={handleMultiply}/>
              <CalcButton value={"-"} onClick={handleSubtract}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
