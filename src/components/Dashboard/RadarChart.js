import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';


const RadarChart = ({ domainList = ["loading"], googleData }) => {
    const [data, setData] = useState({
      labels: domainList,
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
        labels: domainList,
        datasets: [
          {
            label: "Today",
            backgroundColor: "rgba(220,220,220,0.2)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            data: dataSet
          }
        ]
      });
    }, [domainList, googleData]);

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
