import React, {PropsWithChildren} from 'react';
import {labelStyles} from './label.css.js';

const Label: React.FC<PropsWithChildren> = ({children, ...props}) => {
    return (
        <div className={labelStyles()} {...props}>
            {children}
        </div>
    );
};

export {Label};
