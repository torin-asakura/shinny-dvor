import React, {PropsWithChildren} from 'react';
import {box} from './box.css.js';

import type {BoxProps} from './box.interface.js';

const Box: React.FC<PropsWithChildren<BoxProps>> = ({checked = false, size = 'medium', children, ...props}) => {
    return (
        <div className={box({checked, size})} {...props}>
            {children}
        </div>
    );
};

export {Box};
