import {About, AboutDescription, AboutTitle} from "@/components/about"
import {IProjectSwiperCard} from "@/components/project-swiper-card"
import Swiper from "@/components/swiper"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
const cards: IProjectSwiperCard[] = [
	{mainTitle: "Frontend projects"},
	{mainTitle: "Backend projects"},
	{mainTitle: "All projects"},
]

export default function Home() {
	return (
		<main className='flex flex-col'>
			<About>
				<AboutTitle>Damir Sokolovsky</AboutTitle>
				<AboutDescription>
					Welcome to the extraordinary world of{" "}
					<span className='text-primary-foreground'>(Your name)</span>, a
					versatile and imaginative artist who skillfully navigates the realms
					of <span className='text-primary-foreground'>product design</span>,{" "}
					<span className='text-primary-foreground'>photography</span> and{" "}
					<span className='text-primary-foreground'>digital art</span>. With a
					keen eye for detail and a relentless pursuit of innovation, (Your
					name) crafts captivating{" "}
					<span className='text-primary-foreground'>visual narratives</span>,
					immersive{" "}
					<span className='text-primary-foreground'>digital realms</span>, and
					functional yet{" "}
					<span className='text-primary-foreground'>
						aesthetically pleasing products.
					</span>
				</AboutDescription>
			</About>
			<section className='mt-16 lg:mt-40'>
				<div className='overflow-hidden text-[40px] font-semibold lg:pl-14 mb-5 md:mb-10'>
					<h2 className='text-from-bottom translate-y-full'>Projects</h2>
				</div>
				<div className='w-full show-block opacity-0 -translate-x-14 '>
					<Swiper cards={cards} />
				</div>
			</section>
		</main>
	)
}
