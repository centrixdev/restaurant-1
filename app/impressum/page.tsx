import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - MAMMA MIA",
};
export default function Impressum() {
  return (
    <main className="py-8 bg-zinc-200 flex flex-col items-center h-[62vh]">
      <h1 className="text-5xl md:text-6xl ">Impressum</h1>
      <section id="team" className="w-full max-w-xl my-8">
        <h2 className="text-3xl ">Angaben gemäß § 5 TMG:</h2>
        <p className="text-xl font-serif">
          Name: Dominik Ruschmann
          <br />
          Postanschrift: Kellerfeld 27, 77836 Rheinmünster
          <br />
          Kontakt:{" "}
          <Link href="mailto:dominik.rsmn@gmail.com">
            dominik.rsmn@gmail.com
          </Link>
          <br />
          Vertreten durch: Dominik Ruschmann
        </p>
      </section>
    </main>
  );
}
