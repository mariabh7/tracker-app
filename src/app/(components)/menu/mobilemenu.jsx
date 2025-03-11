"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import unionp from "/./public/icons/union-purple.png";
import phonemenu from "/./public/icons/menu-alt-3.png";
import union from "/./public/icons/union.png";
import hamburgermenu from "/./public/icons/icon button.png";
import chatIcon from "/./public/icons/chat.png";
import settIcon from "/./public/icons/cog.png";

// function starts here 
export default function Mobilemenu() {
  const router = useRouter();
  const [activePage, setActivePage] = useState("");
  const pathname = usePathname();
  // Update active page on router change
  useEffect(() => {
    setActivePage(router.pathname);
  }, [router.pathname]);
  // menu items
  const menuItems = [
    { name: "My Wallet", href: "/mywallet" },
    { name: "My Card", href: "/card" },
    { name: "Finance Chart", href: "/financeChart" },
    { name: "Recent Transactions", href: "/transactions" },
  ];
  //  make menu appear
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" relative block md:hidden ">
      {/* appeared part header 1 */}
      <header className="flex z-10 bg-white w-full p-5 fixed  border-b-2 border-lightGrey justify-between items-center">
        <div className=" flex justify-start items-center gap-3">
          <Image src={unionp} width={20} alt="logo-tracker" />
          <span className=" text-violetMain font-interTight font-normal capitalize italic ">
            tracker
          </span>
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src={phonemenu} width={30} alt="menu" />
        </div>
      </header>
      {/*  real mobile menu that appear when you click on the phonemenu image  */}
      <div
        className={`p-5 w-80 bg-baseBlack h-lvh overflow-auto absolute  z-50   text-white right-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        id="mobileM"
      >
        <div className=" flex justify-between ">
          <div className="logo flex gap-2 items-center">
            <Image src={union} alt="Tracker Logo" width={30} />
            <h1 className="text-white capitalize text-2xl italic">Tracker</h1>
          </div>
          <div className="cursor-pointer">
            <Image
              src={hamburgermenu}
              alt="Menu Icon"
              width={40}
              height={40}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
        {/* automalically filled ul just like the desktop one same code different size and implementation */}
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
        <div className=" absolute bottom-0 mb-5 w-72 ">
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
            <span className="text-white capitalize text-[19px]">
              adrian tra
            </span>
          </div>
        </div>
        {/* Settings Icon */}
      </div>
    </div>
  );
}
