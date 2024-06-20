import Image from "next/image"
import Link from "next/link"

export interface ISliderCard {
	bgImg?: string
	icoImg?: string
	mainTitle?: string
	mainSubTitle?: string
	secondTitle?: string
	secondSubTitle?: string
	link?: string
}

export default function SliderCard({
	bgImg = "/covers/1.png",
	icoImg = "/Main.svg",
	mainTitle = "Design projects",
	mainSubTitle = "Replace with cover",
	secondTitle = "Design",
	secondSubTitle = "My design projects",
	link = "/frontend-projects",
}: ISliderCard) {
	return (
		<Link href={link}>
			<article className='slider-card cursor-pointer relative max-w-full mx-4 lg:max-w-[760px] p-2 rounded-[40px] overflow-hidden'>
				<div className='flex flex-col bg-[#01071A] overflow-hidden justify-center relative min-h-[240px] sm:min-h-[300px] lg:min-h-[376px] rounded-[32px]'>
					<div
						style={{
							backgroundImage: `url('${bgImg}')`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className='absolute top-0 left-0 z-20 w-full h-full size-5 rounded-[32px]'
					></div>
					<div className='flex flex-col items-center text-center relative z-30'>
						<h2 className='font-black text-4xl sm:text-5xl lg:text-[80px]'>{mainTitle}</h2>
						<p className='text-secondary-foreground text-lg sm:text-xl lg:text-2xl mt-2 sm:mt-4'>{mainSubTitle}</p>
					</div>
				</div>
				<div className='flex items-center gap-2 sm:gap-6 px-4 sm:px-10 py-3'>
					<div className='size-7 sm:size-8'>
						<Image src={icoImg} alt='icon' fill />
					</div>
					<div>
						<p className='text-base sm:text-lg'>{secondTitle}</p>
						<p className='text-sm sm:text-base text-secondary-foreground'>{secondSubTitle}</p>
					</div>
				</div>
			</article>
		</Link>
	)
}
