import Image from 'next/image'
import React, { ReactNode } from 'react'
type AuthLayoutProps = {
	children: ReactNode
	imageUrl: string
}
const imageOverlay = 'Your Entire Business Journey, Simplified'

export const AuthLayout = ({ children, imageUrl }: AuthLayoutProps) => (
	<div className='min-h-screen flex items-center justify-center bg-white'>
		<div className='w-full mx-auto my-2 bg-white flex flex-col lg:flex-row overflow-hidden'>
			{/* Left: Login/Signup */}
			<div className='w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20'>{children}</div>
			{/* Right: Image */}
			<div className='hidden lg:block lg:w-full lg:max-w-2xl relative h-[95vh] m-4 rounded-xl overflow-hidden'>
				<Image
					src={imageUrl}
					alt='Auth illustration'
					fill
					className='object-cover'
					priority
					style={{ borderRadius: '0.75rem' }} // rounded-xl
				/>
				{/* Overlay for text contrast */}
				<div className='absolute inset-0 z-0 rounded-xl' />
				<div className='absolute inset-0 flex items-center justify-center p-12 z-10'>
					<div className='text-center text-white'>
						<h2 className='text-4xl font-bold mb-4 max-w-lg'>{imageOverlay}</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
)
