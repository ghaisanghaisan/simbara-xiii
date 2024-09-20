import { card_orange } from "@/public/elements";
import Image from "next/image";
import Link from "next/link";

export default function QNASection() {
  const Question = ({
    question,
    answer,
  }: {
    question: string;
    answer: string | React.ReactNode;
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
          <div className="collapse-title ">
            <p className="text-lg md:text-2xl font-bold">{question}</p>
          </div>
          <div className="collapse-content"><p className=" text-lg md:text-xl">{answer}</p></div>
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
        question="Bagaimana saya mendaftar?"
        answer={
          <p>
            Pendaftaran dapat diakses pada laman{" "}
            <Link href="/registrasi" className="text-bcyan">
              simbara.site/regisrasi
            </Link>
          </p>
        }
      />
      <Question
        question="Apa saja benefit yang didapatkan jika mengikuti SIMBARA XIII? "
        answer="Pada edisi SIMBARA XIII akan terdapat belasan juara dan hadiah jutaan rupiah + akan mendapatkan sertifikat."
      />
      <Question
        question="Bagaimana jika peserta lomba membawa kendaraan seperti bus? "
        answer="Setelah peserta lomba sudah diturunkan disekitar area SMA Negeri 55 Jakarta. Bus akan diarahkan ke parkiran depan Taman Makam Pahlawan sebagai tempat parkir kendaraan untuk peserta lomba SIMBARA XIII."
      />
      <Question
        question="Kapan peserta lomba dapat melakukan registrasi ulang? "
        answer="Peserta lomba dapat melakukan registrasi ulang saat hari - H, pada pagi hari."
      />
      <Question
        question="Kapan terakhir untuk menyerahkan berkas dan pelunasan? "
        answer="Terakhir peserta lomba dapat menyerahkan berkas dan pelunasan pada saat Technical Meeting (TM)"
      />
      <Question
        question="Bagaimana jika melakukan pendaftaran setelah Technical Meeting (TM)? "
        answer="Jika melakukan pendaftaran setelah Technical Meeting maka wajib untuk menyerahkan berkas dan langsung melunaskan pembayaran. "
      />
      <Question
        question="Berapa banyak kouta peserta lomba untuk SMP/MTS dan SMA/SMK/MA? "
        answer="Kuota untuk SIMBARA XIII adalah 21 peserta lomba untuk SMP/MTS se-derajat dan 21 peserta lomba untuk SMA/SMK/MA se-derajat."
      />
    </section>
  );
}
