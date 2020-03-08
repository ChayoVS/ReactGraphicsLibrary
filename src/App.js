import React, { Fragment } from 'react';
import './App.css';
import ChartDoughnut from './components/Chart/Chart'
import SecondChart from './components/SecondChart/SecondChart';


const App = () => {
  return (
    <Fragment>
      <ChartDoughnut/>
      <SecondChart/>
    </Fragment>
  )
}



export default App;
