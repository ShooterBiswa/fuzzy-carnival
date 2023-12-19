"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import content from "./content";
import Menu from "../mobile_header/Menu";

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <nav className="flex items-center max-w-6xl justify-between w-full px-8">
      <div className="transition-all delay-300">
        <Link
          href={"/"}
          className="hidden md:flex font-semibold text-2xl tracking-tighter"
        >
          Biswajeet
        </Link>

        {/* mobile view */}
        <Link
          href={"/"}
          className="md:hidden font-semibold text-2xl tracking-tighter rounded-lg border p-1 px-3 flex justify-center"
        >
          BS
        </Link>
      </div>

      <div className="hidden md:flex space-x-12 text-base items-center justify-center">
        {content.map((line) => {
          return (
            <Link
              key={line.id}
              href={`${line.link}`}
              className={
                currentRoute === `${line.link}`
                  ? "text-blue-500 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-500 hover:dark:text-neutral-400 hover:text-blue-400"
              }
            >
              {line.name}{" "}
            </Link>
          );
        })}
      </div>

      <button className="hidden md:flex bg-neutral-800 text-white dark:bg-neutral-700 hover:bg-blue-500 hover:dark:bg-white hover:dark:text-black transition-colors delay-200 px-5 p-2 rounded-lg font-semibold tracking-wide">
        Let's talk
      </button>

      {/* mobile view */}
      <Menu />
    </nav>
  );
};

export default Navbar;
