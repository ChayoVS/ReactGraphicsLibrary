import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';


const ChartDoughnutTwo = () => {
    const [charData, setCharData] = useState({})

    const chart = () => {
        setCharData({
            datasets : [
                {
                    data: [60, 40],
                    backgroundColor: [
                        'rgba(152, 107, 232, 0.6)',
                        'rgba(209, 131, 255, 0.6)'
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

export default ChartDoughnutTwo;