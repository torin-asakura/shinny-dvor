- [x] прогресс загрузки страницы
- [x] перенести рутовый лейаут во фрагмент
- [ ] проверить, используются ли пакеты из ентрипоинта где-нибдуь
- [ ] проверь версии пакетов во фрагментах
- [x] индикация активной страницы (см. `useRouter`, для `app` используется другой метод)
- [ ] горизонтальный скролл
- [ ] вычистить зависимости из ентрипонта. много ненужных
- [ ] лезут карточки друг на друга на слайдере внизу страницы главной
- [ ] blog

согласовать:

- 100% usable:
- [ ] `@sentry/nextjs`

- пакеты, которые нигде неспользуются, кроме импорта в `site/entrypoint`:
- [ ] `@apollo/react-ssr`
- [ ] `@atls/next-app-with-emotion`
- [ ] `@atls/next-app-with-helmet`
- [ ] `@atls/next-config-with-pnp-workspaces`
- [ ] `@atls/next-document-with-icons`
- [ ] `@atls/next-document-with-opengraph`
- [ ] `events`
- [ ] `next-compose-plugins`
- [ ] `react-helmet`
- [ ] `react-intl`

- нужны ли эти пакеты в `entrypoint`?:
- [ ] `@emotion/cache`
- [ ] `@emotion/css`
- [ ] `@emotion/react`
- [ ] `@emotion/styled`
- [ ] `styled-system`

- используется в `site/document` - что такое `document`
- вынести его в отдельный фрагмент
- [ ] `@atls/next-document-with-helmet`
- [ ] `@atls/next-document-with-gtag`
- [ ] `recompose`

update:

- [ ] express - как они используется с `next.js`?
