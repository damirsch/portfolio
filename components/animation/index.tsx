"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)
export const StartAnimation = () => {
	const pathName = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1023px)")
		const startAnimation = (matches: boolean) => {
			const tl = gsap.timeline({ delay: 0.1 })

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
				.to(".sidebar", { duration: 0.4, scale: 1, ease: "power2.out" }, "start")

			const scrollTriggerDefaults = {
				start: "40px bottom",
				end: "bottom bottom",
				toggleActions: "play none none none",
			}

			gsap.utils.toArray(".block-from-left").forEach((element) => {
				tl.add(() => {
					// @ts-ignore
					gsap.to(element, {
						duration: 1,
						x: 0,
						opacity: 1,
						ease: "power3.out",
						scrollTrigger: {
							...scrollTriggerDefaults,
							trigger: element,
						},
					})
				}, "start+=0.4")
			})

			gsap.utils.toArray(".block-from-bottom").forEach((element) => {
				tl.add(() => {
					// @ts-ignore
					gsap.to(element, {
						duration: 0.6,
						y: 0,
						opacity: 1,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							...scrollTriggerDefaults,
							trigger: element,
						},
					})
				}, "start+=0.7")
			})

			gsap.utils.toArray(".block-from-top").forEach((element) => {
				tl.add(() => {
					// @ts-ignore
					gsap.to(element, {
						duration: 0.6,
						y: 0,
						opacity: 1,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							...scrollTriggerDefaults,
							trigger: element,
						},
					})
				}, "start+=0.4")
			})

			tl.add(
				() => {
					gsap.to(".show-block", {
						duration: 1,
						opacity: 1,
						ease: "power3.out",
						scrollTrigger: {
							...scrollTriggerDefaults,
							trigger: ".show-block",
						},
					})

					gsap.to(".show-block", {
						duration: 1.4,
						x: 0,
						ease: "elastic.out",
						scrollTrigger: {
							...scrollTriggerDefaults,
							trigger: ".show-block",
						},
					})
				},
				!searchParams.get("project") ? "start+=0.9" : "start"
			)
		}

		startAnimation(mediaQuery.matches)
		mediaQuery.addEventListener("change", (e) => startAnimation(e.matches))
		return () => {
			mediaQuery.removeEventListener("change", (e) => startAnimation(e.matches))
		}
	}, [pathName, searchParams])
	return <></>
}
