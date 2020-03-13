import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';


const ChartDoughnutThree = () => {
    const [charData, setCharData] = useState({})

    const chart = () => {
        setCharData({
            datasets : [
                {
                    data: [80, 20],
                    backgroundColor: [
                        'rgba(232, 206, 79, 0.6)',
                        'rgba(255, 245, 99, 0.6)'
                    ],
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
            <div>
                <Doughnut
                data= {charData}
                options = {{
                    cutoutPercentage: 90
                }}
                />
            </div>
    )
}

export default ChartDoughnutThree;