import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';


const SecondChart = () => {

    return ( 
        <ReactMinimalPieChart
        animate
        animationDuration={500}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: '#E38627',
            title: 'One',
            value: 120000
          },
          {
            color: '#6A2135',
            title: 'Three',
            value: 80000
          }
        ]}
        label
        labelPosition={0}
        lengthAngle={360}
        lineWidth={5}
        paddingAngle={0}
        radius={50}
        rounded={false}
        startAngle={54}
        totalValue={200000}
        viewBoxSize={[
          100,
          100
        ]}
        />
     );
}
 
export default SecondChart;