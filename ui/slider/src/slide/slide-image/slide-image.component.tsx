import {FC, memo} from 'react'

import {default as BaseReactCompareImage} from 'react-compare-image'
import React from 'react'

import {Box} from '@ui/layout'
import {Handle} from "../../handle/index.js";
import {SlideImageProps} from "./slide-image.interfaces.js";

const ReactCompareImage = BaseReactCompareImage as unknown as FC<any>

export const SlideImage = memo(({swiperSlide, image}: SlideImageProps) => (
    <Box>
        <Box
            width={960}
            display={{mobile: 'none', tablet: 'none', desktop: 'flex'}}
            justifyContent='center'
            alignItems='center'
        >
            <ReactCompareImage
                handle={swiperSlide.isActive && <Handle/>}
                sliderLineWidth={swiperSlide.isActive ? 2 : 0}
                leftImage={image.firstPhoto.sourceUrl}
                rightImage={image.secondPhoto.sourceUrl}
                sliderPositionPercentage={0.49}
                rightImageCss={{objectFit: 'fill', objectPosition: 'center'}}
                leftImageCss={{objectFit: 'fill', objectPosition: 'center'}}
                sliderLineColor='linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 27.6%, #FFFFFF 71.87%, rgba(255, 255, 255, 0.2) 100%)'
            />
        </Box>
        <Box
            width={425}
            display={{mobile: 'flex', tablet: 'flex', desktop: 'none'}}
            justifyContent='center'
            alignItems='center'
        >
            <ReactCompareImage
                handle={swiperSlide.isActive && <Handle/>}
                leftImage={image.firstPhoto.sourceUrl}
                rightImage={image.secondPhoto.sourceUrl}
                sliderPositionPercentage={0.4}
                rightImageCss={{objectFit: 'fill', objectPosition: 'center'}}
                leftImageCss={{objectFit: 'fill', objectPosition: 'center'}}
                sliderLineColor='linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 27.6%, #FFFFFF 71.87%, rgba(255, 255, 255, 0.2) 100%)'
            />
        </Box>
    </Box>
))
