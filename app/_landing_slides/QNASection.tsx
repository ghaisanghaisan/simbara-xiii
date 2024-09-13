import { card_orange } from "@/public/elements";
import Image from "next/image";

export default function QNASection() {
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
					className="relative collapse collapse-arrow  w-full h-min py-4 px-8 rounded-sm mt-4  duration-300 onhover-red">
					<Image
						alt=""
						src={card_orange}
						className="absolute left-0 top-0 w-full h-full -z-10"
					/>
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
			<h1
				className="text-3xl md:text-4xl font-bold text-center mb-12 drop-shadow-good"
				data-aos="fade-up">
				Pertanyaan & Jawaban
			</h1>
			<Question
				question="Berapa banyak tim maksimal yang dapat dikirim?"
				answer="Maksimal tim yang dapat dikirimkan adalah x tim per sekolah"
			/>
			<Question
				question="Berapa banyak tim maksimal yang dapat dikirim?"
				answer="Maksimal tim yang dapat dikirimkan adalah x tim per sekolah"
			/>
			<Question
				question="Berapa banyak tim maksimal yang dapat dikirim?"
				answer="Maksimal tim yang dapat dikirimkan adalah x tim per sekolah"
			/>
		</section>
	);
}
