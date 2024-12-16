import { twMerge } from "tailwind-merge";
import { SparklesCore } from "./sparkles";
import { Logo } from "../frontpage/logo";

export type SparklesProps = {
	className?: string;
	logoClassName?: string;
	lineClassName?: string;
	sparklesClassName?: string;
	height?: number;
};

export function LogoSparkles(props: SparklesProps) {
	return (
		<div
			className={twMerge(
				"flex w-full flex-col items-center justify-start overflow-visible rounded-md",
				props.className,
			)}
		>
			<h1
				className={twMerge(
					"relative shrink-0 text-white",
					props.logoClassName,
				)}
			>
				<Logo />
			</h1>
			<div className="relative flex h-[150%] w-full flex-col items-center justify-center">
				{/* Gradients */}
				<div
					className={twMerge(
						"absolute inset-0 flex h-full w-full justify-center",
						props.lineClassName,
					)}
				>
					<div className="absolute inset-x-[12.5%] top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-lime-400 to-transparent blur-sm" />
					<div className="absolute inset-x-[12.5%] top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
					<div className="absolute inset-x-auto top-0 h-[5px] w-1/2 bg-gradient-to-r from-transparent via-brand-500 to-transparent blur-md" />
					<div className="absolute inset-x-auto top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
				</div>

				{/* Core component */}
				<div
					className={twMerge(
						"relative flex h-full w-full grow-0 justify-center",
						props.sparklesClassName,
					)}
				>
					<SparklesCore
						background="transparent"
						minSize={0.4}
						maxSize={1}
						particleDensity={1200}
						className="h-full w-[90%] shrink-0 [mask-image:radial-gradient(50%_110%_at_top,white_10%,transparent_90%)]"
						particleColor="#bdff99"
					/>
				</div>
			</div>
		</div>
	);
}
