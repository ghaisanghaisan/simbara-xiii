import Link from "next/link";
import Image from "next/image";
import { card_orange } from "@/public/elements";
import QNASection from "./QNASection";
import BGIMG from "../_components/BgIMG";
import { contact_bg } from "@/public/backgrounds";

function ContactCard({ nama, whatsapp }: { nama: string; whatsapp: string }) {
	return (
		<Link
			href={`https://wa.me/+62${whatsapp}`}
			target="_blank"
			data-aos="zoom-in"
			data-aos-offset="120">
			<div className=" relative  w-full h-min py-4 px-8 rounded-sm onhover-red">
				<h1 className="text-lg md:text-2xl font-bold">{nama}</h1>
				<p className="text-md md:text-lg mt-2 text-bcyan font-bold drop-shadow-glow">
					Whatsapp: 0{whatsapp}
				</p>
				<Image
					alt=""
					src={card_orange}
					className="absolute left-0 top-0 w-full h-full z-[-1]"
				/>
			</div>
		</Link>
	);
}
export default function ContactSection() {
	return (
		<section className="relative">
			<QNASection />
			<section className="relative w-full py-12 px-8 xl:px-96  text-white">
				<h1
					className="text-3xl md:text-4xl font-bold text-center drop-shadow-good mb-12"
					data-aos="fade-up">
					Contact Us!
				</h1>
				<div className="flex flex-col gap-y-4">
					<Link
						href="mailto: Profit.sman55jkt@gmail.com"
						target="_blank"
						data-aos="zoom-in"
						data-aos-offset="120">
						<div className=" relative  w-full h-min py-4 px-8 rounded-sm onhover-red">
							<h1 className="text-lg md:text-2xl font-bold">Email</h1>
							<p className="text-md md:text-lg mt-2 text-bcyan font-bold drop-shadow-glow">
								Profit.sman55jkt@gmail.com
							</p>
							<Image
								alt=""
								src={card_orange}
								className="absolute left-0 top-0 w-full h-full z-[-1]"
							/>
						</div>
					</Link>

					<ContactCard nama="Fauzan (SMP)" whatsapp="87719905129" />
					<ContactCard nama="Nabila (SMA)" whatsapp="81545615907" />
				</div>
			</section>
			<BGIMG src={contact_bg} />
		</section>
	);
}
