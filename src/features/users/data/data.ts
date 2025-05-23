import {
  IconUsersGroup,
  IconUserShield,
} from '@tabler/icons-react'
import { UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
  ['Đang hoạt động', 'bg-[#ECFDF3] text-[#12B76A] border-[#12B76A]/20'],
  ['Chưa kích hoạt', 'bg-[#FFF4C5] text-[#FDA712] border-[#FDA712]/20'],
  ['Đã khóa tài khoản', 'bg-[#D7DAE0] text-[#3D424F] border-[#3D424F]/20'],
])

export const userTypes = [
  {
    label: 'staff',
    value: 'Nhân viên',
    icon: IconUserShield,
  },
  {
    label: 'manager',
    value: 'Giám sát',
    icon: IconUsersGroup,
  },
] as const
