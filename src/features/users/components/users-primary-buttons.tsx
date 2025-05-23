import { IconPlus, IconDownload, IconUpload } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useUsers } from '../context/users-context'
import { User } from '../data/schema'

export function UsersPrimaryButtons({ userList }: { userList: User[] }) {
  const { setOpen } = useUsers()
  return (
    <div className='flex gap-2'>
      {
        userList.length !== 0 && 
        <>
          <Button
          variant='outline'
          className='space-x-1 text-[#F96619] border-[#F96619]'
          onClick={() => setOpen('invite')}
        >
          <span>Tải lên nhân viên</span> <IconUpload size={18} />
        </Button>
        <Button
          variant='outline'
          className='space-x-1 text-[#F96619] border-[#F96619]'
          onClick={() => setOpen('invite')}
        >
          <span>Xuất danh sách tài khoản</span> <IconDownload size={18} />
        </Button>
        </>
      }
      <Button className='space-x-1 bg-[#F96619]' onClick={() => setOpen('add')}>
        <span>Tạo mới</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}
