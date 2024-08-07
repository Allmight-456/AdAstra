
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { navItems } from "@/constants";

type Props = {};

export default function Navbar({}: Props) {
  const user = false;

  

  return (
    <header
      className="px-4 h-14 sticky top-0
    inset-x-0 w-full bg-background/40 backdrop-blur-lg
    border-b border-border z-50"
    >
      <div
        className="flex items-center
        justify-between h-full mx-auto 
        md:max-w-screen-xl"
      >
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/favicon.ico"
              alt="image"
              width={20}
              height={20}
              className="w-10 h-10"
            />
            <span className="text-lg font-medium">AstraDynamic</span>
          </Link>
        </div>
        <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center justify-center gap-8 mx-3">
            <Link
              href={navItems[0].link}
              className="hover:text-foreground/80 text-sm"
            >
              {navItems[0].name}
            </Link>
            <Link
              href={navItems[1].link}
              className="hover:text-foreground/80 text-sm"
            >
              {navItems[1].name}
            </Link>
            <Link
              href={navItems[2].link}
              className="hover:text-foreground/80 text-sm"
            >
              {navItems[2].name}
            </Link>
            <Link
              href={navItems[3].link}
              className="hover:text-foreground/80 text-sm"
            >
              {navItems[3].name}
            </Link>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            "user button"
          ) : (
            <>
              <Link
                href="/sign-in"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex bg-purple-400",
                })}
              >
                Start free trial
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
