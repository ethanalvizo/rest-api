import React from 'react';
import Feelings from './Feelings.js';
import Domain from './Domain';
import MonthlyTrend from './MonthlyTrend.js';

const Dashboard = () => {
    return (
        <>
            <div className="bg-light vh-100">
                <div className="d-flex flex-row justify-content-between p-4">
                    <div className="w-25 p-5">
                        <Feelings />
                    </div>
                    <div className="w-75 p-5">
                        <MonthlyTrend />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between p-4">
                    <div className="w-25 p-5">
                        <Domain />
                    </div>
                    <div className="w-75 p-5">
                        <MonthlyTrend />
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Dashboard
