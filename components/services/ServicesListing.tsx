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
import { ArrowUpDown, ListFilter } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer'

const ServicesListing = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <h6 className='display-2xs'>Showing jobs most suited for you</h6>
          <Select>
            <SelectTrigger className='w-[180px] max-md:hidden'>
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
          <div className='flex items-center gap-3'>
            <Button variant={'outline'} className='max-md:hidden'>
              Search
            </Button>
            {/* <Button variant={'outline'} className='md:hidden'>
              <ArrowUpDown className='text-secondary-fg size-4' />
            </Button> */}
            <Drawer>
              <DrawerTrigger>Open</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                </DrawerHeader>
                <div>
                  <DrawerClose>
                    <Button variant='outline'>Cancel</Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
            <Button variant={'outline'} className='md:hidden'>
              <ListFilter className='text-secondary-fg size-4' />
            </Button>
          </div>
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
