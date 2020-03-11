import React from 'react';
import './LabelInside.css'

const LabelInside = ({title, total, coin}) => {
    return (
        <div className="inside-container">
            <div className="title-container">
            <h4>{title}</h4>
            <h3>{total}{coin}</h3>
            </div>
        </div>
     );
}
 
export default LabelInside;