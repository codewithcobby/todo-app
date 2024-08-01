export type Users = {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  phone: string
  profile: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

export type Task = {
  id: number
  name: string
  description: string
  user_id: number
  user: Users
}
