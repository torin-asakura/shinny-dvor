import React from 'react';
import {baseStyles, shapeStyles} from './container.css.js';
import {ContainerProps} from "./container.interfaces.js";

const Container: React.FC<ContainerProps> = ({children, onClick}) => {
    return (
        <div onClick={onClick} className={`${baseStyles} ${shapeStyles}`}>
            {children}
        </div>
    );
};

export {Container};
