import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"infinite-scroll-right": "infinite-scroll-right 20s linear infinite",
				"infinite-scroll-left": "infinite-scroll-left 20s linear infinite",
			},
			keyframes: {
				"infinite-scroll-right": {
					"0%": {
						transform: "translate(0%)",
					},
					"100%": {
						transform: "translate(100%)",
					},
				},
				"infinite-scroll-left": {
					"0%": {
						transform: "translate(0%)",
					},
					"100%": {
						transform: "translate(-100%)",
					},
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				night: "#050505",
				flamingo: "#EF422E",
				byellow: "#F2B366",
				bcyan: "#B3DCCF",
			},
			dropShadow: {
				glowYellow: [
					"0 0px 5px rgba(242, 179, 102, 1)",
					"0 0px 15px rgba(242, 179, 102, 0.5)",
				],
				glowRed: [
					"0 0px 5px rgba(239, 66, 46, 1)",
					"0 0px 25px rgba(239, 66, 46, 0.25)",
				],
				glow: [
					"0 0px 5px rgba(179, 220, 207, 1)",
					"0 0px 15px rgba(179, 220, 207, 0.15)",
				],
				good: "0px 4px 4px rgba(0,0,0, 0.25)",
				"good-1": "0px 8px 5px rgba(0,0,0, 0.5)",
				nav: "0px 2px 2px rgba(0,0,0.2,0.8)",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#EF422E",
					secondary: "#F2B366",
					accent: "#B3DCCF",
					neutral: "#3d4451",
					"base-100": "#232323",
				},
			},
		],
	},
};
export default config;
