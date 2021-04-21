import React from 'react';
import Feelings from './Feelings.js';
import Domain from './Domain';
import MonthlyTrend from './MonthlyTrend.js';
import Radar from './RadarChart';

const Dashboard = () => {
    return (
        <>
            <div className="bg-light">
                <div className="d-flex flex-row justify-content-between p-4">
                    <div className="w-25 p-5">
                        <Feelings />
                    </div>
                    <div className="w-75 p-5">
                        <MonthlyTrend />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between p-4">
                    <div className="w-50 p-5">
                        <Domain />
                    </div>
                    <div className="w-50 p-5">
                        <Radar />
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Dashboard
