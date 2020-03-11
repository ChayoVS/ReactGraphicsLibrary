import React, { Fragment } from 'react';
import './App.css';
import ChartDoughnut from './components/Chart/Chart'
import SecondChart from './components/SecondChart/SecondChart';
import LabelInside from './components/LabelInside/LabelInside';

const App = () => {
  return (
    <Fragment>
      <ChartDoughnut/>
      <SecondChart/>
      <LabelInside
      title="REVENUE"
      total="200.000" coin="€"
      />
    </Fragment>
  )
}



export default App;
