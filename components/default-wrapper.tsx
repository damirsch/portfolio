import React from 'react'
import Sidebar from './sidebar';
import Footer from './footer';

export default function DefaultWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className='flex flex-col lg:flex-row xl:gap-24 overflow-x-hidden'>
				<div className='flex items-center w-full lg:w-auto lg:items-start pt-3 ml-4 lg:pt-6 lg:ml-5 xl:pt-16 xl:ml-20'>
					<Sidebar/>
				</div>
				<div className='flex flex-col lg:pt-3 xl:pt-10 ml-5 pr-5 lg:pr-0 w-full'>
					{children}
				</div>
			</div>
			<Footer/>
		</>
	)
}
