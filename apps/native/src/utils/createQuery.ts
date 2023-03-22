export type Query = [key: string, value: string]

export const createQuery = (queries: Query[]) => {
  if (queries.length === 0) {
    return ''
  }

  return `${queries.map(([key, value]) => `${key}=${value}`).join('&')}`
}
