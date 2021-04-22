import React, { useEffect, useState } from 'react';
import DomainInput from './DomainInput';
import firebase from '../../util/firebase';


const Domain = () => {
    const [domainList, setDomainList] = useState();

    useEffect(() => {
        const domainRef = firebase.database().ref('Todo');
        domainRef.on('value', (items) => {
            const domains = items.val();
            
            const domainList = [];
            for (let id in domains) {
                domainList.push({id, ...domains[id]})
            }

            setDomainList(domainList);
            console.log(domainList)
        })
    }, []);

    const handleSliderChange = (name, e) => {
        console.log(name, e)
    }

    return (
        <div>
            {domainList ? domainList.map((item, index) => <DomainInput name={item.title} onChange={handleSliderChange} key={index} className="w-100"/> ) : null}
            <form className="form-inline row">
                <input type="text" className="form-control col-8 mr-2"  placeholder="Fitness, Hygiene, Studying, Screen Time..."></input>
                <button className="btn btn-secondary col-3" type="submit" >Add Domain</button>
            </form>
            
        </div>
    )
}

export default Domain
