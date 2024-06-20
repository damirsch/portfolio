import { About, AboutDescription, AboutTitle } from "@/components/about"
import Projects from "@/components/projects"
import { Suspense } from "react"

export default function FrontendProjects() {
	return (
		<main>
			<About>
				<AboutTitle>Frontend projects</AboutTitle>
				<AboutDescription>
					Product design is a dynamic and multifaceted discipline that blends aesthetics, functionality, and innovation
					to <span className='text-primary-foreground'>create products</span> that enhance users lives and experiences.
					Through a meticulous process of research, ideation, prototyping, and iteration, product designers transform
					concepts into tangible solutions, addressing both practical needs and emotional desires.
					<br />
					<br />
					Striking a delicate balance between form and function, product design continually evolves to adapt to emerging
					technologies, societal trends, and user preferences, shaping the way we interact with the world around us and
					defining the landscape of our everyday lives.
				</AboutDescription>
			</About>
			<Suspense fallback={<div></div>}>
				<Projects />
			</Suspense>
		</main>
	)
}
