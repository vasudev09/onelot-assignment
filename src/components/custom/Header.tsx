"use client";

import { NavMenuType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const menu: NavMenuType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/",
    sub: true,
    subMenu: [
      { name: "Dealer Inventory Loans", link: "/products/dealer-inventory-loans" },
      { name: "Dealer Management System", link: "/products/dealer-management-system" },
      { name: "Dealer Working Capital", link: "/products/dealer-working-capital" },
    ],
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div ref={headerRef} className="w-full sticky top-0 z-10 bg-white border-b border-gray-300">
      <header
        className={`flex flex-col md:flex-row max-w-screen-2xl mx-auto justify-between items-start md:items-center px-2 py-2.5 sm:px-4 lg:px-10`}
      >
        <div className={`flex flex-row items-center justify-between w-full md:w-fit`}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={100}
              className="w-[100px] h-[36px]"
              quality={100}
            />
          </Link>
          <div className="flex flex-row items-center gap-4 md:hidden">
            <LinkButton
              href="/login"
              className="bg-transparent border border-gray-300 hidden sm:block"
            >
              <span className="text-black">Login</span>
            </LinkButton>
            <LinkButton href="/inquire-now" className="hidden sm:block">
              Inquire now
            </LinkButton>
            <div
              className={`p-1.5 hover:bg-[#F3F4F6] rounded-md ${openMenu ? "bg-[#F3F4F6]" : ""}`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="sr-only">Open Main Menu</span>
              <Menu size={28} color="#6B7280" />
            </div>
          </div>
        </div>
        {openMenu || windowWidth > 768 ? (
          <nav className="w-full md:w-fit">
            <ul className="md:ml-10 lg:ml-16 mt-4 md:mt-0 flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-4 lg:gap-10">
              {menu.map((item, index) => (
                <li key={index} className="w-full">
                  {item.sub ? (
                    <div className="relative">
                      <div
                        className="cursor-pointer p-3 md:p-0 w-full text-[#374151] hover:text-primary font-medium flex flex-row items-center"
                        onClick={() => setActiveDropdown((prev) => (prev === index ? null : index))}
                      >
                        <span>{item.name}</span>
                        <span className="ml-1.5">
                          <ChevronDown size={20} />
                        </span>
                      </div>
                      {activeDropdown === index && (
                        <ul className="absolute top-10 left-0 bg-white z-20 border border-[#E5E7EB] py-1 rounded shadow-[_0px_1px_3px_0px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                          {item.subMenu?.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.link}
                                className="block px-4 py-2 text-[#374151] hover:text-primary text-sm font-medium whitespace-nowrap"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className="block p-3 md:p-0 w-full text-[#374151] hover:text-primary font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        {openMenu || windowWidth > 768 ? (
          <div className="ml-auto sm:hidden flex md:flex flex-row items-center gap-4 w-full md:w-fit">
            <LinkButton href="/login" className="bg-transparent border border-gray-300 flex-1">
              <span className="text-black">Login</span>
            </LinkButton>
            <LinkButton href="/inquire-now" className="flex-1">
              Inquire now
            </LinkButton>
          </div>
        ) : null}
      </header>
    </div>
  );
}
