import { injectGlobal } from '@emotion/css'

injectGlobal(`
.swiper {
  display: flex;
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: rgba(37, 44, 50, 0.40);
  transition: .3s;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 22px;
  height: 10px;
  border-radius: 6px;
  background: rgba(69, 121, 255, 1);
}

.swiper-pagination-bullet {
  margin-right: 6px !important;
  margin-left: 6px !important;
}

.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0px;
}
`)
