"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const DASH_LENGTH = 30;
const INITIAL_STROKE_DASHOFFSET = 8 * DASH_LENGTH;
const STROKE_DURATION = 1.5;

export const TextReveal = ({
	text,
	textClassName,
	className,
	delay = 0,
}: {
	text: { title: string; className?: string }[];
	delay?: number;
	textClassName?: string;
	className?: string;
}) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const [maskPosition, setMaskPosition] = useState({ x: "-20%", y: "50%" });
	const [duration, setDuration] = useState(1.5);
	const [strokeDashoffset, setStrokeDashoffset] = useState(
		INITIAL_STROKE_DASHOFFSET,
	);
	const [fillState, setFillState] = useState(0);

	// Function to trigger the animation
	const animateGradient = () => {
		setDuration(0);
		setMaskPosition({ x: "-20%", y: "50%" });
		setTimeout(() => {
			setDuration(1.5);
			setMaskPosition({ x: "120%", y: "50%" });
		}, 100);
	};
	const animateStroke = () => {
		setFillState(1);
		setStrokeDashoffset(DASH_LENGTH);
		setTimeout(
			() => {
				setFillState(2);
			},
			(STROKE_DURATION / 3) * 1000,
		);
	};

	// Optional: Automatically trigger the animation periodically
	useEffect(() => {
		const interval = setTimeout(
			() => {
				animateGradient();
			},
			delay + Math.random() * 2500 + 5000,
		);
		setTimeout(() => {
			animateStroke();
		}, delay + 1200);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={twMerge("flex select-none justify-center", className)}>
			<svg
				ref={svgRef}
				viewBox="0 0 300 100"
				xmlns="http://www.w3.org/2000/svg"
				className="h-[150%] select-none"
			>
				<defs>
					<filter
						id="text-glow"
						filterUnits="userSpaceOnUse"
						x="0%"
						y="-25%"
						width="100%"
						height="150%"
					>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="1"
							result="blur5"
						/>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="2"
							result="blur10"
						/>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="5"
							result="blur20"
						/>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur30"
						/>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="20"
							result="blur50"
						/>
						<feMerge result="blur-merged">
							<feMergeNode in="blur10" />
							<feMergeNode in="blur20" />
							<feMergeNode in="blur30" />
							<feMergeNode in="blur50" />
						</feMerge>
						<feColorMatrix
							result="text-blur"
							in="blur-merged"
							type="matrix"
							values="0 0 0 0 0
                             0 0 0 0 0
                             0 0 0 0 0
                             0 0 0 1 0"
						/>
						<feMerge>
							<feMergeNode in="text-blur" />
							{/* <feMergeNode in="blur5" /> */}
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
					<radialGradient
						id="textFillGradient"
						gradientUnits="userSpaceOnUse"
						cx="50%"
						cy="0%"
						r="50%"
					>
						<stop offset="0%" stopColor="white" />
						<stop
							offset="50%"
							stopColor="white"
							stopOpacity="0.9"
						/>
						<stop
							offset="100%"
							stopColor="white"
							stopOpacity="0.6"
						/>
					</radialGradient>
					<radialGradient
						id="textGradient"
						gradientUnits="userSpaceOnUse"
						cx="50%"
						cy="50%"
						r="25%"
					>
						<stop offset="0%" stopColor={"hsl(var(--brand-500))"} />
						<stop offset="50%" stopColor={"hsl(var(--lime-500))"} />
						<stop
							offset="100%"
							stopColor={"hsl(var(--brand-500))"}
						/>
					</radialGradient>

					<motion.linearGradient
						id="revealMask"
						gradientUnits="userSpaceOnUse"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%"
						width="10%"
						height="100%"
						x={maskPosition.x}
						y={maskPosition.y}
						animate={maskPosition}
						transition={{
							duration: duration ?? 1.5,
							ease: "easeInOut",
						}}
					>
						<stop offset="0%" stopColor="black" />
						<stop offset="10%" stopColor="white" />
						<stop offset="20%" stopColor="black" />
					</motion.linearGradient>
					<mask id="textMask">
						<rect
							x="0"
							y="0"
							width="100%"
							height="100%"
							fill="url(#revealMask)"
						/>
					</mask>
					<mask id="textFillMask">
						<rect
							x="0"
							y="0"
							width="100%"
							height="100%"
							fill="url(#textFillGradient)"
						/>
					</mask>
				</defs>
				<text
					x="50%"
					y="25%"
					width="100%"
					height="150%"
					textAnchor="middle"
					dominantBaseline="middle"
					mask="url(#textFillMask)"
					className={twMerge(
						"transition-all ease-in-out [transition-duration:2000ms]",
						textClassName,
						fillState === 0 && "fill-brand-500/0",
						fillState === 1 && "fill-brand-500/100",
						fillState === 2 && "fill-white",
					)}
				>
					{text.map((t, index) => (
						<tspan
							key={index}
							x="50%"
							dy={index > 0 ? "1.25em" : "0.5em"}
							className={t.className}
						>
							{t.title}
						</tspan>
					))}
				</text>
				<motion.text
					x="50%"
					y="25%"
					width="100%"
					height="150%"
					textAnchor="middle"
					dominantBaseline="middle"
					strokeWidth="1"
					className={twMerge(
						"fill-transparent [transition:stroke_0.5s_ease-in-out]",
						fillState === 0 && "stroke-lime-200/20",
						fillState === 1 && "stroke-brand-500/80",
						fillState === 2 && "stroke-lime-200/20",
						textClassName,
					)}
					strokeDasharray={`${DASH_LENGTH} ${DASH_LENGTH * 6}`}
					strokeDashoffset={INITIAL_STROKE_DASHOFFSET}
					initial={{
						strokeDasharray: `${DASH_LENGTH} ${DASH_LENGTH * 6}`,
						strokeDashoffset: INITIAL_STROKE_DASHOFFSET,
					}}
					animate={{
						strokeDasharray: `${DASH_LENGTH} ${DASH_LENGTH * 6}`,
						strokeDashoffset: strokeDashoffset,
					}}
					transition={{
						duration: STROKE_DURATION,
						ease: "easeIn",
					}}
				>
					{text.map((t, index) => (
						<tspan
							key={index}
							x="50%"
							dy={index > 0 ? "1.25em" : "0.5em"}
							className={t.className}
						>
							{t.title}
						</tspan>
					))}
				</motion.text>
				<text
					x="50%"
					y="25%"
					width="100%"
					height="150%"
					textAnchor="middle"
					dominantBaseline="middle"
					fill="url(#textGradient)"
					mask="url(#textMask)"
					className={twMerge(textClassName)}
				>
					{text.map((t, index) => (
						<tspan
							key={index}
							x="50%"
							dy={index > 0 ? "1.25em" : "0.5em"}
							className={t.className}
						>
							{t.title}
						</tspan>
					))}
				</text>
			</svg>
		</div>
	);
};
