import type { ExternalLink } from 'src/types'

export const isExternalLinkBridgeResponse = (
  parsedData: unknown
): parsedData is ExternalLink => {
  if (!(parsedData instanceof Object)) {
    return false
  }

  if (!('link' in parsedData) || !('title' in parsedData)) {
    return false
  }

  const { link, title } = parsedData

  return typeof link === 'string' && typeof title === 'string'
}
