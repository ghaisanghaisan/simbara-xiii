import Image from "next/image";
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
export default function DocumentationSection() {
	return (
		<section className="space-y-4 py-12 relative overflow-clip">
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
