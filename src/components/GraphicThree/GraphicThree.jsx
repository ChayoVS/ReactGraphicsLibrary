import React, { Fragment } from 'react';
import ChartDoughnutTwo from '../ChartThree/ChartThree'
import LabelInside from '../LabelInside/LabelInside'
import LabelTabletSmartphone from '../LabelTabletSmartphone/LabelTabletSmartphone'


const GraphicThree = () => {
    return ( 
    <Fragment>
    <div className="all-container">
    <ChartDoughnutTwo/>
      <LabelInside className="inside-"
      title="VISITS"
      total="600.000.000" 
      />
       <LabelTabletSmartphone
      percentageT="80%"
      quantityT="480.000.000"
      percentageS="20%"
      quantityS="120.000.000"
      />
      </div>
        </Fragment>
     );
}
 
export default GraphicThree;