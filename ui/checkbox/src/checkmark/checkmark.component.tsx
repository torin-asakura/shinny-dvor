import React, {PropsWithChildren} from 'react';
import {baseStyles, appearanceStyles, shapeStyles} from './checkmark.css.js';

const Checkmark: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={`${baseStyles} ${appearanceStyles} ${shapeStyles}`}>
            {children}
        </div>
    );
};

export {Checkmark};
