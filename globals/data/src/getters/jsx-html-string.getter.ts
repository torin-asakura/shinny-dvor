export const getJsxHtmlString = async (component: JSX.Element): Promise<string> => {
  const ReactDOMServer = (await import('react-dom/server')).default
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component)
  return staticMarkup
}
