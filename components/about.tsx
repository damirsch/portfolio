function About({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section className='hide-block-to-top lg:px-14 mt-16 md:mt-20 lg:mt-10 pr-4 md:pr-9 lg:max-w-[800px]'>
			{children}
		</section>
	)
}

function AboutTitle({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='overflow-hidden'>
			<h1 className='block-from-left font-semibold text-4xl md:text-5xl text-primary-foreground -translate-x-full'>
				{children}
			</h1>
		</div>
	)
}

function AboutDescription({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='text-secondary-foreground text-base sm:text-lg md:text-xl mt-5 md:mt-10'>
			<p className='block-from-bottom opacity-0 translate-y-10'>{children}</p>
		</div>
	)
}

export { About, AboutTitle, AboutDescription }
