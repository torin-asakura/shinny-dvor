import type { JSX } from 'react'

import { Global }   from '@emotion/react'
import { css }      from '@emotion/react'
import React        from 'react'

export const PostPageStyles = (): JSX.Element => (
  <Global
    styles={css`
      .post-page__content-container > div {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .wp-block-gallery-1 {
        justify-self: center;
        display: flex;
        gap: 32px;

        flex-wrap: nowrap;
        @media (max-width: 40em) {
          flex-wrap: wrap;
        }
      }
      .wp-block-gallery-1 {
        justify-content: center;
      }
      .wp-block-gallery-1 img {
        max-width: 100%;
      }
    `}
  />
)
