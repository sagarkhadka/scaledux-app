import { Bounded } from '@/components/Bounded'
import Filter from '@/components/filters/Filter'
import CompleteProfile from '@/components/user/CompleteProfile'
import ServicesListing from '@/components/services/ServicesListing'

export default function Home() {
  return (
    <>
      <Bounded className='!py-0'>
        <div className='grid md:grid-cols-12'>
          <div className='space-y-8 sm:col-span-9 md:col-span-8 md:py-8 md:pr-5 xl:pr-10'>
            <CompleteProfile />
            <ServicesListing />
          </div>
          <div className='border-border-secondary border-l bg-white sm:col-span-3 md:col-span-4'>
            <div className='max-md:hidden'>
              <Filter />
            </div>
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
