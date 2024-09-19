import Image, { StaticImageData } from "next/image";
export default function BGIMG({ src }: { src: StaticImageData }) {
  return (
    <Image
      width="3200"
      height="1800"
      src={src}
      alt=""
      className="absolute -z-10 top-0 left-0 h-full  object-cover md:object-fill"
      priority={true}
      placeholder="blur"
    />
  );
}
