import React, { Fragment } from 'react';
import './App.css';
import ChartDoughnut from './components/Chart/Chart'
import SecondChart from './components/SecondChart/SecondChart';
import LabelInside from './components/LabelInside/LabelInside';
import LabelTabletSmartphone from './components/LabelTabletSmartphone/LabelTabletSmartphone';

const App = () => {
  return (
    <Fragment>
      <ChartDoughnut/>
      <SecondChart/>
      <LabelInside
      title="REVENUE"
      total="200.000" coin="€"
      />
      <LabelTabletSmartphone
      percentageT="60%"
      quantityT="120.000€"
      percentageS="40%"
      quantityS="80.000"
      />
    </Fragment>
  )
}



export default App;
