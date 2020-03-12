import React, { useEffect, useRef, useState, Fragment } from 'react';
import { select, line, curveCardinal } from 'd3';


const AreaChart = () => {
    const [data] = useState([20, 12, 15, 25, 30, 28, 35, 40, 37, 50]);
    const svgRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);
        const myLine = line()
        .x((value, index) => index * 50) 
        .y(value =>  value)
        .curve(curveCardinal)
        svg
        .selectAll('path')
        .data([data])
        .join('path')
        .attr('d', value => myLine(value))
        .attr('stroke', 'blue')
        .attr('filled', 'pink')
    }, [data])

    return ( 
        <Fragment>
            <svg ref={svgRef}></svg>
        </Fragment>
     );
}
 
export default AreaChart;