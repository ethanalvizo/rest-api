import React from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const state = {
  labels: ['Jan', '', 'Mar', '', 'May', '',
           'Jul', '', 'Sep', '', 'Nov', ''],
  datasets: [
    {
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(65,105,225,0.05)',
      borderColor: 'rgba(65,105,225,1)',
      borderWidth: 2,
      data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 40]
    }
  ]
}   

const MonthlyTrend = () => {
    return (
        <div>
            <Card style={{height: '300px', padding: '1em'}}>
                <Line
                    data={state}
                    options={{
                        maintainAspectRatio : false,
                        legend:{
                            display:false,
 
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                   display: false
                                }
                             }],
                             yAxes: [{
                                gridLines: {
                                    borderDash: [2],
                                    colors: '#f8f9fa'
                                }
                            }]
                        }
                    }}
                />
            </Card>
        </div>
    )
}

export default MonthlyTrend
