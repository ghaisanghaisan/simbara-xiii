import Link from "next/link";
import Image from "next/image";
import { card_orange } from "@/public/elements";

export default function DescSection() {
  return (
    <section className="w-full py-12 text-center px-8 xl:px-96 text-white flex flex-col gap-y-24 relative">
      <h1
        className="text-3xl md:text-4xl font-bold drop-shadow-good"
        data-aos="fade-up">
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
        data-aos-offset="150"
        className="relative">
        <div
          className="bg-flamingo text-xl md:text-2xl  font-black py-6 rounded-sm hover:drop-shadow-glowRed
				transition-all ease-in-out duration-500 hover:scale-110">
          Daftar Sekarang!
        </div>
      </Link>
    </section>
  );
}
