import { ChevronRightIcon, DownloadCloudIcon } from "lucide-react";
import { twJoin, twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { LogoSparkles } from "../ui/logo-sparkles";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { TextReveal } from "../ui/text-effect";

export const Hero = () => {
	const [isZoomed, setIsZoomed] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const zoom = useCallback(() => {
		setIsZoomed((state) => !state);
	}, []);
	const inView = useInView(ref, { once: true });
	const [animatedIn, setAnimatedIn] = useState(false);
	useEffect(() => {
		const handleScroll = (e: Event) => {
			if (
				ref.current &&
				ref.current.getBoundingClientRect().top +
					window.innerHeight / 3 <
					0
			) {
				setIsZoomed(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		setTimeout(() => {
			setAnimatedIn(inView);
		}, 5000);
	}, [inView]);
	return (
		<div ref={ref} className="relative isolate overflow-hidden">
			<svg
				aria-hidden="true"
				className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			>
				<defs>
					<pattern
						x="50%"
						y={-1}
						id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
						width={200}
						height={200}
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg
					x="50%"
					y={-1}
					className="overflow-visible fill-zinc-800/20"
				>
					<path
						d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
						strokeWidth={0}
					/>
				</svg>
				<rect
					fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
					width="100%"
					height="100%"
					strokeWidth={0}
				/>
			</svg>
			<div
				aria-hidden="true"
				className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
			>
				<div
					style={{
						clipPath:
							"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
					}}
					className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-brand-400 to-brand-700 opacity-20"
				/>
			</div>
			<div className="mx-auto h-[calc(100vh_-_8rem)] min-h-fit max-w-7xl px-6 pt-12 lg:flex lg:px-8 lg:pt-0">
				<div
					className={twJoin(
						"relative mx-auto flex max-w-2xl shrink-0 flex-col justify-center transition-all duration-700 ease-in-out lg:mx-0 lg:pt-8",
						isZoomed && "scale-75",
					)}
				>
					<div
						className={twJoin(
							"z-20 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out",
							animatedIn
								? "translate-y-0 lg:translate-x-0 lg:translate-y-0"
								: "translate-y-[calc(50vh_-_100%)] lg:translate-x-1/2 lg:translate-y-0",
							animatedIn && inView
								? "ease-in-out [transition-delay:0s]"
								: inView
									? "ease-in-out [transition-delay:0.5s]"
									: "ease-out [transition-delay:0s]",
						)}
					>
						<LogoSparkles
							logoClassName={twJoin(
								"transition-all duration-1000",
								inView
									? "scale-x-100 opacity-100"
									: "scale-x-110 opacity-0",
								inView && animatedIn && "lg:h-24 md:h-16 h-12",
								inView && !animatedIn && "lg:h-48 md:h-24 h-16",
								animatedIn && inView
									? "ease-in-out [transition-delay:0s]"
									: inView
										? "ease-in-out [transition-delay:0.5s]"
										: "ease-out [transition-delay:0s]",
							)}
							lineClassName={twJoin(
								"transition-all duration-1000",
								animatedIn && inView
									? "ease-in-out [transition-delay:0s] scale-x-100"
									: inView
										? "ease-in-out [transition-delay:0.25s] scale-x-150"
										: "ease-out [transition-delay:0s] scale-x-0",
							)}
							sparklesClassName={twJoin(
								"transition-all duration-1000",
								inView ? "opacity-100" : "opacity-0",
								!animatedIn && "w-[150%]",
								animatedIn && inView
									? "ease-in-out [transition-delay:0s]"
									: inView
										? "ease-in-out [transition-delay:0.3s]"
										: "ease-out [transition-delay:0s]",
							)}
							className={twJoin(
								"transition-all duration-1000",
								inView && animatedIn && "h-12 md:h-16 lg:h-24",
								inView && !animatedIn && "h-16 md:h-24 lg:h-48",
								animatedIn && inView
									? "ease-in-out [transition-delay:0s]"
									: inView
										? "ease-in-out [transition-delay:0.5s]"
										: "ease-out [transition-delay:0s]",
							)}
						/>
						<h1 className="sr-only">
							The adaptive operating system for custom built 3D
							printers.
						</h1>
						{inView && (
							<TextReveal
								delay={1000}
								text={[
									{
										title: "Adaptive Operating System",
										className:
											"text-lg font-medium tracking-tight lg:text-2xl",
									},
									{
										title: "For Custom Built Hardware",
										className:
											"text-sm font-normal opacity-50 tracking-tight lg:text-xl",
									},
								]}
								className={twMerge(
									"relative h-32 transform-gpu transition-all duration-1000",
									"w-full min-w-[500px] max-w-lg",
									inView
										? "tracking-normal opacity-100"
										: "tracking-wide opacity-0",
									animatedIn
										? "-translate-y-4 scale-100"
										: "translate-y-0 scale-150",

									animatedIn && inView
										? "ease-in-out [transition-delay:0s]"
										: inView
											? "ease-in-out [transition-delay:2s]"
											: "ease-out [transition-delay:0s]",
								)}
							/>
						)}
					</div>
					<div
						className={twMerge(
							"transition-all duration-1000 ease-in-out",
							inView && animatedIn
								? "translate-y-0 opacity-100"
								: "translate-y-12 opacity-0",
						)}
					>
						{/* <div className="mt-12">
							<a
								href="/blog"
								className="inline-flex space-x-6 hover:no-underline"
							>
								<span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm/6 font-semibold text-brand-400 ring-1 ring-inset ring-brand-500/20">
									What's new
								</span>
								<span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-zinc-300">
									<span>Just shipped v2.1</span>
									<ChevronRightIcon
										aria-hidden="true"
										className="size-5 text-zinc-500"
									/>
								</span>
							</a>
						</div> */}
						<p className="mt-8 text-balance text-lg font-medium text-zinc-400 sm:text-xl/8">
							RatOS is a powerful, open-source operating system
							designed for 3D printers. Built around Klipper, it
							provides an intuitive point and click configuration
							interface and advanced modular features for both
							beginners and experts.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Button href="https://github.com/Rat-OS/RatOS/releases/latest">
								<DownloadCloudIcon className="size-5" />{" "}
								Download
							</Button>
							<Button variant="outline" href="/docs/introduction">
								Learn more <span aria-hidden="true">→</span>
							</Button>
						</div>
					</div>
					<div
						onClick={zoom}
						className={twJoin(
							"absolute inset-0 z-30 transition-all duration-700 ease-in-out",
							isZoomed && animatedIn
								? "cursor-zoom-out bg-zinc-950/80 backdrop-blur-sm"
								: "pointer-events-none backdrop-blur-none",
						)}
					/>
				</div>
				<div
					onClick={isZoomed ? zoom : undefined}
					className={twJoin(
						"pointer-events-none absolute inset-0 z-10 transition-all duration-700 ease-in-out",
						isZoomed || !animatedIn
							? "cursor-zoom-out bg-zinc-950/60 backdrop-blur-sm lg:pointer-events-auto"
							: "backdrop-blur-none",
					)}
				/>
				<div
					className={twJoin(
						"mx-auto mt-16 flex max-w-2xl items-center transition-all duration-1000 ease-in-out sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32",
						inView && animatedIn
							? "z-20 translate-x-0 scale-100 opacity-100 blur-0"
							: "translate-x-1/4 opacity-50 blur-xl lg:-translate-x-1/2 lg:scale-75",
					)}
				>
					<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
						<img
							alt="App screenshot"
							src="/img/ratos-configurator-printer-selection.png"
							width={2208}
							height={1185}
							onClick={animatedIn ? zoom : undefined}
							className={twJoin(
								"peer pointer-events-none z-20 w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 transition-all duration-700 ease-in-out lg:pointer-events-auto",
								animatedIn && inView
									? "opacity-100"
									: "opacity-0",
								isZoomed
									? "-translate-x-2/3 scale-125 cursor-zoom-out delay-100 [box-shadow:var(--tw-ring-offset-shadow),_var(--tw-ring-shadow),_0_50px_100px_-10px_rgb(0_0_0_/_0.5)]"
									: "cursor-zoom-in delay-0",
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
