"use client"

import React, {useEffect, useState} from "react"
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import ProjectSwiperCard, {IProjectSwiperCard} from "./project-swiper-card"

export default function Swiper({cards = [{}]}: {cards?: IProjectSwiperCard[]}) {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) return
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<Carousel setApi={setApi}>
			<CarouselContent className='max-w-[600px] lg:max-w-[806px]'>
				{cards.map((card, index) => {
					const {
						bgImg,
						icoImg,
						mainSubTitle,
						mainTitle,
						secondSubTitle,
						secondTitle,
					} = card
					return (
						<CarouselItem key={index}>
							<ProjectSwiperCard
								bgImg={bgImg}
								icoImg={icoImg}
								mainSubTitle={mainSubTitle}
								mainTitle={mainTitle}
								secondSubTitle={secondSubTitle}
								secondTitle={secondTitle}
							/>
						</CarouselItem>
					)
				})}
			</CarouselContent>
			<div className='flex justify-center mt-4'>
				{Array.from({length: count}).map((_, index) => (
					<span
						key={index}
						className={`inline-block w-3 h-3 md:hidden rounded-full mx-2 ${
							index + 1 === current ? "bg-muted" : "bg-secondary"
						}`}
						onClick={() => api && api.scrollTo(index)}
					/>
				))}
			</div>
		</Carousel>
	)
}
