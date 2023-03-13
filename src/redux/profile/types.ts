export type Post = {
  id: number
  message: string
  likesCount: number
}

export type ProfileState = {
  posts: Post[]
  newPostText: string
}
