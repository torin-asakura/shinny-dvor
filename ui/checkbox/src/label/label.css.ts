import {style} from '@vanilla-extract/css';
import {recipe} from '@vanilla-extract/recipes';

export const positionStyles = style({
    margin: '24px',
});

export const appearanceStyles = style({
    color: 'black',
});

export const shapeStyles = style({
    fontSize: '22px',
    fontWeight: '500',
    fontFamily: 'primary',
});

export const labelStyles = recipe({
    base: [
        positionStyles,
        appearanceStyles,
        shapeStyles
    ],
});
