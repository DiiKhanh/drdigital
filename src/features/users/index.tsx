import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { columns } from './components/users-columns'
import { UsersDialogs } from './components/users-dialogs'
import { UsersPrimaryButtons } from './components/users-primary-buttons'
import { UsersTable } from './components/users-table'
import UsersProvider from './context/users-context'
import { Title } from '@/components/title'
import { userListSchema } from './data/schema'
import { users } from './data/users'
import { Input } from '@/components/ui/input'
import { IconSearch } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

export default function Users() {
  // Parse user list
  const userList = userListSchema.parse(users)

  return (
    <UsersProvider>
      <Header fixed>
        <Title />
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <div className='relative'>
              <span className='absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground'>
                <IconSearch size={16} />
              </span>
              <Input
                placeholder='Tìm kiếm'
                className={cn(
                  'h-8 pl-8',
                  userList.length !== 0 ? 'w-[730px] lg:w-[730px]' : 'w-[230px] lg:w-[450px]'
                )}
              />
            </div>
          </div>
          <UsersPrimaryButtons userList={userList} />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          {
            userList.length !== 0 ? (
              <UsersTable data={userList} columns={columns} />
            ) : (
              <div className='flex h-[500px] items-center justify-center flex-col gap-4'>
                <img src='/images/folder.png' alt='empty-list' className='w-[140px] h-[140px]' />
                <h4 className='text-2xl font-normal text-[#B3B9C6] leading-7'>Danh sách trống</h4>
              </div>
            )
          }
        </div>
      </Main>
      <UsersDialogs />
    </UsersProvider>
  )
}
