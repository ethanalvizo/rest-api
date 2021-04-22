import React from 'react';
import DomainInput from './DomainInput';

const Domain = () => {
    let domains = [];
    domains.push('Professional');
    domains.push('Fitness');
    domains.push('Family Time');
    domains.push('Personal Time');
    domains.push('Spirituality');
    domains.push('Guitar');

    const output = domains.map((item, index) => <DomainInput name={item} key={index} className="w-100"/> );

    return (
        <div>
            {output}
            <form className="form-inline row">
                <input type="text" className="form-control col-8 mr-2"  placeholder="Fitness, Hygiene, Studying, Screen Time..."></input>
                <button className="btn btn-secondary col-3" type="submit" >Add Domain</button>
            </form>
            
        </div>
    )
}

export default Domain
