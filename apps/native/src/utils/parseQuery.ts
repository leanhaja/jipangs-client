/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
export const parseQueryString = (
  url: string
): null | { [key: string]: string } => {
  const [_, queryString] = url.split('?')
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
