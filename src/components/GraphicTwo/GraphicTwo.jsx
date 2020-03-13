import React, { Fragment } from 'react';
import ChartDoughnutTwo from '../ChartTwo/ChartTwo'
import LabelInside from '../LabelInside/LabelInside'
import LabelTabletSmartphone from '../LabelTabletSmartphone/LabelTabletSmartphone'


const GraphicTwo = () => {
    return ( 
    <Fragment>
    <div className="all-container">
    <ChartDoughnutTwo/>
      <LabelInside className="inside-"
      title="IMPRESIONS"
      total="50.000.000" 
      />
       <LabelTabletSmartphone
      percentageT="40%"
      quantityT="20.000.000"
      percentageS="60%"
      quantityS="30.000.000"
      />
      </div>
        </Fragment>
     );
}
 
export default GraphicTwo;