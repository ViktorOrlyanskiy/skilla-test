import React from 'react';
import { getIcon } from './getIcon';

function Icons({ icon }) {
    return (
        <div>
            {getIcon(icon)}
        </div>
    );
}

export default Icons;