import Link from "next/link";
import Image from "next/image";
import { timeline_event } from "@/public/elements";

export default function ContactSection() {
	return (
		<section className="relative w-full py-12 px-8 xl:px-96  text-white">
			<h1
				className="text-3xl md:text-4xl font-bold text-center drop-shadow-good"
				data-aos="fade-up">
				Contact Person
			</h1>
			<Link
				href="https://wa.me/+6285158469469"
				target="_blank"
				data-aos="zoom-in"
				data-aos-offset="120">
				<div className=" relative  w-full h-min py-4 px-8 rounded-sm mt-12 onhover-red">
					<Image
						alt=""
						src={timeline_event}
						className="absolute left-0 top-0 w-full h-full -z-10"
					/>
					<h1 className="text-lg md:text-2xl font-bold">
						Choiru Ummi Muthalamah
					</h1>
					<p className="text-md md:text-lg mt-2 text-bcyan font-bold drop-shadow-glow">
						Whatsapp: 0851-5846-9469
					</p>
				</div>
			</Link>
		</section>
	);
}