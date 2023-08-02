"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Schedule from "@/components/schedule/Schedule";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const pathName = usePathname();

  const toggleNavList = () => {
    if (listRef && listRef.current) {
      listRef.current.classList.toggle("hidden");
    }
  };

  const links = [
    { path: "/", label: "home" },
    { path: "/services", label: "services" },
    { path: "/blog", label: "blog" },
    { path: "/faq", label: "FAQ" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <li
        key={link.path}
        className={`hover:text-primary capitalize transition-all duration-300 mb-2 md:mb-0 ${
          link.path === pathName && "text-primary"
        }`}
      >
        <Link href={link.path}>{link.label}</Link>
      </li>
    );
  });

  return (
    <header className="px-10 md:px-14 lg:px-20">
      <nav className="py-2 md:py-0 md:flex items-center justify-between relative">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-xl">
            <Link href="/">
              Simple <span className="text-blue">Smile</span>
            </Link>
          </div>
          <span
            onClick={toggleNavList}
            className="flex items-center justify-between cursor-pointer border-2 px-3 py-2 rounded-md md:hidden hover:text-primary transition-all duration-300"
          >
            <FaBars />
          </span>
        </div>
        <ul
          ref={listRef}
          className="hidden absolute right-0 left-0 text-center py-4 md:static md:flex md:w-9/12 lg:w-2/4 justify-between items-center z-50 bg-white border-b md:border-b-0"
        >
          {renderedLinks}
          <div className="flex items-center justify-center">
            <Schedule>make a schedule</Schedule>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
