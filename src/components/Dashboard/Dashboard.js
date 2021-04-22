import React from 'react';
import Feelings from './Feelings.js';
import Domain from './Domain';
import MonthlyTrend from './MonthlyTrend.js';
import RadarChart from './RadarChart';

const Dashboard = () => {
    return (
        <>
            <div className="bg-light px-4">
                <div className="d-flex flex-row justify-content-between p-4">
                    <div className="col-lg-4 p-5">
                        <Feelings />
                    </div>
                    <div className="col-lg-8 p-5">
                        <MonthlyTrend />
                    </div>
                </div>
                <hr className="my-3 mx-4"></hr>
                <div className="d-flex flex-row justify-content-between p-4">
                    <div className="col-md-5 col-lg-4 p-5">
                        <Domain />
                    </div>
                    <div className="col-md-7 col-lg-8 p-5">
                        <RadarChart googleData={[4,2,1,5,6,3]}/>
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Dashboard
