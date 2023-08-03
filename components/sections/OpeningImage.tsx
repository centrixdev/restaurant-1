"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function OpeningImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0.5, 1], ["-200px", "100px"]);
  return (
    <motion.div style={{ y }} className="absolute bg-zinc-800 -z-20 ">
      <Image
        className="object-cover h-[110vh] opacity-20 md:opacity-30"
        src="/images/opening.jpg"
        alt="Restaurant"
        width={1920}
        height={1080}
      />
    </motion.div>
  );
}
