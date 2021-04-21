import React from 'react';
import Domains from './Domains';

const Domain = () => {
    let domains = [];
    domains.push('Professional');
    domains.push('Fitness');
    domains.push('Family Time');
    domains.push('Personal Time');
    domains.push('Spirituality');
    domains.push('Guitar');

    const output = domains.map((item, index) => <Domains name={item} key={index} className="w-100"/> );

    return (
        <div>
            {output}
            <form className="form-inline">
                <input type="text" class="form-control col-8 mr-2"  placeholder="Fitness, Hygiene, Studying, Screen Time..."></input>
                <button class="btn btn-secondary" type="submit" >Add Domain</button>
            </form>
            
        </div>
    )
}

export default Domain
