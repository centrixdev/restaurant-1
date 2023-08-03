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

import { TbPhone, TbWorld } from "react-icons/tb";
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
import { CalendarIcon, CheckIcon, Phone } from "lucide-react";
import { RxCaretSort, RxMobile } from "react-icons/rx";
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
import { DialogDescription } from "@radix-ui/react-dialog";
import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";

export default function CallDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="text-lg">
          Anrufen
          <span className="ml-1">
            <TbPhone />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-normal text-center text-2xl">
            Anrufen
          </DialogTitle>
          <DialogDescription className="font-serif text-zinc-400 w-full text-center mx-auto max-w-sm">
            Sie können uns auch telefonisch erreichen einen Tisch reservieren
            oder eine Bestellung aufgeben.
          </DialogDescription>
          <div className="font-serif space-x-3">
            <Button variant={"secondary"} size={"lg"}>
              <Link
                href={"tel:01234 1337"}
                className="text-base flex items-center"
              >
                <span className="mr-2 flex items-center gap-1">
                  <Phone size={16} />
                  Festnetz:
                </span>
                <span className="font-bold">01234 1337</span>
              </Link>
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              <Link
                href={"tel:+49 123 45678"}
                className="text-base flex items-center"
              >
                <span className="mr-2 flex items-center gap-1">
                  <RxMobile size={16} />
                  Mobil:
                </span>
                <span className="font-bold">+49 123 45678</span>
              </Link>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
