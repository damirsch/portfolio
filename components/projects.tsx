"use client"

import {usePathname, useRouter, useSearchParams} from "next/navigation"
import React, {useState} from "react"

type CurrentProject = "1" | "2" | "3"

export default function Projects({currentProject}: {currentProject?: number}) {
	const router = useRouter()
	const pathname = usePathname()
	const params = useSearchParams()
	const [current, setCurrent] = useState<CurrentProject>(
		String(
			!currentProject ? params.get("project") ?? "1" : currentProject
		) as CurrentProject
	)

	const projects = {
		"1": <FirstProject />,
		"2": <SecondProject />,
		"3": <div>Third</div>,
	}
	const projectsCount = Object.keys(projects).length

	const changeCurrentProject = (current: CurrentProject) => {
		setCurrent(current)
		router.push(`${pathname}?project=${current}`)
	}

	return (
		<section>
			<div className='flex'>
				{Array.from({length: projectsCount}).map((_, index) => (
					<button
						className='project-btn'
						data-active={String(index + 1) === current}
						key={index}
						onClick={() =>
							changeCurrentProject(String(index + 1) as CurrentProject)
						}
					>
						Project {index + 1}
					</button>
				))}
			</div>
			{projects[current]}
		</section>
	)
}

function FirstProject() {
	return <>First</>
}

function SecondProject() {
	return <>Second</>
}
