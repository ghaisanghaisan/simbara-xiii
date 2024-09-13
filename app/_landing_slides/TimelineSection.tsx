import { timeline_bg } from "@/public/backgrounds";
import { card_orange } from "@/public/elements";
import Image from "next/image";
import BGIMG from "../_components/BgIMG";

const cardDuration = "";
const pointDuration = "250";
const pointOffset = "150";

const TimelineLeft = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className="timeline-start timeline-box mr-4 md:mr-8 px-2 border-none rounded-lg py-4 bg-byellow drop-shadow-lg w-full "
			data-aos="fade-left"
			data-aos-duration="500">
			{children}
			<Image
				alt=""
				src={card_orange}
				className="absolute left-0 top-0 w-full h-full -z-10"
			/>
		</div>
	);
};

const TimelineRight = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className="timeline-end timeline-box ml-4 md:ml-8 px-2 border-none rounded-lg py-4 bg-byellow  drop-shadow-lg w-full "
			data-aos="fade-right"
			data-aos-duration="500">
			{children}
			<Image
				alt=""
				src={card_orange}
				className="absolute left-0 top-0 w-full h-full -z-10"
			/>
		</div>
	);
};

const TimelineNumber = ({ num }: { num: number }) => {
	return (
		<div
			data-aos="zoom-in"
			data-aos-duration={pointDuration}
			data-aos-offset={pointOffset}>
			<div className="bg-flamingo text-md md:text-2xl font-bold w-auto aspect-square h-6 md:h-10 rounded-full place-items-center grid onhover-red ">
				{num}
			</div>
		</div>
	);
};
const TimelineEvent = ({ title, date }: { title: string; date: string }) => {
	return (
		<div className="text-center relative hover:scale-110 duration-200">
			<h1 className="text-md md:text-3xl font-bold drop-shadow-glowYellow">
				{title}
			</h1>
			<p className="mt-2 text-xs md:text-lg font-bold text-bcyan drop-shadow-glow">
				{date} <br className="md:hidden" />
				2024
			</p>
		</div>
	);
};
export default function TimelineSection() {
	return (
		<section className="relative w-full py-24 px-8 md:px-16 xl:px-96 text-white overflow-clip">
			{/* <BGPATTERN /> */}
			<BGIMG src={timeline_bg} />
			<h1
				className="text-3xl md:text-4xl font-bold text-center drop-shadow-good"
				data-aos="fade-up">
				Timeline Kegiatan
			</h1>
			<ul className="timeline timeline-vertical mt-24">
				<li>
					<TimelineLeft>
						<TimelineEvent title="Pembukaan Registrasi" date="4 September" />
					</TimelineLeft>
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
					<TimelineRight>
						<TimelineEvent title="Technical Meeting" date="9 November" />
					</TimelineRight>
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

					<TimelineLeft>
						<TimelineEvent title="Penutupan Pendaftaran" date="14 November" />
					</TimelineLeft>
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

					<TimelineRight>
						<TimelineEvent title={"SIMBARA XIII"} date="16 November" />
					</TimelineRight>
					<div className="timeline-middle">
						<TimelineNumber num={4} />
					</div>
				</li>
			</ul>
		</section>
	);
}
