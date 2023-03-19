export type Post = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePage = {
  name: string
  photos: {
    small: string
    large: string
  }
  userId: number
  status: string
}

export type ProfileState = {
  posts: Post[]
  newPostText: string
  profile: ProfilePage
  isLoading: boolean
}
