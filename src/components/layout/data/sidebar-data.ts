import {
  IconBriefcase,
  IconUsersGroup
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'duykhanh',
    email: 'duykhanh.030803@gmail.com',
    avatar: '/avatars/duykhanh.jpg',
  },
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Users',
          url: '/',
          icon: IconUsersGroup,
        },
        {
          title: 'Jobs',
          url: '/jobs',
          icon: IconBriefcase,
        },
      ],
    },
  ],
}
