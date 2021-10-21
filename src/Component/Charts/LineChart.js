import React from 'react'
import {  Line ,} from 'react-chartjs-2'

const LineChartView = () => {
    return (
        <div className="chart_sec" id="capture">
            <div className="cart_main_heading">
                <h1>Line Chart</h1>
            </div>
            <div className="container" >
                <div className="row">
                    <div className="col-12">
            <Line
                data = {{
                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                    datasets: [
                        {
                            label:'Population',
                            data:[12, 19, 3, 5, 2, 3],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
                }}
                height={400}
                width={600}
                options={{
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'easeInExpo',
                            from: 1,
                            to: 0,
                            loop: false
                        }
                    },
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineChartView;