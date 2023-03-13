export type User = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  status: string
  followed: boolean
}
