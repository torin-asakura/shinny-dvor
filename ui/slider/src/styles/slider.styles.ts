import { injectGlobal } from '@emotion/css'

injectGlobal(`
.splide__pagination__page__custom {
  width: 10px;
  height: 10px;
  margin: 6px;
  opacity: 1;
  transition: .2s;
  background: #252C320F;
}

.splide__pagination__page.is-active {
  background: #4579FF;
  opacity: 1;
  width: 22px;
  height: 10px;
  transform: scale(1);
  border-radius: 8px;
}

.splide__pagination__custom {
  top: 102%;
}

.splide__arrows_custom {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 100%;
  transform: translateY(85%);
  margin: 0;
  left: 0;
  right: 0;
}

.splide__arrow__custom {
  background: transparent;
  position: static;
  margin-left: 53px;
  margin-right: 53px;
  opacity: 1;
  z-index: 0;
}

.splide__arrow:hover {
  opacity: 1;
}

.splide__arrow svg { 
  fill: #AFB5BA;
}

@media screen and (min-width: 52em) {
  .splide__slide.is-next, .splide__slide.is--clone, .splide__slide.is-prev {
    transform: scaleY(0.9);
    transition: .3s;
  }
  
  .splide__slide.is-active {
    transition: .3s;
  }
}

@media screen and (max-width: 831px) {
  .splide__pagination__custom {
  top: 103%;
}
  `)
