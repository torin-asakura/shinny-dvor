import {style} from '@vanilla-extract/css';
import {recipe} from '@vanilla-extract/recipes';

export const baseStyle = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
});

export const sizeVariants = {
    medium: style({
        width: '20px',
        height: '20px',
    })
};

export const checkedVariants = {
    true: style({
        border: '1px solid blue',
        backgroundColor: 'blue',
    }),
    false: style({
        border: '1px solid gray',
        backgroundColor: 'white',
    }),
};

export const box = recipe({
    base: [baseStyle],
    variants: {
        size: sizeVariants,
        checked: checkedVariants,
    },
    defaultVariants: {
        size: 'medium',
        checked: false,
    },
});