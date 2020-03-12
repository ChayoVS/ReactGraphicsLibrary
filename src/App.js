import React, { Fragment } from 'react';
import './App.css';
import ChartDoughnut from './components/Chart/Chart'
import LabelInside from './components/LabelInside/LabelInside';
import LabelTabletSmartphone from './components/LabelTabletSmartphone/LabelTabletSmartphone';


const App = () => {
  return (
    <Fragment>
      <div>
      <ChartDoughnut/>
      <LabelInside className="inside-"
      title="REVENUE"
      total="200.000" coin="€"
      />
       <LabelTabletSmartphone
      percentageT="60%"
      quantityT="120.000€"
      percentageS="40%"
      quantityS="80.000€"
      />
      </div>
      {/* <ChartDoughnut/>
      <AreaChart/> */}
    </Fragment>
  )
}



export default App;
