import Image from "next/image";
import {
  LOGO,
  profit_1,
  profit_2,
  profit_3,
  profit_4,
  profit_5,
  profit_6,
  profit_7,
  profit_8,
  profit_9,
  profit_10,
  profit_11
} from "@/public/profit"
import BGIMG from "../_components/BgIMG";
import { contact_bg } from "@/public/backgrounds";
import { card_orange } from "@/public/elements";

function Carousel2() {
  const img_class = "object-cover select-none";
  return (<div className="carousel rounded-box h-[60vh]">
    <div className="carousel-item">
      <Image src={profit_1} alt="Foto Profit" className={img_class} />
    </div>
    <div className="carousel-item">
      <Image src={profit_2} alt="Foto Profit" className={img_class} />
    </div>
    <div className="carousel-item">
      <Image src={profit_3} alt="Foto Profit" className={img_class} />
    </div>
    <div className="carousel-item">
      <Image src={profit_4} alt="Foto Profit" className={img_class} />
    </div>
    <div className="carousel-item">
      <Image src={profit_5} alt="Foto Profit" className={img_class} />
    </div>
    <div className="carousel-item">
      <Image src={profit_6} alt="Foto Profit" className={img_class} />
    </div>
    <div className="carousel-item">
      <Image src={profit_7} alt="Foto Profit" className={img_class} />
    </div>
    <div className="carousel-item">
      <Image src={profit_8} alt="Foto Profit" className={img_class} />
    </div>
  </div>)
}
export default function TentangKami() {
  return <section className="relative px-4 py-24 xl:px-48">
    <BGIMG src={contact_bg} />
    <Carousel2 />
    <h1 className="text-3xl font-bold text-white text-center mt-12">Tentang Kami </h1>
    <div className="relative rounded flex flex-col-reverse xl:flex-row items-center gap-x-8 mt-12 ">
      <BGIMG src={card_orange} />
      <div className="p-8 text-justify font-bold text-white text-xl xl:w-2/3 xl:h-full">Kami adalah Paskibra Of Fifty Five (PROFIT) salah satu ekskul terfavorit yang ada di SMA Negeri 55 Jakarta. Paskibra of FiftyFive telah berdiri sejak 10 November 1982. Tahun ke tahun PROFIT selalu memberikan prestasi yang selalu membanggakan. Didikan dari pelatih maupun senior selalu membangkitkan semangat juang kami untuk terus berprestasi. <br /><br />Sejak dari tahun 2010, SIMBARA atau Aksi Formasi Kibar Bendera menjadi ajang perlombaan rutin yang dilaksanakan di bulan November  dalam rangka memperingati ulang tahun PROFIT. Tahun ini menjadi yang ke 13 simbara dilaksanakan.</div>
      <Image className="flex-grow drop-shadow-good xl:w-1/3 aspect-square" src={LOGO} alt="Logo PROFIT" width="500" height="500" />
    </div>
  </section>;
}
