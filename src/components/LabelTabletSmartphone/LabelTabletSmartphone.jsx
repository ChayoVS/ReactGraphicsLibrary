import React from 'react';
import './LabelTabletSmartphone.css'

const LabelTabletSmartphone = ({percentageT, quantityT, percentageS, quantityS}) => {
    return ( 
        <div className="label-container">
            <div className="Tablet">
                <h6>Tablet</h6>
                <h5>{percentageT}</h5> <h5 className="quantity">{quantityT}</h5>
            </div>
            <div className="Smartphone">
                <h6>Smartphone</h6>
                <h5>{percentageS}</h5><h5 className="quantity">{quantityS}</h5>
            </div>
        </div>
     );
}
 
export default LabelTabletSmartphone;