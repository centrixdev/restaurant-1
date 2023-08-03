import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AiOutlineRight } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import AnimatedLogo from "@/components/sections/AnimatedLogo";
import HeroImage from "@/components/sections/HeroImage";
import OpeningImage from "@/components/sections/OpeningImage";
import { OpeningHours } from "@/components/sections/OpeningHours";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="relative flex justify-center items-center h-full"
      >
        <div className="relative z-10 text-center flex flex-col justify-center h-full items-center w-full my-32">
          <AnimatedLogo />
          <div className="font-serif my-4 text-lg bg-neutral-200 px-12 py-6 text-left ">
            <h2 className="text-black ">Musterstraße 42a, 12345 Musterstadt</h2>
            <div className="flex flex-col gap-2 mt-4">
              <Button>
                <Link href="/reservieren">
                  Tisch Reservieren
                  <span className="ml-1">
                    <AiOutlineRight />
                  </span>
                </Link>
              </Button>
              <Button variant={"outline"}>
                <Link href="/reservieren">
                  Bestellen
                  <span className="ml-1">
                    <TbTruckDelivery />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <HeroImage />
      </section>
      <section id="about" className=" bg-zinc-200">
        <div className="flex py-12 px-8 gap-8 justify-center items-center flex-col md:flex-row">
          <Image
            src="/images/chef.jpg"
            width={1920}
            height={2400}
            className="object-cover max-w-sm md:max-w-lg h-[65vh] w-screen md:w-auto"
            alt="Willkommen"
          />
          <div className="max-w-md md:max-w-lg">
            <h2 className="font-sans font-normal text-6xl my-4 text-zinc-600">
              DAS MAMMA MIA
            </h2>
            <p className="font-serif text-black mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, ad hic perferendis illum tempore quia eum in! Debitis
              aperiam cumque incidunt maiores quos praesentium totam, hic
              voluptate ut rem distinctio? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum harum vero facilis ea sequi
              illo eos aperiam. Ipsa minima officiis suscipit, accusamus odit,
              placeat, ipsam temporibus perferendis nulla delectus ipsum.
            </p>
            <blockquote className="font-serif text-neutral-700 italic text-xl font-extralight border-l-2 border-black px-6 py-1 my-4 w-full">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing
              elit.&quot;
            </blockquote>
          </div>
        </div>
      </section>
      <section
        id="opening"
        className="relative flex justify-center items-center h-full"
      >
        <div className="relative z-10 flex justify-center bg-transparent md:bg-zinc-200 max-w-xl md:w-full my-12 px-16 ">
          <div className=" md:max-w-lg my-12">
            <h2 className="font-sans font-normal text-5xl md:text-6xl my-4 text-white md:text-zinc-600">
              ÖFFNUNGSZEITEN
            </h2>
            <OpeningHours />
          </div>
        </div>

        <OpeningImage />
      </section>
    </main>
  );
}
