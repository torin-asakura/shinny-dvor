import { style } from '@vanilla-extract/css'
import {recipe} from "@vanilla-extract/recipes";

export const checkmarkBaseStyles = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

// TODO: change colors
export const checkmarkAppearanceStyles = recipe({
    base: checkmarkBaseStyles,
    variants: {
        checked: {
            true: {
                color: 'white'
            },
            false: {
                color: 'black'
            },
        },
    },
})