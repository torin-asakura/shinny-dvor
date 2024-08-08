- packages:
- [x] прогресс загрузки страницы
- [x] перенести рутовый лейаут во фрагмент
- [x] проверить, используются ли пакеты из `site ентрипоинта` где-нибдуь
- [x] проверить, используются ли пакеты из `blog ентрипоинта` где-нибдуь
- [x] проверь версии пакетов в `site fragments`
- [x] проверь версии пакетов в `site pages`
- [x] перенести `blog` на `app-router`

- миграция `_document&_error` to `app-router`
- есть инфа в доках
- [ ] перенести `_document` from `site`
- [ ] перенести `_error` from `site`
- [ ] перенести `_document` from `blog`
- [ ] перенести `_error` from `blog`
- [x] проверь версии пакетов в `blog fragments`
- [x] проверь версии пакетов в `blog pages`
- [x] индикация активной страницы (см. `useRouter`, для `app` используется другой метод)

- layout fixes:
- [ ] горизонтальный скролл
- [ ] лезут карточки друг на друга на слайдере внизу страницы главной
- [ ] blog - не смотрел

- 100% usable, **dont touch**:
- [ ] `@sentry/nextjs`

- check package versions:
- [x] `@atls/next-document-with-gtag`
- [x] `@atls/next-document-with-helmet`
- [x] `recompose` - последнее обновление 6 лет назад

- пакеты, которые нигде неспользуются, кроме импорта в `site/entrypoint`:
- неиспользуемые пакеты удалил, используемые разнес по фрагментам
- [x] `@apollo/react-ssr` - пакет не обновлялся 4 года
- [x] `@atls/next-app-with-emotion`
- [x] `@atls/next-app-with-helmet`
- [x] `@atls/next-config-with-pnp-workspaces`
- [x] `@atls/next-document-with-icons`
- [x] `@atls/next-document-with-opengraph`
- [x] `events`
- [x] `next-compose-plugins`
- [x] `react-helmet`
- [x] `react-intl`

- нужны ли эти пакеты в `entrypoint`?:
- убрал их, посомтрим что будет
- эта зависимость должна висеть на уровне fragments/ui, поэтому в етрипонте она быть не должна
- [x] `@emotion/cache`
- [x] `@emotion/css`
- [x] `@emotion/react`
- [x] `@emotion/styled`
- [x] `styled-system`

- используется в `site/document` - что такое `document`
- эти пакеты не трогал,
- [ ] нужно вынести в отдельный фрагмент
- [ ] `@atls/next-document-with-helmet`
- [ ] `@atls/next-document-with-gtag`
- [ ] `recompose`
- [ ] `@apollo/react-ssr`

update:

- [ ] express - как они используется с `next.js`?
