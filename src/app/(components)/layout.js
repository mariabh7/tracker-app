"use client";
import "./globals.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Menu from "@/app/(components)/menu/desktopmenu";
import Mobilemenu from "./menu/mobilemenu";
export default function MainpagesLayout({ children }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className=" md:flex md:gap-4"
    > {isMobile ? <Mobilemenu></Mobilemenu> : <Menu></Menu>}
      {children}
    </div>
  );
}
