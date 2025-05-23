import { Link, useLocation } from 'react-router-dom'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { NavItem, NavLink, type NavGroup } from './types'

export function NavGroup({ items }: NavGroup) {
  const location = useLocation()
  const href = location.pathname + location.search
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const key = `${item.title}-${item.url}`
          if (!item.items)
            return <SidebarMenuLink key={key} item={item} href={href} />
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

const SidebarMenuLink = ({ item, href }: { item: NavLink; href: string }) => {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
        className={`rounded-full h-[56px] w-[56px] flex items-center justify-center ${
          checkIsActive(href, item) ? 'text-[#F96619]' : ''
        }`}
      >
        <Link to={item.url} onClick={() => setOpenMobile(false)}>
          {item.icon && (
            <item.icon
              className={`w-6 h-6 ${
                checkIsActive(href, item) ? 'text-[#F96619]' : ''
              }`}
            />
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function checkIsActive(href: string, item: NavItem, mainNav = false) {
  // Ensure item.url is a string before using split
  const itemUrl = typeof (item as any).url === 'string' ? (item as any).url : ''
  return (
    href === itemUrl || // /endpint?search=param
    href.split('?')[0] === itemUrl || // endpoint
    !!item?.items?.filter((i) => typeof i.url === 'string' && i.url === href).length || // if child nav is active
    (mainNav &&
      href.split('/')[1] !== '' &&
      itemUrl &&
      href.split('/')[1] === itemUrl.split('/')[1])
  )
}
