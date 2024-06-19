import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectSwiperCard from "./project-swiper-card"

export default function Swiper() {
	return (
		<Carousel>
			<CarouselContent className="max-w-[806px]">
				<CarouselItem>
					<ProjectSwiperCard/>
				</CarouselItem>
				<CarouselItem>
					<ProjectSwiperCard/>
				</CarouselItem>
				<CarouselItem>
					<ProjectSwiperCard/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	)
}
