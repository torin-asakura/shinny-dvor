- [ ] move sentry privates to env

---

### миграция `_document` to `app-router`

- [x] интеграция `icons` in `site`; see (this)[https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function]
- [x] интеграция `gtag` in `site`
- [x] интеграция `helmet` in`site`

- [x] интеграция `icons` in `blog`; see (this)[https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function]
- [x] проверить ^
- [x] интеграция `gtag` in `blog`
- [x] интеграция `helmet` in`blog`

### миграция `_error` to `app-router`

- [x] перенести `_error` from `site`
- [x] перенести `_error` from `blog`

### layout fixes:

- [ ] горизонтальный скролл
- [ ] лезут карточки друг на друга на слайдере внизу страницы главной
- [x] blog

- [x] TODO's
- [x] yarn check

---

### packages

- [x] прогресс загрузки страницы
- [x] перенести рутовый лейаут во фрагмент
- [x] проверить, используются ли пакеты из `site ентрипоинта` где-нибдуь
- [x] проверь версии пакетов в `site fragments`
- [x] проверь версии пакетов в `site pages`

- [x] проверить, используются ли пакеты из `blog ентрипоинта` где-нибдуь
- [x] перенести `blog` на `app-router`
- [x] проверь версии пакетов в `blog fragments`
- [x] проверь версии пакетов в `blog pages`
- [x] индикация активной страницы (см. `useRouter`, для `app` используется другой метод)

- 100% usable, **dont touch**:
- [x] `@sentry/nextjs`

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
- [x] нужно вынести в отдельный фрагмент
- [x] `@atls/next-document-with-helmet`
- [x] `@atls/next-document-with-gtag`
- [ ] `recompose`
- [ ] `@apollo/react-ssr`

- [x] express - как он используется с `next.js`? - нет, убрал
