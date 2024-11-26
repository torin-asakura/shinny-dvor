export const getYandexYmlData = ({ category, offer }) => {
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
          category,
        },
        offers: {
          offer,
        },
      },
    },
  }

  return yml
}
