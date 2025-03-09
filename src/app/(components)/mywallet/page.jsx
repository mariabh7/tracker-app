"use client";
import Image from "next/image";
import dots from "/./public/icons/dots.png";
import requestp from "/./public/icons/requestp.png";
import sendp from "/./public/icons/sendp.png";
import { useState } from "react";
// wallets icon
import heart from "/./public/icons/Wallet Icon.png";
import wallet1 from "/./public/icons/Wallet Icon (1).png";
import wallet2 from "/./public/icons/Wallet Icon (2).png";
import wallet3 from "/./public/icons/Wallet Icon (3).png";
import wallet4 from "/./public/icons/Wallet Icon (4).png";
import wallet5 from "/./public/icons/Wallet Icon (5).png";
// calculate the current date
const today = new Date();
const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(today);
export default function Mywallet() {
  {
    /* code for not repeating same divsmand things */
  }
  const [wallets, setWallets] = useState([
    {
      name: "emergency fund",
      icon: heart,
      date: formattedDate,
      income: 400,
      total: 1000,
    },
    {
      name: "travel plan",
      icon: wallet1,
      date: formattedDate,
      income: 10000,
      total: 20000,
    },
    {
      name: "education",
      icon: wallet2,
      date: formattedDate,
      income: 7000,
      total: 10000,
    },
    {
      name: "food and groceries",
      icon: wallet3,
      date: formattedDate,
      income: 300,
      total: 1000,
    },
    {
      name: "repair vehicle",
      icon: wallet4,
      date: formattedDate,
      income: 800,
      total: 1000,
    },
    {
      name: "donation",
      icon: wallet5,
      date: formattedDate,
      income: 60,
      total: 100,
    },
  ]);
  const addWallet = () => {
    const name = prompt("Enter wallet name:");
    const income = parseFloat(prompt("Enter income amount:"));
    const total = parseFloat(prompt("Enter total amount:"));
    const icons = heart;
    if (name && !isNaN(income) && !isNaN(total)) {
      setWallets([
        ...wallets,
        {
          name,
          icon: icons,
          date: formattedDate,
          income,
          total,
        },
      ]);
    } else {
      alert("something is messing, try again later ");
    }
  };
  return (
    <div className=" md:w-[75%] h-lvh overflow-y-auto ">
      <div className=" md:px-4  md:py-14">
        <div className=" pt-24 px-4 md:p-0">
          {/* my wallet head - title */}
          <header className="mt-10 md:mt-0">
            <h1 className=" text-4xl text-black font-bold capitalize ">
              {" "}
              my wallet
            </h1>
            <p className="text-neutral-400 leading-[50px] tracking-wide ">
              {}
              keep track your financial plan
            </p>
          </header>

          {/* user info -name total money - and a send and request payment bottons */}
          <section className=" py-10 md:py-7 flex gap-4 flex-col md:flex-row md:justify-between">
            {/* first side hello use + total amount of money */}
            <div className=" border-2 p-4  md:p-7 rounded-md  md:w-[70%] border-lightGrey  ">
              <div className="flex justify-between items-center ">
                <h1 className="capitalize text-2xl md:text-4xl font-semibold ">
                  {" "}
                  👋 hi <span id="name">aderian</span> !
                </h1>
                <Image src={dots} alt="3-dots" width={45} />
              </div>
              <h2 className="sum font-light mt-5 text-black  text-xl md:text-3xl ">
                $<span>123.45</span>{" "}
              </h2>{" "}
            </div>

            {/* receive or send payment section */}
            <div className="border-2 md:w-[40%]  grid grid-cols-2 rounded-md border-lightGrey  ">
              <div className=" flex flex-col p-2 md:p-4 items-center ">
                <Image src={sendp} alt="request payement" width={65}></Image>
                <span className="mt-2 text-neutralBlack font-semibold capitalize">
                  send a payment
                </span>
              </div>
              <div className=" flex flex-col border-l-2 border-lightGrey p-2  md:p-4 items-center ">
                <Image src={requestp} alt="request payement" width={65}></Image>
                <span className="mt-2 text-neutralBlack font-semibold capitalize">
                  request a payment
                </span>
              </div>
            </div>
          </section>
        </div>
        {/* wallet section */}
        <section className=" bg-violet200 md:bg-white flex flex-col p-4 md:p-0 gap-2 md:grid md:grid-cols-3 flex-wrap md:gap-2">
          {wallets.map((item) => (
            <div
              className=" border-lightGrey bg-white px-6 py-4 md:px-3 md:py-4 md:w-full rounded-md border-2"
              key={item.name}
            >
              <div className="flex justify-start gap-3 items-center ">
                <Image src={item.icon} alt="hearts" width={40} />
                <h3 className=" text-black capitalize text-xl font-medium">
                  {item.name}
                </h3>
              </div>
              <div className="mt-3 ">
                {" "}
                <span className="capitalize text-coolGrey text-[16px] tracking-wide ">
                  {" "}
                  last paid on {item.date}
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center ">
                  <p className="  md:text-xl text-violetMain">
                    <span>${item.income} </span>
                    <span className=" text-sm md:text-base text-neutral-400">
                      /{item.total}
                    </span>
                  </p>

                  <span className="text-coolGrey">
                    {(item.income * 100) / item.total} %
                  </span>
                </div>
                <div className="  mt-2 md:mt-4  w-full border-2 border-lightGrey  rounded-full h-3 md:h-4">
                  <div
                    className="bg-violetMain rounded-full h-2 md:h-3"
                    style={{ width: `${(item.income * 100) / item.total}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <section className="bg-violet200 p-10 flex flex-col items-center justify-center">
        <button
          onClick={addWallet}
          className="bg-violetMain text-center text-white  text-3xl w-16 h-16 rounded-full p-2"
        >
          {" "}
          +
        </button>
        <p className="mt-2 font-medium text-violetMain capitalize text-xl">
          create new wallet{" "}
        </p>
      </section>
    </div>
  );
}
