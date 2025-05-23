import { AppSidebar } from "@/components/layout/app-sidebar"
import { cn } from '@/lib/utils'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'
import { SearchProvider } from "@/context/search-context"

function HomePage() {
  return (
    <SearchProvider>
    <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <div
          id='content'
          className={cn(
            'ml-auto w-full max-w-full',
            'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
            'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
            'sm:transition-[width] sm:duration-200 sm:ease-linear',
            'flex h-svh flex-col',
            'group-data-[scroll-locked=1]/body:h-full',
            'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh'
          )}
        >
          <Outlet />
        </div>
      </SidebarProvider>
    </SearchProvider>
  )
}

export default HomePage