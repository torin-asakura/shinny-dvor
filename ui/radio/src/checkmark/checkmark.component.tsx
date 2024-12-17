import React, { FC } from 'react'
import {checkmarkAppearanceStyles} from './checkmark.css.js'
import { Text } from '@ui/text'
import {CheckmarkProps} from "./checkmark.interfaces.js";

export const Checkmark: FC<CheckmarkProps> = ({ checked, textTransform = 'lowercase', children }) => {
    return (
        <div
            className={checkmarkAppearanceStyles({checked})}
        >
            <Text textTransform={textTransform} fontSize="small" fontWeight="medium">
                {children}
            </Text>
        </div>
    )
}
