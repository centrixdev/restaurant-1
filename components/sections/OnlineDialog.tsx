"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";

import { TbWorld } from "react-icons/tb";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, CheckIcon } from "lucide-react";
import { RxCaretSort } from "react-icons/rx";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { CommandGroup } from "cmdk";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

const formSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: "Bitte geben Sie einen Namen an.",
        required_error: "Bitte geben Sie einen Namen an.",
      })
      .min(2, "Bitte geben Sie einen Namen an."),
    amount: z.preprocess(
      (x) => Number(x),
      z
        .number({
          invalid_type_error:
            "Bitte geben Sie eine Personenanzahl zwischen 1 und 15 an.",
          required_error:
            "Bitte geben Sie eine Personenanzahl zwischen 1 und 15 an.",
        })
        .min(1, "Bitte geben Sie eine Personenanzahl zwischen 1 und 15 an.")
        .max(15, "Bitte geben Sie eine Personenanzahl zwischen 1 und 15 an.")
    ),
    date: z.date(),
    time: z
      .string({
        invalid_type_error: "Bitte geben Sie eine Uhrzeit an.",
        required_error: "Bitte geben Sie eine Uhrzeit an.",
      })
      .min(5, "Bitte geben Sie eine Uhrzeit an.")
      .max(5, "Bitte geben Sie eine Uhrzeit an."),
    email: z
      .string({
        invalid_type_error: "Bitte geben Sie eine gültige E-Mail an.",
        required_error: "Bitte geben Sie eine gültige E-Mail an.",
      })
      .email({ message: "Bitte geben Sie eine gültige E-Mail an." })
      .optional(),
    phone: z.string().min(6).optional(),
    message: z.string().optional(),
  })
  .refine((data) => {
    if (!data.email && !data.phone) {
      return {
        message: "Bitte geben Sie eine E-Mail oder Telefonnummer an.",
      };
    }
    return true;
  });

const timeOptions = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];
export default function OnlineDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      amount: 1,
      date: new Date(),
      time: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsOpen(false);
    toast({
      title: `Danke, ${values.name}!`,
      description: `Reserviert am ${values.date.toLocaleDateString()} um ${
        values.time
      } Uhr für ${values.amount} Person${values.amount > 1 ? "en" : ""}`,
      duration: 5000,
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button size={"lg"} className="text-lg">
          Online
          <span className="ml-1">
            <TbWorld />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <DialogHeader>
              <DialogTitle className="font-normal text-center text-2xl">
                Online Reservierung
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <div className="grid grid-cols-5 gap-4 ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Dominik Ruschmann"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Anzahl Personen</FormLabel>
                      <FormControl>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Anzahl Personen</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal font-serif",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Datum auswählen</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="col-span-2 flex flex-col  ">
                      <FormLabel>Zeit</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "font-serif justify-between w-full",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? timeOptions.find(
                                    (time) => time === field.value
                                  )
                                : "Zeit auswählen"}
                              <RxCaretSort className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Zeit eingeben..."
                              className="h-9 font-serif"
                            />
                            <CommandEmpty>
                              Diese Zeit ist nicht verfügbar.
                            </CommandEmpty>
                            <CommandGroup>
                              {timeOptions.map((time) => (
                                <CommandItem
                                  value={time}
                                  key={time}
                                  className="font-serif"
                                  onSelect={() => {
                                    form.setValue("time", time);
                                  }}
                                >
                                  {time}
                                  <CheckIcon
                                    className={cn(
                                      "ml-auto h-4 w-4",
                                      time === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Nachricht</FormLabel>
                    <FormControl>
                      <Textarea
                        className="font-serif "
                        id="message"
                        placeholder="Sonstiges..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <p className="text-xl text-center w-full">Kontakt</p>
              <div className="grid grid-cols-9 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-4">
                      <FormLabel>Email</FormLabel>

                      <FormControl>
                        <Input
                          id="name"
                          type="text"
                          placeholder="dominik.rsmn@gmail.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="col-span-1 mt-4 h-full text-center flex justify-center items-center font-serif text-zinc-500">
                  oder
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="col-span-4">
                      <FormLabel>Telefon</FormLabel>

                      <FormControl>
                        <Input
                          id="name"
                          type="tel"
                          placeholder="+49 123 45678"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="text-lg">Reservieren</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="font-normal text-xl">
                      Bist du dir sicher?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-red-900 text-lg font-serif">
                      Solltest du den Tisch nicht mehr benötigen, bitten wir
                      dich, uns telefonisch zu kontaktieren.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <p className="font-serif text-zinc-600 text-xs">
                      Dies ist eine Demo-Seite, es findet keine Reservierung
                      statt.
                    </p>
                    <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button
                        type="submit"
                        className="text-lg"
                        onClick={() => {
                          if (formRef.current) {
                            formRef.current.dispatchEvent(
                              new Event("submit", { bubbles: true })
                            );
                          }
                        }}
                      >
                        Reservieren
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
