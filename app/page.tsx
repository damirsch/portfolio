'use client'

import Swiper from "@/components/swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)
export default function Home() {
	useEffect(() => {
		gsap.timeline({ delay: 0.2 }).add("start")
			.to(".sidebar-wrapper", { duration: 0.8, height: "auto", ease: "power2.out" }, "start+=0.5")
			.to(".sidebar", { duration: 0.4, scale: 1, ease: "power2.out" }, "start")
			.to(".text-from-left", { duration: 1, x: 0, ease: "power3.out", }, "start")
			.to(".text-from-bottom-with-opacity", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }, "start+=0.5")
			.to(".text-from-bottom", { duration: 0.6, y: 0, ease: "power3.out" }, "start+=0.7")
			.to(".show-block", { duration: 1.3, opacity: 1, ease: "power3.out" }, "start+=0.4")
			.to(".show-block", { duration: 1.6, x: 0, ease: "elastic.out" }, "start+=0.4")

		const hideBlocks = document.querySelectorAll(".hide-block-to-top");
		hideBlocks.forEach(block => {
			gsap.timeline({
				scrollTrigger: {
					trigger: block,
					start: "top top",
					end: "1000px top",
					toggleActions: "play reverse play reverse",
					scrub: true
				},
			}).to(block, { y: -100, ease: "power2.out" });
		});
	}, []);

	return (
		<main className="flex flex-col">
			<section className="hide-block-to-top px-14 pt-10 max-w-[800px]">
				<div className="overflow-hidden font-semibold text-5xl text-primary-foreground">
					<h1 className="text-from-left -translate-x-full">Your name</h1>
				</div>
				<div className="text-secondary-foreground text-xl mt-10">
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
			<section className="mt-40">
				<div className="overflow-hidden text-[40px] font-semibold pl-14 mb-10">
					<h2 className="text-from-bottom translate-y-full">Projects</h2>
				</div>
				<div className="show-block opacity-0 -translate-x-14">
					<Swiper/>
				</div>
			</section>
		</main>
	);
}
