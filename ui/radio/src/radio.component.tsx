import type {FC} from 'react'

import type {RadioProps} from './radio.interface.js'

import React from 'react'

import {Layout} from '@ui/layout'
import {Column} from '@ui/layout'

import {Container} from './container/index.js'
import {Checkmark} from "./checkmark/index.js";

const Radio: FC<RadioProps> = ({children, checked, textTransform = 'lowercase'}) => {
    return (
        <Column width='100%'>
            <Container checked={checked}>
                <Checkmark checked={checked} textTransform={textTransform}>
                    {children}
                </Checkmark>
            </Container>
            <Layout flexBasis={12}/>
        </Column>
    )
}

export {Radio}
