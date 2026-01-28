import Link from "next/link";
import React from "react";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
// import { createClient } from "@/prismicio";
// import { PrismicNextLink } from "@prismicio/next";

export async function Header() {
  // const client = createClient();
  // const settings = await client.getSingle("settings");

  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-4 md:grid-cols-[1fr,auto,1fr] md:gap-6">
        <Link href="/" className="justify-self-start">
          <Logo className="text-brand-purple ~h-10/16 md:~h-12/20" />
        </Link>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-3 ~text-xs/sm md:gap-8 md:flex-nowrap md:justify-center md:~text-lg/xl">
            {/* {settings.data.navigation.map((item) => (
              <li key={item.link.text}>
                <PrismicNextLink field={item.link} className="~text-lg/xl" />
              </li>
            ))} */}
            <li className="inline-block">
              <a href="#team" className="hover:underline ~text-xs/sm md:~text-sm/xl">
                Team
              </a>
            </li>
            <li className="inline-block">
              <a href="#rider-stories" className="hover:underline ~text-xs/sm md:~text-sm/xl">
                Stories
              </a>
            </li>
            <li className="inline-block">
              <a href="#rider-queries" className="hover:underline ~text-xs/sm md:~text-sm/xl">
                Queries
              </a>
            </li>
            <li className="inline-block">
              <a href="#about" className="hover:underline ~text-xs/sm md:~text-sm/xl">
                About
              </a>
            </li>
            <li className="inline-block">
              <a href="#pricing" className="hover:underline ~text-xs/sm md:~text-sm/xl">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)" className="~text-xs/sm md:~text-base">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}