"use client";

import Image from "next/image";
import Logo from "@/public/LOGO SIMBARA.png";
import { AOSInit } from "./aos";
import { first_0, first_1, first_2, first_3 } from "@/public/dokum";
import { useEffect } from "react";

function CountDownBox({ value, label }: { value: string; label: string }) {
	return (
		<div className="text-center  border-bcyan border-r border-l w-24 md:w-32">
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
			{/* <Image
				className={imgclass}
				width={533}
				height={300}
				src={first_4}
				alt="Dokumentasi SIMBARA XII"
			/> */}
			{/* <Image
				className={imgclass}
				width={533}
				height={300}
				src={first_5}
				alt="Dokumentasi SIMBARA XII"
			/> */}
			{/* <Image
				className={imgclass}
				width={533}
				height={300}
				src={first_6}
				alt="Dokumentasi SIMBARA XII"
			/> */}
		</>
	);
}

function TimelineSection() {
	const timelineLeft =
		"timeline-start timeline-box mr-4 md:mr-8 border-none rounded-lg py-4 bg-byellow px-4 md:px-8 drop-shadow-lg w-full";
	const timelineRight =
		"timeline-end timeline-box ml-4 md:ml-8 border-none rounded-lg py-4 bg-byellow px-4 md:px-8 drop-shadow-lg w-full";

	const cardDuration = "";
	const pointDuration = "250";
	const pointOffset = "150";
	return (
		<section className="relative w-full py-24 text-white">
			<BGPATTERN />
			<h1
				className="text-3xl md:text-4xl font-bold text-center"
				data-aos="fade-up">
				Timeline Kegiatan
			</h1>
			<ul className="timeline timeline-vertical mt-24 px-8 xl:px-96">
				<li>
					<div
						className={timelineLeft}
						data-aos="fade-left"
						data-aos-duration="500">
						<div className="text-center">
							<h1 className="text-xl md:text-3xl font-bold">Registrasi</h1>
							<p className="mt-2 text-xs md:text-lg font-bold text-flamingo">
								23 Agustus <br className="md:hidden" /> - 5 September{" "}
								<br className="md:hidden" />
								2024
							</p>
						</div>
					</div>
					<div className="timeline-middle">
						<div
							className="bg-flamingo text-md md:text-2xl font-bold w-auto aspect-square h-6 md:h-10 rounded-full place-items-center grid"
							data-aos="zoom-in"
							data-aos-duration={pointDuration}
							data-aos-offset={pointOffset}>
							1
						</div>
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
						<div className="text-center">
							<h1 className="text-xl md:text-3xl font-bold">
								Technical Meeting
							</h1>
							<p className="mt-2 text-xs md:text-lg font-bold text-flamingo ">
								23 Agustus -<br className="md:hidden" /> 5 September{" "}
								<br className="md:hidden" />
								2024
							</p>
						</div>
					</div>
					<div className="timeline-middle">
						<div
							className="bg-flamingo text-md md:text-2xl font-bold w-auto aspect-square h-6 md:h-10 rounded-full place-items-center grid"
							data-aos="zoom-in"
							data-aos-duration={pointDuration}
							data-aos-offset={pointOffset}>
							2
						</div>
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
						<div className="text-center">
							<h1 className="text-xl md:text-3xl font-bold"> Lomba</h1>
							<p className="mt-2 text-xs md:text-lg font-bold text-flamingo">
								23 Agustus <br className="md:hidden" /> - 5 September{" "}
								<br className="md:hidden" />
								2024
							</p>
						</div>
					</div>
					<div className="timeline-middle">
						<div
							className="bg-flamingo text-md md:text-2xl font-bold w-auto aspect-square h-6 md:h-10 rounded-full place-items-center grid"
							data-aos="zoom-in"
							data-aos-duration={pointDuration}
							data-aos-offset={pointOffset}>
							3
						</div>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default function Home() {
	return (
		<main>
			<AOSInit />
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
				<h1 className="text-2xl md:text-4xl mt-8 text-bcyan font-bold z-10">
					Utopian Visionary Quest
				</h1>
			</section>
			<section className="w-full h-[22vh] flex justify-center items-start relative">
				<BGPATTERN />
				<h1 className="absolute -top-12 text-lg font-bold">Saksikan dalam</h1>
				<div className="flex bg-byellow p-2 rounded-sm z-10">
					<CountDownBox value={"24"} label="Hari" />
					<CountDownBox value={"24"} label="Jam" />
					<CountDownBox value={"24"} label="Menit" />
				</div>
			</section>
			<section className="w-full py-12 text-center px-8 xl:px-96 text-white flex flex-col gap-y-24 relative">
				<BGPATTERN />
				<h1 className="text-3xl md:text-4xl font-bold" data-aos="fade-up">
					Apa itu SIMBARA?
				</h1>
				<p className="text-lg md:text-xl" data-aos="fade-in">
					Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
					Aliquam in hendrerit urna.{" "}
					<strong className="text-bcyan">
						Pellentesque sit amet sapien fringilla,{" "}
					</strong>
					mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
					tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
					suscipit.
				</p>
				<div
					className="bg-flamingo text-xl md:text-2xl  font-black py-2 px-4 rounded-sm"
					data-aos="zoom-in"
					data-aos-duration="200"
					data-aos-offset="150">
					Daftar Sekarang!
				</div>
			</section>
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
						<FirstCarouselImages />
					</div>
					<div className="flex gap-x-2 shrink-0 animate-infinite-scroll-left">
						<FirstCarouselImages />
					</div>
				</div>
			</section>
			<TimelineSection />
			<section className="relative w-full py-12 px-8 xl:px-96  text-white">
				<BGPATTERN />
				<h1
					className="text-3xl md:text-4xl font-bold text-center"
					data-aos="fade-up">
					Contact Person
				</h1>
				<div
					className="bg-byellow w-full py-4 px-8 rounded-sm mt-24"
					data-aos="zoom-in"
					data-aos-offset="120">
					<h1 className="text-xl font-bold">Choiru Ummi Muthalamah</h1>
					<p className="text-lg mt-2 text-flamingo">Whatsapp: 081219318988</p>
				</div>
			</section>
		</main>
	);
}
