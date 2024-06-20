"use client"

import gsap from "gsap"
import {usePathname} from "next/navigation"
import {useEffect} from "react"

export const StartAnimation = () => {
	const pathName = usePathname()

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1023px)")
		const startAnimation = (matches: boolean) => {
			const tl = gsap.timeline({delay: 0.2})
			tl.add("start")
				.to(
					".sidebar-wrapper",
					{
						duration: 0.8,
						[matches ? "width" : "height"]: "auto",
						ease: "power2.out",
					},
					"start+=0.5"
				)
				.to(".sidebar", {duration: 0.4, scale: 1, ease: "power2.out"}, "start")
				.to(".text-from-left", {duration: 1, x: 0, ease: "power3.out"}, "start")
				.to(
					".text-from-bottom-with-opacity",
					{duration: 0.8, opacity: 1, y: 0, ease: "power2.out"},
					"start+=0.5"
				)
				.to(
					".text-from-bottom",
					{duration: 0.6, y: 0, ease: "power3.out"},
					"start+=0.7"
				)
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".show-block",
						start: "40px bottom",
						end: "bottom bottom",
						toggleActions: "play none none none",
					},
				})
				.to(
					".show-block",
					{duration: 1.3, opacity: 1, ease: "power3.out"},
					"start+=0.4"
				)
				.to(
					".show-block",
					{duration: 1.6, x: 0, ease: "elastic.out"},
					"start+=0.4"
				)
		}
		startAnimation(mediaQuery.matches)
		mediaQuery.addEventListener("change", (e) => startAnimation(e.matches))
		return () => {
			mediaQuery.removeEventListener("change", (e) => startAnimation(e.matches))
		}
	}, [pathName])
	return <></>
}
