"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

type CurrentProject = "1" | "2" | "3"

export default function Projects({ currentProject }: { currentProject?: number }) {
	const router = useRouter()
	const pathname = usePathname()
	const params = useSearchParams()

	const initialProject = String(currentProject ?? params.get("project") ?? "1") as CurrentProject
	const [current, setCurrent] = useState<CurrentProject>(initialProject)

	useEffect(() => {
		if (!currentProject) {
			setCurrent(initialProject)
		}
	}, [currentProject, initialProject])

	const projects = {
		"1": <FirstProject />,
		"2": <SecondProject />,
		"3": <ThirdProject />,
	}
	const projectsCount = Object.keys(projects).length

	const changeCurrentProject = (current: CurrentProject) => {
		setCurrent(current)
		router.push(`${pathname}?project=${current}`, { scroll: false })
	}

	return (
		<section>
			<div className='flex mt-10 lg:mt-16 lg:ml-11'>
				{Array.from({ length: projectsCount }).map((_, index) => (
					<div key={index} className='pb-4 first:px-0 first:pr-2 px-2'>
						<button
							className={`project-btn py-[10px] px-[20px] text-sm opacity-0 font-semibold ${
								index + 1 == 2
									? "block-from-top translate-y-10"
									: index + 1 == 1
									? "block-from-left -translate-x-10"
									: "block-from-left translate-x-10"
							}`}
							data-active={String(index + 1) === current}
							onClick={() => changeCurrentProject(String(index + 1) as CurrentProject)}
						>
							Project {index + 1}
						</button>
					</div>
				))}
			</div>
			{projects[current]}
		</section>
	)
}

const FirstProject = React.memo(function FirstProject() {
	return (
		<ProjectWrapper>
			<ProjectMainCard title='Project 1' subTitle='Hello World^^' />
		</ProjectWrapper>
	)
})
const SecondProject = React.memo(function SecondProject() {
	return (
		<ProjectWrapper>
			<ProjectMainCard title='Project 2' subTitle='Hello World^^' />
		</ProjectWrapper>
	)
})
const ThirdProject = React.memo(function ThirdProject() {
	return (
		<ProjectWrapper>
			<ProjectMainCard title='Project 3' subTitle='Hello World^^' />
		</ProjectWrapper>
	)
})

const ProjectWrapper = ({ children }: { children: React.ReactNode }) => {
	return <section className='mt-12 lg:mt-24 pr-5 lg:pr-20 2xl:pr-60'>{children}</section>
}

const ProjectMainCard = ({
	imgUrl = "/covers/1.png",
	title = "project 1",
	subTitle = "subtitle",
}: {
	imgUrl?: string
	title?: string
	subTitle?: string
}) => {
	return (
		<article className='project-card show-block opacity-0 -translate-x-6 rounded-[40px] h-[300px] lg:h-[704px] p-2'>
			<div className='relative bg-[#01071A] rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center h-full p-2'>
				<div
					style={{
						backgroundImage: `url('${imgUrl}')`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className='absolute top-0 left-0 z-10 w-full h-full size-5'
				></div>
				<div className='relative z-20'>
					<h2 className='font-black text-4xl sm:text-5xl lg:text-[80px]'>{title}</h2>
					<p className='text-secondary-foreground text-lg sm:text-xl lg:text-2xl mt-2 sm:mt-4'>{subTitle}</p>
				</div>
			</div>
		</article>
	)
}
