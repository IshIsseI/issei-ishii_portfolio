"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

const socials = [
	{
		icon: <Github size={20} />,
		href: "https://github.com/IshIsseI",
		label: "Github",
		handle: "Issei Ishii",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:st20015is@gm.ibaraki-ct.ac.jp",
		label: "Email",
		handle: "Issei Ishii",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>
				<div className="max-w-2xl mx-auto lg:mx-0">
					<p className="mt-4 mb-5 text-zinc-200">Name.</p>
					<h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display2">石井一成</h2>
					<p className="mt-2 text-zinc-300">Ishii Issei</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="max-w-2xl mx-auto lg:mx-0">
					<p className="mt-4 mb-5 text-zinc-200">Affiliation.</p>
					<h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-3xl font-display2">茨城工業高等専門学校 情報系</h2>
					<p className="mt-2 text-zinc-300">NITIC Information</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="max-w-4xl mx-auto lg:mx-0">
					<p className="mt-4 mb-5 text-zinc-200">Skill.</p>
					<h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">C / C# / Unity / Typescript / Python / Illustrator / Photoshop / PremirePro / SOLIDWORKS / Fusion360</h2>
					<span className="i-catppuccin-c w-7 h-7 mr-2 mt-5"></span>/
					<span className="i-catppuccin-csharp w-7 h-7 mr-2"></span>/
					<span className="i-catppuccin-unity w-7 h-7 mr-2"></span>/
					<span className="i-catppuccin-typescript w-7 h-7 mr-2"></span>/
					<span className="i-catppuccin-python w-7 h-7 mr-2"></span>/
					<span className="i-catppuccin-adobe-ai w-7 h-7 mr-2"></span>/
					<span className="i-catppuccin-adobe-ps w-7 h-7 mr-2"></span>/
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<p className="mt-4 mb-5 text-zinc-200">GitHub / Email.</p>
				<div className="container flex items-center justify-center px-4 mx-auto">
					<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:gap-16">
						{socials.map((s) => (
							<Card>
								<Link
									href={s.href}
									target="_blank"
									className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
								>
									<span
										className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
										{s.icon}
									</span>{" "}
									<div className="z-10 flex flex-col items-center">
										<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
											{s.handle}
										</span>
										<span className="mt-4 text-sm text-center duration-1000 text-zinc-300 group-hover:text-zinc-200">
											{s.label}
										</span>
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>
				<div className="w-full h-px bg-zinc-800" />
			</div>
		</div>
	);
}
