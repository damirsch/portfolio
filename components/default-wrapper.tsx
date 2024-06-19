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
			<div className='flex gap-24 pt-16 ml-20'>
				<Sidebar/>
				{children}
			</div>
			<div className='w-full'>
				<Footer/>
			</div>
		</div>
	)
}
