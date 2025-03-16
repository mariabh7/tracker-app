"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import backu from "/./public/images/uniBack.png";
import payment from "/./public/images/PaymentIcon.png";
import { Eye, EyeOff } from "lucide-react";
import dots from "/./public/icons/dots.png";

export default function MyCard() {
  const defaultCard = {
    name: "aderian tra",
    cardNO: "4889 5666 7898 1000 3000",
    expiryDate: "12/28",
    cvv: "333",
  };

  // Load saved card data from localStorage
  const [card, setCard] = useState(defaultCard);
  const [showCVV, setShowCVV] = useState(false);

  useEffect(() => {
    const savedCard = localStorage.getItem("myCard");
    if (savedCard) {
      setCard(JSON.parse(savedCard));
    }
  }, []);

  // Save changes to localStorage
  const handleEdit = (field, value) => {
    const updatedCard = { ...card, [field]: value };
    setCard(updatedCard);
    localStorage.setItem("myCard", JSON.stringify(updatedCard));
  };

  const helpYOU = [
    { Qes: "check your cash flow ", color: "sweetOrange" },
    { Qes: "change primary card", color: "cherryMn" },
    { Qes: "pay tax ", color: "whisteriaMn" },
    { Qes: "make invoice ", color: "deepBlue" },
    { Qes: "refer a friend ", color: "VibBlue" },
  ];

  return (
    <div className="h-lvh overflow-auto w-full">
      <div className="md:px-8 md:py-14">
        <header className="mt-7 pt-24 px-4 md:p-0 md:mt-0">
          <h1 className="text-[32px] text-black font-bold capitalize">
            my card
          </h1>
          <p className="text-neutral-400 leading-[50px] tracking-wide">
            keep track of your financial plan
          </p>
        </header>

        <section className="md:grid md:grid-cols-2 mt-10 md:mx-0 mx-4 md:gap-7">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center bg-[#F8FAFC] px-3 py-3 border-2 border-b-[#E2E8F0] rounded-md">
              <h3 className="capitalize text-[20px] font-medium text-neutral-900">
                primary card
              </h3>
              <button className="text-gray-400 font-medium text-4xl">›</button>
            </div>

            {/* Card Background */}
            <div className="bg-[#F8FAFC] pt-10 px-3 md:px-7 pb-5 border-2 border-b-[#E2E8F0] rounded-md">
              <div className="mb-2">
                <div className="relative rounded-2xl w-full md:w-[450px] h-[200px] bg-[#0055ff]">
                  <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-[#658ddd] to-[#91b2ff9f] mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-texture bg-cover bg-no-repeat mix-blend-multiply"></div>
                  <div className="absolute right-0 bottom-0 opacity-10 mix-blend-multiply">
                    <Image src={backu} width={160} alt="image" />
                  </div>
                  <span className="absolute bottom-3 left-5 text-white uppercase text-lg font-medium md:z-10">
                    {card.name}
                  </span>
                  <Image
                    src={payment}
                    width={40}
                    alt="image"
                    className="absolute top-0 left-0 md:z-20 m-4"
                  />
                </div>

                {/* Editable Card Information */}
                <div className="mt-5">
                  <h3 className="capitalize text-xl mb-7 font-medium text-neutral-900">
                    card information
                  </h3>

                  <div className="text-[#47566f] mb-5 capitalize flex justify-between items-center">
                    card no.
                    <input
                      type="text"
                      className="bg-[#F8FAFC] hover:bg-slate-300 focus:outline-none text-right"
                      value={card.cardNO}
                      onChange={(e) => handleEdit("cardNO", e.target.value)}
                    />
                  </div>

                  <div className="text-[#47566f] mb-5 capitalize flex justify-between items-center">
                    expiry date
                    <input
                      type="text"
                      className="bg-[#F8FAFC]  hover:bg-slate-300 focus:outline-none text-right"
                      value={card.expiryDate}
                      onChange={(e) => handleEdit("expiryDate", e.target.value)}
                    />
                  </div>

                  <div className="text-[#47566f] capitalize flex justify-between items-center">
                    CVV (3-digit security code)
                    <div className="flex items-center gap-2">
                      <input
                        type={showCVV ? "text" : "password"}
                        className=" bg-[#F8FAFC]  hover:bg-slate-300 focus:outline-none text-right w-10"
                        value={card.cvv}
                        onChange={(e) => handleEdit("cvv", e.target.value)}
                      />
                      <button onClick={() => setShowCVV(!showCVV)}>
                        {showCVV ? <Eye width={20} /> : <EyeOff width={20} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center bg-[#F8FAFC] px-6 py-10 mb-3 rounded-lg">
              <p className="mt-2 font-normal text-slate-400 capitalize text-xl">
                create new wallet
              </p>
              <button className="bg-violetMain flex items-center text-center text-white text-2xl w-10 h-10 rounded-full px-3 py-2">
                +
              </button>
            </div>
          </div>

          {/* Help Section */}
          <div className="relative bg-[#F8FAFC] px-3 py-3 border-2 border-b-[#E2E8F0] rounded-md mb-4">
            <div className="flex justify-between items-center">
              <h3 className="capitalize text-2xl font-light text-neutral-900">
                see our help
              </h3>
              <Image src={dots} width={50} alt="3-dots" />
            </div>

            <div className="mt-6">
              <ul className="flex flex-col gap-6">
                {helpYOU.map((q) => (
                  <li
                    key={q.Qes}
                    className="px-2 cursor-pointer text-xl py-2 font-medium rounded-sm border-b-2 border-lightGrey"
                  >
                    <div
                      className={`flex justify-between px-2 border-l-4 py-3 border-l-${q.color}`}
                    >
                      {q.Qes} <span>›</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button className="py-3 px-4 rounded-full border-2 border-lightGrey capitalize mt-10 md:mt-0 md:absolute md:bottom-2">
              look more
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
