"use client";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import union from "/./public/icons/union.png";
import hamburgermenu from "/./public/icons/icon button.png";
import chatIcon from "/./public/icons/chat.png";
import settIcon from "/./public/icons/cog.png";

export default function Menu() {
  const router = useRouter();
  const [activePage, setActivePage] = useState("");
  const pathname = usePathname();
  // Update active page on router change
  useEffect(() => {
    setActivePage(router.pathname);
  }, [router.pathname]);

  const menuItems = [
    { name: "My Wallet", href: "/mywallet" },
    { name: "My Card", href: "/card" },
    { name: "Finance Chart", href: "/financeChart" },
    { name: "Recent Transactions", href: "/transactions" },
  ];

  return (
    <div className="hidden md:block font-medium bg-baseBlack p-8 md:h-lvh md:w-[28%] overflow-y-auto ">
      {/* Header */}
      <header className="flex justify-between">
        <div className="logo flex gap-2 items-center">
          <Image src={union} alt="Tracker Logo" width={30} />
          <h1 className="text-white capitalize text-3xl italic">Tracker</h1>
        </div>
        <div className="cursor-pointer">
          <Image src={hamburgermenu} alt="Menu Icon" width={45} height={45} />
        </div>
      </header>
      {/* Sidebar Menu */}
      <ul className="mt-10 flex flex-col gap-2">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`text-white p-4 rounded-sm flex items-center gap-3 cursor-pointer 
              ${
                pathname.startsWith(item.href)
                  ? "bg-violetSn"
                  : "hover:bg-violetSn"
              }`}
            onClick={() => router.push(item.href)}
          >
            <Image src={chatIcon} alt="Menu Icon" width={30} height={30} />
            <span className="capitalize text-[20px]">{item.name}</span>
          </li>
        ))}
      </ul>
      <div className=" mt-20 md:mt-96 ">
        <div className="settings mt-10 pl-4 pb-5 flex justify-start gap-2 w-full border-b-2 border-neutral-400 ">
          <Image src={settIcon} alt="Settings Icon" width={30} height={30} />
          <a
            href="/settings"
            className="capitalize text-[20px] text-white bold "
          >
            settings
          </a>
        </div>
        <div className=" pl-4 pt-5 pb-2 flex justify-start gap-2 items-center">
          <div className="user-pic bg-neutral-400 rounded-full w-10 h-10"></div>
          <span className="text-white capitalize text-[19px]">adrian tra</span>
        </div>
      </div>
      {/* Settings Icon */}
    </div>
  );
}
