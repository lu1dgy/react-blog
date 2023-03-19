export type Post = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePage = {
  fullName: string
  photos: {
    small: string
    large: string
  }
  userId: number
  aboutMe: string
}

export type ProfileState = {
  posts: Post[]
  newPostText: string
  profile: ProfilePage
}
