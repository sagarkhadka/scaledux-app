'use client'

import React, { useState } from 'react'

import { Button } from '../ui/button'
import { Slider } from '@/components/ui/slider'
import FilterCard from './FilterCard'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'
import { categoryFilter, projectScopeFilter } from '@/lib/constant/api'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

const Filter = () => {
  const [value, setValue] = useState([0, 10000])

  return (
    <>
      <div className='border-border-secondary flex items-center justify-between gap-4 border-b pt-8 pb-5 pl-5'>
        <h5 className='text-lg font-semibold text-neutral-900'>Filters</h5>
        <div className='flex items-center gap-3'>
          <Button variant={'ghost'}>Clear all</Button>
          <Button>Apply</Button>
        </div>
      </div>

      <div className='flex flex-col gap-6 py-5 pl-5'>
        <FilterCard label='Price range'>
          <div className='mt-4 flex flex-col gap-5 px-1.5'>
            <Slider
              defaultValue={[0, 10000]}
              max={100000}
              step={1000}
              minStepsBetweenThumbs={10}
              onValueChange={(value) => setValue(value)}
            />
            <div className='flex items-center gap-6'>
              <p className='text-primary text-base font-medium'>₹{value[0]}</p>
              <p className='text-primary text-base font-medium'>₹{value[1]}</p>
            </div>
          </div>
        </FilterCard>
        <FilterCard label='Project scope'>
          <div className='flex flex-col gap-5'>
            <ul className='space-y-4'>
              {projectScopeFilter.map((item) => (
                <li key={item.type} value={item.type} className='flex gap-3'>
                  <Checkbox id={item.type} className='mt-1' />
                  <div className=''>
                    <Label htmlFor={item.type} className='font-medium'>
                      {item.type}
                    </Label>
                    <Label htmlFor={item.type} className='text-tertiary-600 font-normal'>
                      {item.duration}
                    </Label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FilterCard>
        <FilterCard label='Category'>
          <div className='flex flex-col gap-5'>
            <Input placeholder='Search' isSearch={true} />
            <ScrollArea className='h-[200px] w-[350px]'>
              <ul className='space-y-4'>
                {categoryFilter.map((item) => (
                  <li key={item.value} value={item.value} className='flex items-center gap-3'>
                    <Checkbox id={item.value} />
                    <Label htmlFor={item.value}>{item.label}</Label>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </FilterCard>
      </div>
    </>
  )
}

export default Filter
