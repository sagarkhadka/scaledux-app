import { Bounded } from '@/components/Bounded'
import Filter from '@/components/filters/Filter'
import CompleteProfile from '@/components/user/CompleteProfile'
import ServicesListing from '@/components/services/ServicesListing'

export default function Home() {
  return (
    <>
      <Bounded className='!py-0'>
        <div className='grid grid-cols-12'>
          <div className='space-y-8 py-8 pr-10 md:col-span-8'>
            <CompleteProfile />
            <ServicesListing />
          </div>
          <div className='border-border-secondary border-l bg-white md:col-span-4'>
            <Filter />
          </div>
        </div>
        {/* <div className='flex gap-4'>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Signup</Link>
          <Link href='/onboarding'>Onboarding</Link>
        </div> */}
      </Bounded>
    </>
  )
}
