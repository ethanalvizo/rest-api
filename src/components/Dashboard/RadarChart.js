import React from 'react';
import { Card } from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';


const RadarChart = () => {
    const state = {
      labels: [
        "Professional",
        "Fitness",
        "Family Time",
        "Personal Time",
        "Spirituality",
        "Guitar"
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "rgba(220,220,220,0.2)",
          pointBackgroundColor: "rgba(220,220,220,1)",
          data: [
            4,2,1,5,6,3
          ]
        }, 
        // {
        //   label: 'Week',
        //   data: [
        //     2,6,3,1,4,5
        //   ]
        // }, 
        // {
        //   label: "Month",
        //   backgroundColor: "rgba(151,187,205,0.2)",
        //   pointBackgroundColor: "rgba(151,187,205,1)",
        //   hoverPointBackgroundColor: "#fff",
        //   pointHighlightStroke: "rgba(151,187,205,1)",
        //   data: [
        //     2,3,5,6,1,4
        //   ]
        // }
      ]
    }
    return (
        <div>
            <Card style={{height: '500px', padding: '1em'}}>
                <Radar
                    data={state}
                    options={{
                      maintainAspectRatio : false,
                      legend: {
                        position: 'left'
                      },
                      // title: {
                      //   display: true,
                      //   text: 'Chart.js Radar Chart'
                      // },
                      scale: {
                        reverse: false,
                        angleLines: {
                          display: false,
                        },
                        ticks: {
                          beginAtZero: true
                        }
                      }
                    }}
                />
            </Card>
        </div>
    )
}

export default RadarChart
