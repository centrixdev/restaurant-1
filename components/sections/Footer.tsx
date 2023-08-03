import Link from "next/link";
import { Button } from "../ui/button";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { InstagramIcon, MailIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 block md:grid grid-cols-5 py-8 px-8 text-zinc-100 gap-8">
      <div className="col-span-2 my-6">
        <h3 className="text-4xl">MAMMA MIA</h3>
        <p className="font-serif max-w-sm text-zinc-400 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quibusdam.
        </p>
        <p className="text-zinc-300 font-serif">
          &copy; {new Date().getFullYear()} MAMMA MIA
        </p>
      </div>
      <div className="my-4">
        <h4 className="text-2xl">Adresse</h4>
        <div className="font-serif text-zinc-400">
          <p className="text-zinc-300 ">
            Musterstraße 42a, <br />
            12345 Musterstadt
          </p>
          <Link href={"tel:+49 123 45678"}>
            <Button variant={"link"} className="text-zinc-300 p-0 text-md ">
              +49 123 45678
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-4">
        <h4 className="text-2xl">Links</h4>
        <ul className="font-serif text-zinc-400 flex gap-2">
          <li>
            <Link href={"mailto:dominik.rsmn@gmail.com"}>
              <MailIcon size={24} className="text-zinc-300" />
            </Link>
          </li>
          <li>
            <Link href={"https://www.twitter.com/dominik_devs/"} target="blank">
              <TwitterIcon size={24} className="text-zinc-300" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h4 className="text-2xl">Rechtliches</h4>
        <ul className="font-serif text-zinc-400 ">
          <li>
            <Link href={"/impressum"}>Impressum</Link>
          </li>
          <li>
            <Link href={"/datenschutz"}>Datenschutz</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
