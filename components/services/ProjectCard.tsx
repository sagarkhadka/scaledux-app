import React from 'react'
import Chip from '../ui/Chip'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'

const ProjectCard = () => {
  return (
    <>
      <div className='border-border-secondary rounded-xl border bg-white p-4 shadow-xs'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='space-y-2'>
              <span className='inline-block text-gray-600'>10 hours ago</span>
              <h6 className='display-2xs'>Project Title</h6>
              <div className='space-y-4'>
                <p className='text-secondary line-clamp-2'>
                  I am seeking a talented graphic designer who specializes in creating
                  ultra-minimalist and sleek logos, with a focus on soft, non-aggressive color
                  palettes. As the owner of a rapidly growing logo agency, it is crucial that each
                  logo is crafted efficiently, ideally within an hour. This approach not only
                  ensures a quick turnaround for our clients but also maintains the high standards
                  of quality and creativity we pride ourselves on. If you have a passion for
                  minimalist design and can deliver exceptional results under tight deadlines, I
                  would love to collaborate with you on this exciting journey.
                </p>
                <div className='flex items-center gap-2'>
                  <Chip label='Logo design' />
                  <Chip label='Graphic design' />
                  <Chip label='Brand guidelines' />
                </div>
              </div>
            </div>
            <Button variant={'outline'}>
              <Heart className='text-brand-purple-light size-5' />
            </Button>
          </div>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-24'>
              <div className='space-y-1'>
                <span className='text-tertiary inline-block text-xs'>Project category</span>
                <p className='text-secondary text-sm font-semibold'>Design</p>
              </div>
              <div className='space-y-1'>
                <span className='text-tertiary inline-block text-xs'>Project duration</span>
                <p className='text-secondary text-sm font-semibold'>1-3 months</p>
              </div>
            </div>
            <h5 className='display-xs'>₹20K - ₹50K</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
