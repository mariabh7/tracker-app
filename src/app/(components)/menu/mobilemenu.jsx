import Image from "next/image";
import unionp from "/./public/icons/union-purple.png";
import phonemenu from "/./public/icons/menu-alt-3.png";
export default function Mobilemenu() {
  return (
    <div className=" w-screen bg-white fixed block md:hidden border-b-2 border-lightGrey p-5">
      <header className="flex justify-between items-center">
        <div className=" flex justify-start items-center gap-3">
          <Image src={unionp} width={20} alt="logo-tracker" />
          <span className=" text-violetMain font-interTight font-normal capitalize italic ">
            tracker
          </span>
        </div>
        <div className="">
          <Image src={phonemenu} width={30} alt="menu" />
        </div>
      </header>
    </div>
  );
}
