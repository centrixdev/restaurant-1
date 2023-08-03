import Image from "next/image";

interface Member {
  name: string;
  role: string;
  image: string;
}

const team: Member[] = [
  {
    name: "Dominik Ruschmann",
    role: "Geschäftsführung",
    image: "https://picsum.photos/300/400",
  },
  {
    name: "Max Mustermann",
    role: "Geschäftsführung",
    image: "https://picsum.photos/300/400",
  },
  {
    name: "Erika Mustermann",
    role: "Geschäftsführung",
    image: "https://picsum.photos/300/400",
  },
  {
    name: "Hans Mustermann",
    role: "Koch",
    image: "https://picsum.photos/300/400",
  },
  {
    name: "Vanessa Mustermann",
    role: "Service",
    image: "https://picsum.photos/300/400",
  },
];
export default function About() {
  return (
    <main className="w-full flex items-center flex-col py-8 bg-zinc-200">
      <h1 className="text-5xl md:text-6xl my-4">ÜBER UNS</h1>
      <section id="team" className=" flex flex-col items-center">
        <h2 className="text-2xl ">Das Team</h2>
        <ul className="flex overflow-x-scroll px-5 my-auto gap-6 max-w-2xl">
          {team.map((member) => (
            <li key={member.name} className="bg-white p-4 pb-2 my-4">
              <Image
                className="h-48 w-36 max-w-none"
                src={member.image}
                width={250}
                height={400}
                alt={member.name}
              />
              <div className="mt-2 flex flex-col items-center">
                <p className="text-xl">{member.name}</p>
                <p className="m-0 text-sm font-serif text-zinc-600">
                  {member.role.toUpperCase()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="geschichte" className="my-8">
        <h2 className="text-4xl mb-3">Geschichte</h2>
        <p className="text-left max-w-xl font-serif text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          quis, sunt deserunt laborum est impedit, maiores reprehenderit dolorem
          perspiciatis non expedita! Odio, officia quidem repellat itaque quis
          delectus esse harum. Quam eaque fugit repellendus aliquid libero ea
          corrupti vero voluptas, at unde nam repudiandae ullam dolore et,
          maxime sunt reprehenderit suscipit deleniti, quas porro aut iure quod
          blanditiis. Sit, sint. Iste ullam laborum laboriosam, est, eaque non
          odit deserunt, quae omnis architecto voluptatem nisi inventore. Velit
          quos aperiam repellat nemo. Qui quam dolorum excepturi perspiciatis
          reprehenderit ut nemo error numquam! Veniam voluptas, minus atque
          veritatis dolorum ab, blanditiis voluptatum quia voluptate nesciunt
          nihil nobis sunt iste recusandae architecto? Deleniti unde animi
          temporibus et quia libero nemo aut nostrum magni pariatur! Nisi cum
          ipsa tempora eligendi pariatur
        </p>
      </section>
    </main>
  );
}
