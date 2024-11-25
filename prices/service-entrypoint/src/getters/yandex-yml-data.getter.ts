export const getYandexYmlData = ({ categories, offers }) => {
  const yml = {
    _declaration: {
      _attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    },
    yml_catalog: {
      shop: {
        categories: {
          categories,
        },
        offers: {
          offers,
        },
      },
    },
  }

  return yml
}
