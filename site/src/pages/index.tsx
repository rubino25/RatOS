import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
	ArrowRightLeftIcon,
	BoltIcon,
	BugOffIcon,
	CalendarDaysIcon,
	ChartLineIcon,
	ChevronRightIcon,
	CloudUploadIcon,
	CogIcon,
	DownloadCloudIcon,
	DownloadIcon,
	FingerprintIcon,
	FunctionSquareIcon,
	HeartHandshakeIcon,
	LockIcon,
	RefreshCcwIcon,
	ServerIcon,
	UsersIcon,
	Wand,
	WandSparklesIcon,
	ZapIcon,
} from "lucide-react";
import { LogoSparkles } from "../components/ui/logo-sparkles";
import { Button } from "../components/ui/button";
import { twJoin } from "tailwind-merge";
import CountUp from "react-countup";
import { Hero } from "../components/frontpage/hero";

const primaryFeatures = [
	{
		name: "No more breaking klipper updates!",
		description:
			"RatOS pins klipper to known working versions and flashes your MCU's automatically, so you don't have to worry about breaking updates again.",
		href: "/docs/changelog",
		icon: BugOffIcon,
	},
	{
		name: "Community Support",
		description:
			"Join our active Discord community of makers and enthusiasts. Get help with your build, share your prints, and collaborate with others.",
		href: "http://discord.gg/ratrig",
		icon: UsersIcon,
	},
	{
		name: "Regular Updates",
		description:
			"RatOS is actively maintained and regularly updated with new capabilities and optimizations, ensuring your printer performs at its best.",
		href: "/docs/changelog",
		icon: CalendarDaysIcon,
	},
];
const secondaryFeatures = [
	{
		name: "Intuitive Web Interface",
		description:
			"to control, tweak and monitor your printer through either Mainsail or Fluidd.",
		icon: CloudUploadIcon,
	},
	{
		name: "Intelligent Setup Wizard",
		description:
			"guides you through wiring and control board flashing for a painless experience.",
		icon: WandSparklesIcon,
	},
	{
		name: "Advanced Built-in Macros",
		description:
			"takes your printing to the next level. RatOS is developed around best practices and high performance.",
		icon: FunctionSquareIcon,
	},
	{
		name: "Blazing Fast IDEX ToolShift",
		description:
			"saves hours of print time by using the RatOS ToolShift technology.",
		icon: ArrowRightLeftIcon,
	},
	{
		name: "Real-time Analysis Tools",
		description:
			"to debug mechanical issues and optimize performance in real-time.",
		icon: ChartLineIcon,
	},
	{
		name: "Klipper Powered",
		description:
			"firmware for high-performance 3D printing and advanced features.",
		icon: ZapIcon,
	},
];
const stats = [
	{ id: 1, name: "Downloads", value: 40000 },
	{ id: 2, name: "Discord Members", value: 12000 },
	{ id: 3, name: "Supported Printers", value: 12 },
	{ id: 4, name: "Supported Boards", value: 45 },
];
const footerNavigation = {
	social: [
		{
			name: "Discord",
			href: "http://discord.gg/ratrig",
			icon: (props) => (
				<svg fill="currentColor" {...props} viewBox="0 0 16 16">
					<path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
				</svg>
			),
		},
		{
			name: "GitHub",
			href: "https://github.com/Rat-OS/RatOS",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
};

export default function Index() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className="bg-zinc-950">
			<Layout>
				{/* Hero section */}
				<Hero />

				{/* Feature section */}
				<div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl sm:text-center">
						<h2 className="text-base/7 font-semibold text-brand-400">
							Streamlined Experience
						</h2>
						<p
							className={twJoin(
								"mt-2",
								"text-balance pb-2 text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-center",
								"from-zinc-100 to-zinc-100/30 bg-clip-text [background-image:radial-gradient(350px_400px_at_top,var(--tw-gradient-from)_10%,var(--tw-gradient-to)_90%)]",
							)}
						>
							Everything you need for your 3D printer
						</p>
						<p className="mt-4 text-balance text-lg/8 text-zinc-300">
							From initial setup to advanced tuning, RatOS
							provides all the tools you need to get the most out
							of your custom built 3D printer. With an intuitive
							configuration interface, managed auto generated
							klipper configuration, active community support, and
							regular feature updates, we make 3D printing
							accessible and powerful.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							{primaryFeatures.map((feature) => (
								<div
									key={feature.name}
									className="flex flex-col"
								>
									<dt className="text-base/7 font-semibold text-white">
										<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand-500/10 ring-2 ring-brand-500/40">
											<feature.icon
												aria-hidden="true"
												className="size-6 text-brand-500"
											/>
										</div>
										{feature.name}
									</dt>
									<dd className="mt-1 flex flex-auto flex-col text-base/7 text-zinc-300">
										<p className="flex-auto">
											{feature.description}
										</p>
										{/* <p className="mt-6">
											<Button
												href={feature.href}
												variant="outline"
												className="text-sm/6 font-semibold text-brand-400"
											>
												Learn more{" "}
												<span aria-hidden="true">
													→
												</span>
											</Button>
										</p> */}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				{/* Feature section */}
				<div className="mt-32 sm:mt-56">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl sm:text-center">
							<h2 className="text-base/7 font-semibold text-brand-400">
								Everything you need
							</h2>
							<p
								className={twJoin(
									"mt-2",
									"text-balance pb-2 text-4xl font-semibold tracking-tight text-transparent sm:text-center sm:text-5xl",
									"from-zinc-100 to-zinc-100/30 bg-clip-text [background-image:radial-gradient(350px_400px_at_top,var(--tw-gradient-from)_10%,var(--tw-gradient-to)_90%)]",
								)}
							>
								Powerful Features, Simple Setup
							</p>
							<p className="mt-4 text-balance text-lg/8 text-zinc-300">
								RatOS combines the power of Klipper with an
								easy-to-use configuration interface and a
								managed auto generated configuration. RatOS is
								designed to be simple to get started with while
								providing advanced features when you need them.
							</p>
						</div>
					</div>
					<div className="relative overflow-hidden pt-16">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<img
								alt="App screenshot"
								src="/img/ratos-configurator-hardware-selection.png"
								width={2432}
								height={1442}
								className="mb-[-5%] rounded-xl shadow-2xl ring-1 ring-white/10"
							/>
							<div aria-hidden="true" className="relative">
								<div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-zinc-950 pt-[7%]" />
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
						<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-zinc-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
							{secondaryFeatures.map((feature) => (
								<div
									key={feature.name}
									className="relative pl-9"
								>
									<dt className="inline font-semibold text-white">
										<feature.icon
											aria-hidden="true"
											className="absolute left-1 top-1 size-5 text-brand-500"
										/>
										{feature.name}
									</dt>{" "}
									<dd className="inline">
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				{/* Stats */}
				<div className="mx-auto mt-32 flex max-w-7xl flex-col items-center px-6 sm:mt-56 lg:px-8">
					<div className="mx-auto max-w-2xl sm:text-center lg:mx-0 lg:max-w-2xl">
						<h2 className="text-base/8 font-semibold text-brand-400">
							Trusted by thousands of makers all over the world
						</h2>
						<p
							className={twJoin(
								"mt-2",
								"text-balance pb-2 text-4xl font-semibold tracking-tight text-transparent sm:text-center sm:text-5xl",
								"from-zinc-100 to-zinc-100/30 bg-clip-text [background-image:radial-gradient(350px_400px_at_top,var(--tw-gradient-from)_10%,var(--tw-gradient-to)_90%)]",
							)}
						>
							Powering 3D printers worldwide
						</p>
						<p className="mt-4 text-balance text-lg/8 text-zinc-300">
							RatOS simplifies Klipper configuration with
							automatic setup, intelligent hardware detection, and
							advanced features like real-time analysis tools and
							visually assisted calibration. Join thousands of
							makers using RatOS to unlock their printer's full
							potential.
						</p>
					</div>
					<div className="mt-16 bg-white/10 sm:mt-20">
						<dl className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-x-px gap-y-px divide-y divide-white/10 text-white sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
							{stats.map((stat) => (
								<div
									key={stat.id}
									className="flex flex-col gap-y-3 bg-zinc-950 p-8 text-center"
								>
									<dt className="text-sm/6 text-zinc-400">
										{stat.name}
									</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight">
										<CountUp
											end={stat.value}
											enableScrollSpy={true}
											duration={2}
										/>
										+
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				{/* Logo cloud */}
				<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
					<h2 className="text-center text-lg/8 font-semibold text-white">
						Huge thanks to our company tier sponsors ❤️
					</h2>
					<div className="mx-auto mt-10 flex max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
						<a
							href="https://ratrig.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								alt="RatRig"
								src="/img/logos/ratrig-logo.png"
								width={158}
								height={48}
								className="col-span-2 max-h-12 w-full object-contain grayscale transition-all duration-300 hover:grayscale-0 lg:col-span-1"
							/>
						</a>
					</div>
					<div className="mt-10 flex flex-col items-center gap-2 text-center text-sm/6 text-zinc-400">
						<p>Do you want to show your support?</p>
						<Button
							href="https://github.com/sponsors/miklschmidt"
							size="lg"
						>
							<HeartHandshakeIcon className="size-6" />
							Become a RatOS sponsor
						</Button>
					</div>
				</div>
			</Layout>

			{/* Footer */}
			<footer className="mx-auto mt-32 max-w-7xl px-6 lg:mt-56 lg:px-8">
				<div className="border-t border-white/10 py-12 md:flex md:items-center md:justify-between">
					<div className="flex justify-center gap-x-6 md:order-2">
						{footerNavigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-zinc-400 hover:text-zinc-300"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon
									aria-hidden="true"
									className="size-6"
								/>
							</a>
						))}
					</div>
					<p className="mt-8 text-center text-sm/6 text-zinc-400 md:order-1 md:mt-0">
						&copy; 2024 Your Company, Inc. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
