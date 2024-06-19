'use client'

import { startAnimation } from "@/components/animations/animation-on-start";
import { IProjectSwiperCard } from "@/components/project-swiper-card";
import Swiper from "@/components/swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
	const cards: IProjectSwiperCard[] = [{}, {}, {}]

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1023px)");
		startAnimation(mediaQuery.matches);
		mediaQuery.addEventListener("change", (e) => startAnimation(e.matches));
		return () => {
			mediaQuery.removeEventListener("change", (e) => startAnimation(e.matches));
		};
	}, []);

	return (
		<main className="flex flex-col">
			<section className="hide-block-to-top lg:px-14 mt-16 md:mt-20 lg:mt-10 pr-4 md:pr-9 lg:max-w-[800px]">
				<div className="overflow-hidden">
					<h1 className="text-from-left font-semibold text-4xl md:text-5xl text-primary-foreground -translate-x-full">
						Damir Sokolovsky
					</h1>
				</div>
				<div className="text-secondary-foreground text-base sm:text-lg md:text-xl mt-5 md:mt-10">
					<p className="text-from-bottom-with-opacity opacity-0 translate-y-10">
						Welcome to the extraordinary world of{" "}
						<span className="text-primary-foreground">(Your name)</span>, a
						versatile and imaginative artist who skillfully navigates the realms
						of <span className="text-primary-foreground">product design</span>,{" "}
						<span className="text-primary-foreground">photography</span> and{" "}
						<span className="text-primary-foreground">digital art</span>. With a
						keen eye for detail and a relentless pursuit of innovation, (Your
						name) crafts captivating <span className="text-primary-foreground">visual narratives</span>, immersive <span className="text-primary-foreground">digital realms</span>,
						and functional yet <span className="text-primary-foreground">aesthetically pleasing products.</span>
					</p>
				</div>
			</section>
			<section className="mt-16 lg:mt-40">
				<div className="overflow-hidden text-[40px] font-semibold lg:pl-14 mb-5 md:mb-10">
					<h2 className="text-from-bottom translate-y-full">Projects</h2>
				</div>
				<div className="w-full show-block opacity-0 -translate-x-14 ">
					<Swiper cards={cards}/>
				</div>
			</section>
		</main>
	);
}
