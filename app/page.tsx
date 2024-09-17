"use client";

import Image from "next/image";
import Logo from "@/public/LOGO SIMBARA.png";
import SIMBARA from "@/public/SIMBARA XIII.png";
import { AOSInit } from "./aos";
import { description_bg, hero_bg } from "@/public/backgrounds";
import Countdown from "react-countdown";
import Link from "next/link";

import DocumentationSection from "./_landing_slides/DocumentationSection";
import ContactSection from "./_landing_slides/ContactSection";
import QNASection from "./_landing_slides/QNASection";
import DescSection from "./_landing_slides/DescriptionSection";
import TimelineSection from "./_landing_slides/TimelineSection";
import BGIMG from "./_components/BgIMG";

function CountDownBox({
	value,
	label,
	additional,
}: {
	value: number;
	label: string;
	additional?: string;
}) {
	return (
		<div
			className={`text-center  border-bcyan border-l border-r w-24 md:w-32 drop-shadow-glow ${additional}`}>
			<h1 className="text-2xl md:text-4xl font-black text-white">{value}</h1>
			<p className="text-sm font-semibold text-flamingo">{label}</p>
		</div>
	);
}

function CountdownRenderer({
	days,
	hours,
	minutes,
	completed,
}: {
	days: number;
	hours: number;
	minutes: number;
	completed: boolean;
}) {
	return (
		<div className="flex bg-byellow p-2 rounded-sm z-10">
			<CountDownBox value={days} label="Hari" additional="border-l-2" />
			<CountDownBox value={hours} label="Jam" />
			<CountDownBox value={minutes} label="Menit" additional="border-r-2" />
		</div>
	);
}

function HeroSection() {
	return (
		<section className="w-full h-[85vh]  flex flex-col items-center justify-center relative text-center ">
			<BGIMG src={hero_bg} />
			<Image
				alt="Logo Simbara"
				src={Logo}
				className="w-auto h-2/5 md:h-1/2 aspect-square z-10 "
				data-aos="zoom-in"
				data-aos-duration="1000"
			/>
			{/* <svg
				className="w-[100vw] h-full absolute bottom-0 fill-base-100"
				preserveAspectRatio="none"
				viewBox="0 0 2 12">
				<polygon points="0,12 2,12 1,6" />
			</svg> */}
			<h1
				className="text-2xl md:text-4xl mt-8 text-flamingo font-bold z-10 drop-shadow-glowRed"
				data-aos="fade-in"
				data-aos-delay="500">
				Utopian Visionary Quest
			</h1>
		</section>
	);
}

function CountdownSection() {
	return (
		<section className="w-full h-[22vh] flex justify-center items-start relative">
			<h1 className="absolute text-white -top-12 text-lg font-bold">
				Saksikan dalam
			</h1>
			<Countdown date={new Date(2024, 10, 16)} renderer={CountdownRenderer} />
		</section>
	);
}

export default function Home() {
	return (
		<main className="overflow-hidden">
			<AOSInit />
			<HeroSection />
			<section className="relative">
				<BGIMG src={description_bg} />
				<CountdownSection />
				<DescSection />
				<DocumentationSection />
			</section>
			<TimelineSection />
			{/* <QNASection />  QNA is in contact */}
			<ContactSection />
		</main>
	);
}
