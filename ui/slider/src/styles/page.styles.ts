import { injectGlobal } from '@emotion/css'

  injectGlobal(`
.splide__pagination__page__custom {
  width: 10px;
  height: 10px;
  margin: 6px;
  transition: .2s;
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
  `)
