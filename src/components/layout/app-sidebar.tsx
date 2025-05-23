import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
// import { NavUser } from '@/components/layout/nav-user'
// import { TeamSwitcher } from '@/components/layout/team-switcher'
import { sidebarData } from './data/sidebar-data'
import logo from '/images/logo.svg'
import { IconLogout } from '@tabler/icons-react'
import { Button } from '../ui/button'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader className='mt-10'>
        <img src={logo} alt='logo' />
      </SidebarHeader>
      <SidebarContent className='mt-20'>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className='flex items-center gap-2 flex-col'>
          <img src={'/images/user.png'} alt='user' className='rounded-full' />
          <Button variant='ghost' size='icon' className='rounded-full'>
            <IconLogout />
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
