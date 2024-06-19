import React from 'react'
import Sidebar from './sidebar';
import Footer from './footer';

export default function DefaultWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col overflow-x-hidden'>
			<div className='flex flex-col lg:flex-row xl:gap-24 pt-3 ml-5 xl:pt-16 xl:ml-20'>
				<Sidebar/>
				{children}
			</div>
			<div className='w-full'>
				<Footer/>
			</div>
		</div>
	)
}
