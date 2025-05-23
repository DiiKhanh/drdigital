import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('Đang hoạt động'),
  z.literal('Chưa kích hoạt'),
  z.literal('Đã khóa tài khoản'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const userRoleSchema = z.union([
  z.literal('Nhân viên'),
  z.literal('Giám sát'),
])

const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  status: userStatusSchema,
  role: userRoleSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  region: z.string()
})
export type User = z.infer<typeof userSchema>

export const userListSchema = z.array(userSchema)
