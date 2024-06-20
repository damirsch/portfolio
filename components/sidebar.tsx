"use client";

import React from "react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

type PathName = "" | "frontend-projects" | "backend-projects" | "all-projects";

export default function Sidebar() {
	const pathName = usePathname().slice(1) as PathName;

	return (
		<NavigationMenu className="items-start">
			<NavigationMenuList className="sidebar rounded-full scale-0 p-1">
				<NavigationMenuItem className="sidebar-wrapper flex lg:flex-col items-center gap-1 w-14 lg:h-14 overflow-hidden">
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={`flex flex-col items-center justify-center rounded-full [&>svg]:hover:size-10 hover:bg-secondary min-h-14 min-w-14 size-14 transition ${
								pathName === "" &&
								"size-14 bg-secondary [&>svg]:fill-svg-secondary [&>svg]:size-10"
							}`}
						>
							<svg
								className="transition-all fill-svg-primary size-8"
								viewBox="1.5 3 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M13.9977 23.3274V18.3274H17.9977V23.3274C17.9977 23.8774 18.4477 24.3274 18.9977 24.3274H21.9977C22.5477 24.3274 22.9977 23.8774 22.9977 23.3274V16.3274H24.6977C25.1577 16.3274 25.3777 15.7574 25.0277 15.4574L16.6677 7.92736C16.2877 7.58736 15.7077 7.58736 15.3277 7.92736L6.96766 15.4574C6.62766 15.7574 6.83766 16.3274 7.29766 16.3274H8.99766V23.3274C8.99766 23.8774 9.44766 24.3274 9.99766 24.3274H12.9977C13.5477 24.3274 13.9977 23.8774 13.9977 23.3274Z" />
							</svg>
							{pathName === "" && (
								<div className="size-1 bg-svg-secondary rounded-full"></div>
							)}
						</NavigationMenuLink>
					</Link>

					<Link href="/frontend-projects" legacyBehavior passHref>
						<NavigationMenuLink
							className={`flex flex-col items-center justify-center rounded-full min-h-14 min-w-14 [&>svg]:hover:size-10 hover:bg-secondary size-14 transition ${
								pathName === "frontend-projects" &&
								"size-14 bg-secondary [&>svg]:fill-svg-secondary [&>svg]:size-10"
							}`}
						>
							<svg
								className="transition-all fill-svg-primary size-8"
								viewBox="-2 -1 28 28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g strokeWidth="0" />
								<g strokeLinecap="round" strokeLinejoin="round" />
								<g>
									<path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />{" "}
								</g>
							</svg>
							{pathName === "frontend-projects" && (
								<div className="size-1 bg-svg-secondary rounded-full"></div>
							)}
						</NavigationMenuLink>
					</Link>
					<Link href="/backend-projects" legacyBehavior passHref>
						<NavigationMenuLink
							className={`flex flex-col items-center justify-center rounded-full min-h-14 min-w-14 [&>svg]:hover:size-10 hover:bg-secondary size-14 transition ${
								pathName === "backend-projects" &&
								"size-14 bg-secondary [&>svg]:fill-svg-secondary [&>svg]:size-10"
							}`}
						>
							<svg
								className="transition-all fill-svg-primary size-8"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="-150 -120 800 800"
							>
								<g>
									<path
										d="M455.925,324.816v-0.305c-43.168,34.714-115.123,56.648-200,56.648c-74.15,0-138.432-16.743-182.279-44.12
									c-6.223-3.94-12.07-8.112-17.48-12.524v0.178c-0.076-0.062-0.162-0.119-0.24-0.182v92.043c0,52.626,89.717,95.445,200,95.445
									s200-42.819,200-95.445v-56.488l0.15-35.363C456.026,324.742,455.974,324.777,455.925,324.816z"
									/>
									<path
										d="M255.925,340.831c110.283,0,200-42.82,200-95.444v-5.188V201.87v-16.675l0.15-10.437
									c-0.049,0.039-0.102,0.074-0.15,0.113v-0.301c-43.168,34.714-115.123,56.648-200,56.648c-74.117,0-138.375-16.73-182.221-44.087
									c-6.244-3.952-12.111-8.137-17.539-12.562v0.182c-0.076-0.062-0.162-0.119-0.24-0.182v27.3v38.329v5.188
									C55.925,298.012,145.642,340.831,255.925,340.831z"
									/>
									<path
										d="M255.925,190.89c110.283,0,200-42.819,200-95.444c0-1.507-0.328-2.974-0.472-4.463
									c-0.836-8.539-3.844-16.81-9.098-24.622C420.507,27.918,344.952,0,255.925,0C166.898,0,91.343,27.918,65.497,66.36
									c-5.256,7.812-8.264,16.083-9.098,24.622c-0.147,1.488-0.475,2.956-0.475,4.463C55.925,148.07,145.642,190.89,255.925,190.89z"
									/>
								</g>
							</svg>
							{pathName === "backend-projects" && (
								<div className="size-1 bg-svg-secondary rounded-full"></div>
							)}
						</NavigationMenuLink>
					</Link>
					<Link href="/all-projects" legacyBehavior passHref>
						<NavigationMenuLink
							className={`flex flex-col items-center justify-center rounded-full min-h-14 min-w-14 [&>svg]:hover:size-8 hover:bg-secondary size-14 transition ${
								pathName === "all-projects" &&
								"size-14 bg-secondary [&>svg]:fill-svg-secondary [&>svg]:size-8"
							}`}
						>
							<svg
								className="transition-all fill-svg-primary size-7"
								viewBox="-2.4 -2.4 28.80 28.80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"
							>
								<g
									strokeWidth="0"
									transform="translate(0,0), scale(1)"
								/>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
									stroke="#CCCCCC"
									strokeWidth="0.096"
								/>

								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z"
									/>{" "}
								</g>
							</svg>
							{pathName === "all-projects" && (
								<div className="size-1 bg-svg-secondary rounded-full"></div>
							)}
						</NavigationMenuLink>
					</Link>
					<div className="w-full min-w-1 h-8 lg:h-0 lg:px-3">
						<Separator className="lg:h-[1px] lg:w-full h-full w-[1px]" />
					</div>
					<Link href="https://t.me/damirsch" legacyBehavior passHref>
						<NavigationMenuLink className="flex flex-col items-center justify-center rounded-full min-h-14 min-w-14 [&>svg]:hover:size-10 hover:bg-secondary size-14 transition">
							<svg
								viewBox="-3 -3 38 38"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								className="transition-all fill-svg-primary size-8"
							>
								<g strokeWidth="0" />
								<g strokeLinecap="round" strokeLinejoin="round" />
								<g>
									<path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z" />{" "}
								</g>
							</svg>
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
