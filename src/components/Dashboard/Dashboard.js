import React, { useState, useEffect} from 'react';
import firebase from '../../util/firebase'
import Feelings from './Feelings.js';
import Domain from './Domain';
import MonthlyTrend from './MonthlyTrend.js';
import RadarChart from './RadarChart';

const Dashboard = () => {
    const [domainList, setDomainList] = useState();
    const [rating, setRating] = useState([]);

    useEffect(() => {
        const domainRef = firebase.database().ref('Domain');
        domainRef.on('value', (items) => {
            const domains = items.val();
            console.log('domains', domains)
            
            const domainList = [];
            const rating = [];
            for (let id in domains) {
                domainList.push(domains[id].name)
                rating.push(domains[id].rating)
            }
            setDomainList(domainList);
            setRating(rating);
        })
    }, []);


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
                        <RadarChart domainList={domainList} googleData={rating}/>
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Dashboard
