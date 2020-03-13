import React, { Fragment } from 'react';
import ChartDoughnut from '../Chart/Chart'
import LabelInside from '../LabelInside/LabelInside'
import LabelTabletSmartphone from '../LabelTabletSmartphone/LabelTabletSmartphone'
import './GraphicOne.css'

const GraphicOne = () => {
    return ( 
    <Fragment>
    <div className="all-container">
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
        </Fragment>
     );
}
 
export default GraphicOne;