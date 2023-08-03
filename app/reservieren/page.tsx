import OnlineDialog from "@/components/sections/OnlineDialog";
import CallDialog from "@/components/sections/CallDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiFillPhone } from "react-icons/ai";

export default function Speisekarte() {
  return (
    <main className="w-full h-[62vh] flex items-center justify-center flex-col py-8 bg-zinc-200">
      <h1 className="text-5xl md:text-6xl my-4">RESERVIEREN</h1>
      <section id="Reservieren">
        <Card>
          <CardContent className="flex flex-col gap-2">
            <CardHeader>
              <CardTitle className="font-normal text-center">
                Wie wollen Sie reservieren?
              </CardTitle>
            </CardHeader>
            <OnlineDialog />
            <CallDialog />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
