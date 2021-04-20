import React from 'react';
import Feelings from './Feelings.js';
import MonthlyTrend from './MonthlyTrend.js';

const Dashboard = () => {
    return (
        <>
            <div class="bg-light vh-100">
                <div class="d-flex flex-row justify-content-between p-4">
                    <div class="w-25 p-5">
                        <Feelings />
                    </div>
                    <div class="w-75 p-5">
                        <MonthlyTrend />
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-between p-4">
                    <div class="w-25 p-5">
                        <Feelings />
                    </div>
                    <div class="w-75 p-5">
                        <MonthlyTrend />
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Dashboard
