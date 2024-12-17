import React from 'react'

import {baseStyles, shapeStyles, appearanceStyles} from './container.css.js'
import {ContainerProps} from "./container.interface.js";

export const Container: React.FC<ContainerProps> = ({checked, children, ...props}) => {
    return (
        <div
            className={`${baseStyles} ${shapeStyles} ${appearanceStyles({checked})}`} {...props}
        >
            {children}
        </div>
    )
}
