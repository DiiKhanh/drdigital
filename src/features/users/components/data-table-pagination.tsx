import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import type { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="text-sm">Hiển thị <p className="inline text-[#F26D21] text-sm font-semibold">{table.getState().pagination.pageSize}</p> nhân viên</div>
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          className="h-8 w-8 p-0 rounded-md"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>

        <div className="flex h-8 w-8 items-center justify-center rounded-md border text-sm">
          {table.getState().pagination.pageIndex + 1}
        </div>

        <Button
          variant="outline"
          className="h-8 w-8 p-0 rounded-md"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
