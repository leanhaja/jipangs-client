export const parseQueryString = (
  url: string
): null | { [key: string]: string } => {
  const [, queryString] = url.split('?')
  if (!queryString) return null
  const keyValuePairStringsArray = queryString.split('&')
  const keyValuePairObject = keyValuePairStringsArray.reduce(
    (prevVal, currentVal) => {
      const [key, value] = currentVal.split('=')
      return { ...prevVal, [key]: value }
    },
    {}
  )
  return keyValuePairObject
}
