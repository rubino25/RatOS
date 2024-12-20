// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import type { Config } from "@docusaurus/types";
import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
	title: "RatOS",
	tagline: "The easy way to run Klipper on your 3D printer",
	url: "https://os.ratrig.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.png",
	organizationName: "Rat-OS", // Usually your GitHub org/user name.
	projectName: "RatOS", // Usually your repo name.
	future: {
		experimental_faster: true,
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/Rat-OS/RatOS/edit/v2.x/site/",
					lastVersion: "current",
					versions: {
						current: {
							label: "2.1.x",
							path: "",
						},
						"2.0.x": {
							label: "2.0.x",
							path: "/2.0.x",
						},
						"1.2.x": {
							label: "1.2.x",
							path: "/1.2.x",
						},
					},
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/Rat-OS/RatOS/edit/v2.x/site/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				gtag: {
					trackingID: "G-NQB0MHKGLP",
					anonymizeIP: true,
				},
			} satisfies Options,
		],
	],
	plugins: [
		require.resolve("docusaurus-plugin-image-zoom"),
		async function tailwindPlugin(): Promise<any> {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions: any) {
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},
	],
	themeConfig: {
		image: "img/site-banner.png?bust=1",
		algolia: {
			// If Algolia did not provide you any appId, use 'BH4D9OD16A'
			appId: "C4EC7MR0DP",

			// Public API key: it is safe to commit it
			apiKey: "e8599497fd4d4d7f251685c6eb1333f0",

			indexName: "ratrig",

			//... other Algolia params
		},
		zoom: {
			selector: ".markdown img",
			background: { dark: "#000" },
			config: {
				margin: 60,
			},
		},
		colorMode: {
			defaultMode: "dark",
			disableSwitch: true,
		},
		navbar: {
			title: "",
			logo: {
				alt: "RatOS",
				src: "img/logos/Logo-white.svg",
			},
			items: [
				{
					type: "doc",
					docId: "introduction",
					position: "left",
					label: "Documentation",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{ to: "/changelog", label: "Changelog", position: "left" },
				{
					href: "https://github.com/sponsors/miklschmidt",
					label: "Donate/Sponsor",
					position: "left",
				},
				{
					href: "https://discord.gg/ratrig",
					label: "Discord",
					position: "left",
				},
				{
					href: "https://github.com/Rat-OS/RatOS",
					label: "GitHub",
					position: "left",
				},
				{
					type: "docsVersionDropdown",
					position: "right",
					dropdownItemsAfter: [
						{ to: "/changelog", label: "Changelog" },
					],
					dropdownActiveClassDisabled: true,
				},
			],
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
			additionalLanguages: ["bash", "python", "gcode", "properties"],
		},
	} satisfies ThemeConfig,
} satisfies Config;

module.exports = config;
