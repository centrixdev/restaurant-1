import { Metadata } from "next";

const points: { title: string; text: string }[] = [
  {
    title: "Datenerhebung und Verwendungszweck",
    text: "Wir erheben und speichern die folgenden personenbezogenen Daten, die Sie bei der Nutzung unseres Reservierungssystems angeben: Name, Anzahl der Personen, Datum, Zeit, optionale zusätzliche Nachricht, E-Mail-Adresse oder Telefonnummer. Diese Daten werden ausschließlich zur Abwicklung und Organisation Ihrer Reservierung verwendet.",
  },
  {
    title: "Datenverarbeitung und -speicherung",
    text: "Die Daten werden auf einem Server in Deutschland gespeichert und verarbeitet. Die Daten werden nach 30 Tagen automatisch gelöscht. Die Daten werden nicht an Dritte weitergegeben.",
  },
  {
    title: "Datenweitergabe",
    text: "Wir geben Ihre Daten nur an Dritte weiter, soweit dies zur Erfüllung Ihrer Reservierung oder zur Einhaltung gesetzlicher Vorschriften erforderlich ist.",
  },
  {
    title: "Rechtsgrundlage",
    text: "Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrages oder vorvertraglicher Maßnahmen erlaubt.",
  },
  {
    title: "Auskunft, Berichtigung, Löschung",
    text: "Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten und diese zu berichtigen oder löschen zu lassen. Kontaktieren Sie Uns hierfür bitte über dominik.rsmn@gmail.",
  },
  {
    title: "Dauer der Datenspeicherung",
    text: "Ihre Daten werden solange gespeichert, wie dies für die Erfüllung des Vertragszwecks oder zur Einhaltung gesetzlicher Aufbewahrungsfristen erforderlich ist.",
  },
  {
    title: "Beschwerderecht",
    text: "Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen datenschutzrechtliche Bestimmungen verstößt, haben Sie das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.",
  },
  {
    title: "Änderungen der Datenschutzhinweise",
    text: "Wir behalten uns vor, diese Datenschutzhinweise anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Datenverarbeitung anzupassen. Die jeweils aktuelle Version finden Sie stets auf unserer Webseite.",
  },
];

export const metadata: Metadata = {
  title: "Datenschutz - MAMMA MIA",
};
export default function Impressum() {
  return (
    <main className="py-8 bg-zinc-200 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl ">Datenschutzhinweise</h1>
      <section id="datenschutz" className="w-full max-w-xl my-8">
        {points.map((point) => (
          <div key={point.title} className="my-4">
            <h2 className="text-3xl ">{point.title}</h2>
            <p className="text-xl font-serif text-zinc-500">{point.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
