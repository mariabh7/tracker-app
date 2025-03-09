"use client";
import { useState } from "react";

export default function Transactions() {
  const transactions = [
    { id: "962298152", name: "Sherman Blankenship", date: "08 Jan, 2022", status: "Pending", amount: 217.9 },
    { id: "828928537", name: "Claudio Barrera", date: "06 Jan, 2022", status: "Completed", amount: 329.9 },
    { id: "741560657", name: "Clifton Daniel", date: "03 Jan, 2022", status: "Completed", amount: -549.9 },
    { id: "529040347", name: "Curt Boyer", date: "01 Jan, 2022", status: "Completed", amount: -238.9 },
    { id: "398078341", name: "Jeff Proctor", date: "31 Dec, 2021", status: "Completed", amount: -283.9 },
    { id: "197401837", name: "Rodger Fritz", date: "24 Dec, 2021", status: "Completed", amount: 237.9 },
    { id: "625478392", name: "John Doe", date: "23 Dec, 2021", status: "Pending", amount: 129.9 },
    { id: "925837459", name: "Jane Smith", date: "20 Dec, 2021", status: "Completed", amount: 478.5 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const currentItems = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex w-[100%] md:h-lvh overflow-y-auto">
      <div className="flex-1 p-6 bg-gray-50 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Recent Transactions</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="px-4 py-2 border rounded-full w-64" 
            />
            <button className="absolute right-3 top-2 text-white bg-indigo-600 p-1 rounded-full">
              <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 w-full overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="py-3 font-semibold text-gray-600 w-1/5">Transactions ID</th>
                  <th className="font-semibold text-gray-600 w-1/5">Name</th>
                  <th className="font-semibold text-gray-600 w-1/5">Date</th>
                  <th className="font-semibold text-gray-600 w-1/5">Status</th>
                  <th className="text-right font-semibold text-gray-600 w-1/5">Amount</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((tx) => (
                  <tr key={tx.id} className="py-4 border-b border-transparent">
                    <td className="py-4 text-gray-800">{tx.id}</td>
                    <td className="text-gray-800">{tx.name}</td>
                    <td className="text-gray-800">{tx.date}</td>
                    <td className={tx.status === "Pending" ? "text-yellow-500" : "text-green-500"}>
                      {tx.status}
                    </td>
                    <td className={`text-right ${tx.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                      {tx.amount < 0 ? "-" : ""}${Math.abs(tx.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button */}
        <div className="mb-6">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full">
            Download the Excel File
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 bg-white shadow-sm rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Items per page:</span>
            <select
              className="border px-2 py-1 rounded"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="text-gray-600">
            {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, transactions.length)} of ${transactions.length}`}
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 border rounded text-gray-400"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              «
            </button>
            <button
              className="p-2 border rounded text-gray-400"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              ‹
            </button>
            <button
              className="p-2 border rounded text-gray-400"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              ›
            </button>
            <button
              className="p-2 border rounded text-gray-400"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
