"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import dollar from "/public/icons/dollar.png";
import stars from "/public/icons/stars.png";
import lifeincom from "/public/icons/Icon (2).png";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dummy data for the chart
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Income",
      data: [1000, 1500, 600, 2400, 1400, 2400, 900, 2950, 1200, 2000, 1550, 2800],
      borderColor: "#4F46E5",
      borderWidth: 2,
      pointRadius: 0,
      pointBackgroundColor: "#4F46E5",
      fill: false,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      min: 500, // Start Y-axis at 500
      ticks: {
        stepSize: 500, // Control tick intervals
      },
    },
  },
};

const FinanceChart = () => {
  return (
    <div className="p-10 h-lvh overflow-auto w-full "> 
      {/* Header */}
      <div className="mb-20 mt-10">
        <h2 className="text-3xl font-bold text-gray-900">Finance Chart</h2>
        <p className="text-lg text-gray-600 mb-4">Keep track of your financial plan</p>
      </div>

      {/* Menu Options */}
      <div className="flex justify-end space-x-4  relative">
        <h3 className="text-lg font-semibold text-gray-900 absolute top-0 left-10">Statistic</h3>
        <select className="p-2 border border-gray-300 rounded-lg bg-white shadow-md">
          <option>Income Chart</option>
          <option>Expense Chart</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg bg-white shadow-md">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* Chart Section */}
      <div className="pt-0 px-6 pb-10  rounded-lg w-full h-[400px]">
        <Line data={data} options={options} />
      </div>

   {/* Statistic Cards */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
  <div className="p-3 flex items-center bg-white border border-gray-200 rounded-xl shadow-sm">
    <div className="p-2 rounded-lg">
      <Image src={lifeincom} alt="Lifetime Income" width={30} height={30} />
    </div>
    <div className="ml-3">
      <h3 className="text-sm text-gray-500">Lifetime Income</h3>
      <p className="text-lg font-bold">$40,728</p>
    </div>
  </div>
  <div className="p-3 flex items-center bg-white border border-gray-200 rounded-xl shadow-sm">
    <div className="p-2 rounded-lg ">
      <Image src={dollar} alt="Lifetime Outcome" width={30} height={30} />
    </div>
    <div className="ml-3">
      <h3 className="text-sm text-gray-500">Lifetime Outcome</h3>
      <p className="text-lg font-bold">$30,239</p>
    </div>
  </div>
  <div className="p-3 flex items-center bg-white border border-gray-200 rounded-xl shadow-sm">
    <div className="p-2 rounded-lg ">
      <Image src={stars} alt="Bonus Income" width={30} height={30} />
    </div>
    <div className="ml-3">
      <h3 className="text-sm text-gray-500">Bonus Income</h3>
      <p className="text-lg font-bold">$2,490</p>
    </div>
  </div>
</div>


    </div>
  );
};

export default FinanceChart;