'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

import { useUiDateContext } from '../../Utils/UiContext'
import { useEffect } from 'react'

// interface DatePickerProps {
//   onSelectedDate: (selectedDate: Date) => void
// }

export function DatePicker() {
  const selectionDate = useUiDateContext()

  const [date, setDate] = React.useState<Date>()

  return (
    <div className="p-4 bg-slate-300">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={selectionDate} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  )
}
