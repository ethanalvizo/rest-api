import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';


const RadarChart = ({ googleData }) => {
    const [data, setData] = useState({
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
        }
      ]
    });

    useEffect(() => {
      let dataSet = [];
      for (let num in googleData){
        dataSet.push(googleData[num]);
      }
      setData({
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
            data: dataSet
          }
        ]
      });
    }, [googleData]);

    return (
        <div>
            <Card style={{height: '500px', padding: '1em'}}>
                <Radar
                    data={data}
                    options={{
                      maintainAspectRatio : false,
                      legend: {
                        position: 'left'
                      },
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
