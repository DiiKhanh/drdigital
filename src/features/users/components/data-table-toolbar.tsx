import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { userTypes } from '../data/data'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <p className='text-sm font-semibold text-[#1A1A1A] leading-6'>Bộ lọc:</p>
        <div className='flex gap-x-2'>
          {(() => {
            const statusValue = String(table.getColumn('status')?.getFilterValue() ?? 'all');
            let statusLabel = 'Trạng thái';
            if (statusValue === 'Đang hoạt động') statusLabel = 'Đang hoạt động';
            else if (statusValue === 'Chưa kích hoạt') statusLabel = 'Chưa kích hoạt';
            else if (statusValue === 'Đã khóa tài khoản') statusLabel = 'Đã khóa tài khoản';

            return (
              <Select
                value={statusValue}
                onValueChange={value =>
                  table.getColumn('status')?.setFilterValue(value === 'all' ? undefined : value)
                }
              >
                <SelectTrigger className='w-36'>
                  <SelectValue>{statusLabel}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>Tất cả</SelectItem>
                  <SelectItem value='Đang hoạt động'>Đang hoạt động</SelectItem>
                  <SelectItem value='Chưa kích hoạt'>Chưa kích hoạt</SelectItem>
                  <SelectItem value='Đã khóa tài khoản'>Đã khóa tài khoản</SelectItem>
                </SelectContent>
              </Select>
            );
          })()}
          {(() => {
            const roleValue = String(table.getColumn('role')?.getFilterValue() ?? 'all');
            const roleLabel = userTypes.find(t => t.value === roleValue)?.label || 'Vùng';
            
            return (
              <Select
                value={roleValue}
                onValueChange={value =>
                  table.getColumn('role')?.setFilterValue(value === 'all' ? undefined : value)
                }
              >
                <SelectTrigger className='w-36'>
                  <SelectValue>{roleLabel}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Roles</SelectItem>
                  {userTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          })()}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
    </div>
  )
}