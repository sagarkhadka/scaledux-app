import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ProjectCard from './ProjectCard'

const ServicesListing = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <h6 className='display-2xs'>Showing jobs most suited for you</h6>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue className='text-[#101828]' placeholder='Most relevant' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex-1'>
            <Input placeholder='Search projects' isSearch={true} />
          </div>
          <Button variant={'outline'}>Search</Button>
        </div>
      </div>
      <div className='mt-8 space-y-6'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  )
}

export default ServicesListing
