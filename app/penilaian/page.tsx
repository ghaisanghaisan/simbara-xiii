import { contact_bg } from "@/public/backgrounds";
import { card_orange } from "@/public/elements";

import Link from "next/link";
import BGIMG from "../_components/BgIMG";

export default function Penilaian() {
  return (
    <section className="relative px-4 lg:px-48 py-36">
      <BGIMG src={contact_bg} />
      <div className="w-full overflow-clip rounded-xl relative p-8 text-center text-2xl text-white font-bold">
        <BGIMG src={card_orange} />
        Untuk informasi mengenai penilaian dapat diakses di{" "}
      </div>
    </section>
  );
}
