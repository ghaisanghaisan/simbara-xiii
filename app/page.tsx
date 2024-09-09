"use client";

import Image from "next/image";
import Logo from "@/public/LOGO SIMBARA.png";
import SIMBARA from "@/public/SIMBARA XIII.png";
import { AOSInit } from "./aos";
import {
	first_0,
	first_1,
	first_2,
	first_3,
	first_4,
	second_0,
	second_1,
	second_2,
	second_3,
	second_4,
} from "@/public/dokum";
import Countdown from "react-countdown";
import Link from "next/link";

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
function BGPATTERN() {
	return (
		<svg
			className="absolute z-[-1] top-0 left-0"
			id="patternId"
			width="100%"
			height="100%"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern
					id="a"
					patternUnits="userSpaceOnUse"
					width="29"
					height="50.115"
					patternTransform="scale(2) rotate(0)">
					<rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						fill="hsla(0, 0%, 14%, 1)"
					/>
					<path
						d="M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z"
						stroke-width="1"
						stroke="hsla(0, 0%, 0%, 0.1)"
						fill="none"
					/>
				</pattern>
			</defs>
			<rect
				width="800%"
				height="800%"
				transform="translate(0,0)"
				fill="url(#a)"
			/>
		</svg>
	);
}

function FirstCarouselImages() {
	const imgclass = "h-[200px] lg:h-[300px] w-auto aspect-video bg-gray-300";
	return (
		<>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={first_0}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={first_1}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={first_2}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={first_3}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={first_4}
				alt="Dokumentasi SIMBARA XII"
			/>
		</>
	);
}

function SecondCarouselImages() {
	const imgclass = "h-[200px] lg:h-[300px] w-auto aspect-video bg-gray-300";
	return (
		<>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={second_0}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={second_1}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={second_2}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={second_3}
				alt="Dokumentasi SIMBARA XII"
			/>
			<Image
				className={imgclass}
				width={533}
				height={300}
				src={second_4}
				alt="Dokumentasi SIMBARA XII"
			/>
		</>
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
		<section className="w-full h-[85vh] bg-white flex flex-col items-center justify-center relative text-center ">
			<BGPATTERN />

			<Image
				alt="Logo Simbara"
				src={Logo}
				className="w-auto h-2/5 md:h-1/2 aspect-square z-10"
			/>
			<svg
				className="w-[100vw] h-full absolute bottom-0 fill-base-100"
				preserveAspectRatio="none"
				viewBox="0 0 2 12">
				<polygon points="0,12 2,12 1,6" />
			</svg>
			<h1 className="text-2xl md:text-4xl mt-8 text-bcyan font-bold z-10 drop-shadow-glow">
				Utopian Visionary Quest
			</h1>
		</section>
	);
}

function CountdownSection() {
	return (
		<section className="w-full h-[22vh] flex justify-center items-start relative">
			<BGPATTERN />
			<h1 className="absolute -top-12 text-lg font-bold">Saksikan dalam</h1>
			<Countdown date={new Date(2024, 10, 16)} renderer={CountdownRenderer} />
		</section>
	);
}

function DescSection() {
	return (
		<section className="w-full py-12 text-center px-8 xl:px-96 text-white flex flex-col gap-y-24 relative">
			<BGPATTERN />
			<h1 className="text-3xl md:text-4xl font-bold" data-aos="fade-up">
				Apa itu SIMBARA?
			</h1>
			<p className="text-lg md:text-xl" data-aos="fade-in">
				SIMBARA adalah event tahunan Paskibra SMAN 55 Jakarta yang diadakan
				dalam rangka memperingati ulang tahun{" "}
				<strong className="text-bcyan">Paskibra Of Fifty Five (PROFIT) </strong>
				serta berisi ajang perlombaan keterampilan baris-berbaris dimana acara
				ini mengundang anggota pasukan Paskibra dari sekolah-sekolah se-DKI
				Jakarta dan se-Jawa Barat.
			</p>
			<Link
				href="/registrasi"
				data-aos="zoom-in"
				data-aos-duration="200"
				data-aos-offset="150">
				<div
					className="bg-flamingo text-xl md:text-2xl  font-black py-2 px-4 rounded-sm hover:drop-shadow-glowRed
				transition-all ease-in-out duration-500">
					Daftar Sekarang!
				</div>
			</Link>
		</section>
	);
}

function DocumentationSection() {
	return (
		<section className="space-y-4 py-12 relative overflow-clip">
			<BGPATTERN />
			<div
				className="flex w-full justify-end gap-x-2 relative overflow-hidden bg-byellow drop-shadow-glowYellow"
				data-aos="fade-right">
				<div className="flex gap-x-2 shrink-0 animate-infinite-scroll-right">
					<FirstCarouselImages />
				</div>
				<div className="flex gap-x-2 shrink-0 animate-infinite-scroll-right">
					<FirstCarouselImages />
				</div>
			</div>
			<div
				className="flex w-full justify-start gap-x-2 relative overflow-hidden bg-byellow drop-shadow-glowYellow"
				data-aos="fade-left">
				<div className="flex gap-x-2 shrink-0 animate-infinite-scroll-left">
					<SecondCarouselImages />
				</div>
				<div className="flex gap-x-2 shrink-0 animate-infinite-scroll-left">
					<SecondCarouselImages />
				</div>
			</div>
		</section>
	);
}

