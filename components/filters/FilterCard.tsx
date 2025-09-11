import React, { FC } from 'react'

import { Label } from '../ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const FilterCard: FC<{ label: string; isCollapsable?: boolean; children: React.ReactNode }> = ({
  label,
  isCollapsable = false,
  children
}) => {
  return (
    <>
      {/* <div className='border-border-secondary rounded-xl border bg-white p-5'>
        <Label>{label}</Label>
        <div className='mt-4 flex flex-col gap-5'>{children}</div>
      </div> */}
      <Accordion
        type='single'
        collapsible
        className='border-border-secondary rounded-xl border bg-white p-5'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-secondary py-0 text-sm leading-5'>
            {label}
          </AccordionTrigger>
          <AccordionContent className='mt-4 flex flex-col gap-5 pb-0'>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default FilterCard
