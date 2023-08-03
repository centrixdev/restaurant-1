"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IconType } from "react-icons";
import { AiFillPhone, AiFillMail, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
const components: { title: string; href: string }[] = [
  {
    title: "Startseite",
    href: "/",
  },
  {
    title: "Speisekarte",
    href: "/speisekarte",
  },
  {
    title: "Reservieren",
    href: "/reservieren",
  },
  {
    title: "Über uns",
    href: "/ueber-uns",
  },
];
const contact: { icon: IconType; text: string; href: string }[] = [
  {
    icon: AiFillPhone,
    text: "+49 123 456 789",
    href: "tel:+49 123 456 789",
  },
  {
    icon: AiFillMail,
    text: "reservierung@mail.de",
    href: "mailto:reservierung@mail.de",
  },
];

export function Navbar() {
  const [showScroll, setShowScroll] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  });
  const variants: Variants = {
    enter: {
      y: "-200%",
      position: "absolute",
    },
    center: {
      y: "-100%",
      position: "fixed",
    },

    exit: {
      y: "-200%",
      position: "fixed",
    },
  };
  return (
    <>
      <Navigation key="transparent" />

      <AnimatePresence>
        {showScroll && (
          <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="z-50 left-0 right-0"
            transition={{
              y: { type: "spring", stiffness: 200, damping: 30, duration: 0.5 },
            }}
          >
            <Navigation key="white" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavigationMenu className="bg-white ">
      <div className="flex justify-between w-full">
        <Link href={"/"} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), " text-2xl ")}
          >
            MAMMA MIA
          </NavigationMenuLink>
        </Link>

        <div className="hidden md:flex items-center space-x-4 font-serif">
          <NavigationMenuList>
            {components.map((component) => (
              <NavigationMenuItem key={component.href}>
                <Link href={component.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {component.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuList className="flex items-center space-x-4 flex-col lg:flex-row ">
            {contact.map((contact) => (
              <ListItem
                key={contact.href}
                title={contact.text}
                href={contact.href}
                icons={{ leftIcon: contact.icon }}
                className="text-xl hover:underline underline-offset-2 "
              />
            ))}
          </NavigationMenuList>
        </div>
        <div className="flex md:hidden items-center space-x-4 font-serif">
          <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <SheetTrigger asChild>
              <Button
                slot="section"
                variant={"outline"}
                size={"icon"}
                aria-label="menu"
              >
                <AiOutlineMenu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-normal  text-2xl">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <NavigationMenuList className="flex-col my-4">
                {components.map((component) => (
                  <NavigationMenuItem
                    key={component.href}
                    className="w-full border-b-[1px]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={component.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          " text-xl w-full justify-start font-serif py-7 px-2"
                        )}
                      >
                        {component.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <NavigationMenuList className="">
                {contact.map((contact) => (
                  <ListItem
                    key={contact.href}
                    title={contact.text}
                    href={contact.href}
                    icons={{ leftIcon: contact.icon }}
                    className=" hover:underline underline-offset-2 "
                  />
                ))}
              </NavigationMenuList>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a"> & {
    icons?: {
      leftIcon?: IconType;
      rightIcon?: IconType;
    };
  }
>(({ className, title, children, icons, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md py-1 px-3  lg:py-3  leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex ">
            {icons?.leftIcon && <icons.leftIcon className="mr-2" />}{" "}
            <span>{title}</span>
            {icons?.rightIcon && <icons.rightIcon className="ml-2" />}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
