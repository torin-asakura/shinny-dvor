const normalizeString = (string: string): string =>
  string
    .replace(/(<p>|<\/p>)/g, '')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/<meta charset="utf-8">/g, '')
    .replace(/<br\/>/g, '')
    .replace(/<br \/>/g, '')

export { normalizeString }
