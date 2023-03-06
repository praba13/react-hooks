import React from 'react';
import Welcome from './Welcome';

const Parent = () => {
    return (
        <div className='App'>
            <Welcome firstBook='React' secoundBook='Java' />
        </div>
    );
};

export default Parent;