function TimelineSection() {
	const timelineLeft =
		"timeline-start timeline-box mr-4 md:mr-8 px-2 border-none rounded-lg py-4 bg-byellow drop-shadow-lg w-full";
	const timelineRight =
		"timeline-end timeline-box ml-4 md:ml-8 px-2 border-none rounded-lg py-4 bg-byellow  drop-shadow-lg w-full";

	const cardDuration = "";
	const pointDuration = "250";
	const pointOffset = "150";

	const TimelineNumber = ({ num }: { num: number }) => {
		return (
			<div
				data-aos="zoom-in"
				data-aos-duration={pointDuration}
				data-aos-offset={pointOffset}>
				<div
					className="bg-flamingo text-md md:text-2xl font-bold w-auto aspect-square h-6 md:h-10 rounded-full place-items-center grid hover:drop-shadow-glowRed
transition-all ease-in-out duration-500">
					{num}
				</div>
			</div>
		);
	};
	const TimelineEvent = ({ title, date }: { title: string; date: string }) => {
		return (
			<div className="text-center">
				<h1 className="text-md md:text-3xl font-bold">{title}</h1>
				<p className="mt-2 text-xs md:text-lg font-bold text-flamingo">
					{date} <br className="md:hidden" />
					2024
				</p>
			</div>
		);
	};
	return (
		<section className="relative w-full py-24 px-8 md:px-16 xl:px-96 text-white overflow-clip">
			<BGPATTERN />
			<h1
				className="text-3xl md:text-4xl font-bold text-center"
				data-aos="fade-up">
				Timeline Kegiatan
			</h1>
			<ul className="timeline timeline-vertical mt-24">
				<li>
					<div
						className={timelineLeft}
						data-aos="fade-left"
						data-aos-duration="500">
						<TimelineEvent title="Pembukaan Registrasi" date="4 September" />
					</div>
					<div className="timeline-middle">
						<TimelineNumber num={1} />
					</div>
					<hr
						data-aos="zoom-in"
						data-aos-duration={pointDuration}
						data-aos-offset={pointOffset}
					/>
				</li>
				<li>
					<hr
						data-aos="zoom-in"
						data-aos-duration={pointDuration}
						data-aos-offset={pointOffset}
					/>
					<div
						className={timelineRight}
						data-aos="fade-right"
						data-aos-duration="500">
						<TimelineEvent title="Technical Meeting" date="3 November" />
					</div>
					<div className="timeline-middle">
						<TimelineNumber num={2} />
					</div>
					<hr
						data-aos="zoom-in"
						data-aos-duration={pointDuration}
						data-aos-offset={pointOffset}
					/>
				</li>
				<li>
					<hr
						data-aos="zoom-in"
						data-aos-duration={pointDuration}
						data-aos-offset={pointOffset}
					/>

					<div
						className={timelineLeft}
						data-aos="fade-left"
						data-aos-duration="500">
						<TimelineEvent title="Penutupan Pendaftaran" date="14 November" />
					</div>
					<div className="timeline-middle">
						<TimelineNumber num={3} />
					</div>
					<hr
						data-aos="zoom-in"
						data-aos-duration={pointDuration}
						data-aos-offset={pointOffset}
					/>
				</li>
				<li>
					<hr
						data-aos="zoom-in"
						data-aos-duration={pointDuration}
						data-aos-offset={pointOffset}
					/>

					<div
						className={timelineRight}
						data-aos="fade-right"
						data-aos-duration="500">
						<TimelineEvent title={"SIMBARA XIII"} date="16 November" />
					</div>
					<div className="timeline-middle">
						<TimelineNumber num={4} />
					</div>
				</li>
			</ul>
		</section>
	);
}

function QNASection() {
	const Question = ({
		question,
		answer,
	}: {
		question: string;
		answer: string;
	}) => {
		return (
			<div data-aos="zoom-in" data-aos-offset="120">
				<div
					tabIndex={0}
					className="collapse collapse-arrow bg-byellow w-full h-min py-4 px-8 rounded-sm mt-12 hover:drop-shadow-glowYellow transition-all ease-in-out duration-200">
					<input type="checkbox" />
					<div className="collapse-title text-lg md:text-2xl font-bold">
						{question}
					</div>
					<div className="collapse-content text-md md:text-xl">
						<p>{answer}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section className="relative w-full py-12 px-8 xl:px-96  text-white">
			<BGPATTERN />
			<h1
				className="text-3xl md:text-4xl font-bold text-center"
				data-aos="fade-up">
				Pertanyaan & Jawaban
			</h1>
			<Question
				question="Berapa banyak tim maksimal yang dapat dikirim?"
				answer="Maksimal tim yang dapat dikirimkan adalah x tim per sekolah"
			/>
		</section>
	);
}

function ContactSection() {
	return (
		<section className="relative w-full py-12 px-8 xl:px-96  text-white">
			<BGPATTERN />
			<h1
				className="text-3xl md:text-4xl font-bold text-center"
				data-aos="fade-up">
				Contact Person
			</h1>
			<Link
				href="https://wa.me/+6285158469469"
				target="_blank"
				data-aos="zoom-in"
				data-aos-offset="120">
				<div className=" bg-byellow w-full h-min py-4 px-8 rounded-sm mt-12 hover:drop-shadow-glowYellow transition-all ease-in-out duration-500">
					<h1 className="text-lg md:text-2xl font-bold">
						Choiru Ummi Muthalamah
					</h1>
					<p className="text-md md:text-lg mt-2 text-flamingo font-bold">
						Whatsapp: 0851-5846-9469
					</p>
				</div>
			</Link>
		</section>
	);
}

export default function Home() {
	return (
		<main>
			<AOSInit />
			<HeroSection />
			<CountdownSection />
			<DescSection />
			<DocumentationSection />
			<TimelineSection />
			<QNASection />
			<ContactSection />
		</main>
	);
}
