import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';


const RadarChart = ({ googleData }) => {
    const [data, setData] = useState();
    const [state, setState] = useState({});

    useEffect(() => {
      setData(googleData);
      let dataSet = [];
      for (let num in data){
        dataSet.push(data[num]);
      }
      setState({
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
    }, [data, googleData]);

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
