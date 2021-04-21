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

    const output = domains.map((item, index) => <Domains name={item} key={index} /> );

    return (
        <div>
            {output}
        </div>
    )
}

export default Domain
