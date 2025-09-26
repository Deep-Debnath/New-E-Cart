import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { carousel } from "@/files/files";
import Image from "next/image";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);

  return (
    <div className="overflow-hidden rounded-xl h-full" ref={emblaRef}>
      <div className="flex h-full">
        {carousel.map((item) => (
          <div key={item.key} className="flex-[0_0_100%]  h-full">
            <Image
              height={500}
              width={1200}
              alt={item.alt}
              src={item.src}
              className="relative h-full w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
