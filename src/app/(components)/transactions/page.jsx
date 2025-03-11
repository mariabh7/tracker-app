"use client";
import { useState } from "react";

export default function Transactions() {
  const transactions = [
    { id: "962298152", name: "Sherman Blankenship", date: "08 Jan, 2022", status: "Pending", amount: 217.9 },
    { id: "828928537", name: "Claudio Barrera", date: "06 Jan, 2022", status: "Pending", amount: 329.9 },
    { id: "741560657", name: "Clifton Daniel", date: "03 Jan, 2022", status: "Completed", amount: -549.9 },
    { id: "529040347", name: "Curt Boyer", date: "01 Jan, 2022", status: "Completed", amount: -238.9 },
    { id: "398078341", name: "Jeff Proctor", date: "31 Dec, 2021", status: "Completed", amount: -283.9 },
    { id: "197401837", name: "Rodger Fritz", date: "24 Dec, 2021", status: "Completed", amount: 237.9 },
    { id: "625478392", name: "John Doe", date: "23 Dec, 2021", status: "Pending", amount: 129.9 },
    { id: "925837459", name: "Jane Smith", date: "20 Dec, 2021", status: "Completed", amount: 478.5 },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  
  // Filtrage des transactions selon le terme de recherche
  const filteredTransactions = transactions.filter((tx) =>
    tx.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.id.includes(searchTerm)
  );
  
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const currentItems = filteredTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex w-full h-lvh overflow-auto">
      <div className="flex-1 p-4 md:p-6 bg-gray-50 w-full">
        {/* Header with Logo and Menu (mobile) */}
        <div className="flex justify-between items-center mb-12 md:hidden">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
              </svg>
            </div>
            <span className="text-indigo-600 font-medium">Tracker</span>
          </div>
          <button className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Header section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Recent Transactions</h1>
          
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-full w-full"/>
            <button className="absolute right-3 top-2 text-white bg-indigo-600 p-2 rounded-full">
              <svg width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Column Headers */}
        <div className="grid grid-cols-12 gap-2 mb-2 md:hidden bg-white p-2">
          <div className="col-span-3 text-left">
            <span className="font-medium text-gray-600 text-sm">ID</span>
          </div>
          <div className="col-span-5 text-left">
            <span className="font-medium text-gray-600 text-sm">User</span>
          </div>
          <div className="col-span-2 text-left">
            <span className="font-medium text-gray-600 text-sm">Status</span>
          </div>
          <div className="col-span-2 text-right">
            <span className="font-medium text-gray-600 text-sm">Amount</span>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-6 w-full overflow-x-auto">
          {filteredTransactions.length > 0 ? (
            <div className="min-w-full">
              {/* Desktop Table - Unchanged */}
              <table className="w-full table-fixed border-collapse hidden md:table">
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
              
              {/* Mobile List View - Responsive part kept as in your original code */}
              <div className="md:hidden">
                {currentItems.map((tx, index) => (
                  <div key={tx.id} className={`py-3 ${index !== currentItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="grid grid-cols-12 gap-2">
                      {/* Première colonne avec uniquement l'ID */}
                      <div className="col-span-2 flex flex-col justify-center">
                        <div className="text-xs text-gray-500">{tx.id}</div>
                      </div>
                      
                      {/* Deuxième colonne avec le nom et la date */}
                      <div className="col-span-5 flex flex-col">
                        <div className="font-medium text-gray-800">{tx.name}</div>
                        <div className="text-xs text-gray-500">{tx.date}</div>
                      </div>
                      
                      {/* Statut */}
                      <div className="col-span-3 self-center">
                        <div className={tx.status === "Pending" ? "text-yellow-500" : "text-green-500"}>
                          {tx.status}
                        </div>
                      </div>
                      
                      {/* Montant aligné à droite */}
                      <div className={`col-span-2 text-right self-center ${tx.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                        {tx.amount < 0 ? "-" : ""}${Math.abs(tx.amount).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-gray-600 text-lg">No transactions found for "{searchTerm}"</p>
              <p className="text-gray-500 mt-2">Try with a different search term</p>
            </div>
          )}
        </div>

        {/* Download Button - Unchanged */}
        <div className="mb-6">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full w-full md:w-auto">
            Download the Excel File
          </button>
        </div>

        {/* Pagination - Modified to have "Items per page" and count on same line in mobile */}
        {filteredTransactions.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-sm rounded-lg gap-4">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              {/* Modified for mobile: Items per page and count are on the same line */}
              <div className="flex items-center justify-between w-full md:w-2/3 mb-4 md:mb-0">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 text-sm md:text-base">Items per page:</span>
                  <select
                    className="border px-2 py-1 rounded text-sm md:text-base"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1); // Reset to first page when changing items per page
                    }}
                  >
                    <option value={6}>6</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={100}>100</option>
                  </select>
                </div>
                
                {/* Pagination counter - now inline with Items per page on mobile */}
                <div className="text-gray-600 text-sm md:text-base">
                  {`${Math.min((currentPage - 1) * itemsPerPage + 1, filteredTransactions.length)}-${Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of ${filteredTransactions.length}`}
                </div>
              </div>
              
              {/* Pagination buttons */}
              <div className="flex justify-center w-full md:w-1/3 md:justify-end space-x-1">
                <button
                  className="p-2 border rounded text-gray-400 disabled:opacity-50 flex items-center justify-center w-8 h-8"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                >
                  «
                </button>
                <button
                  className="p-2 border rounded text-gray-400 disabled:opacity-50 flex items-center justify-center w-8 h-8"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  ‹
                </button>
                <button
                  className="p-2 border rounded text-gray-400 disabled:opacity-50 flex items-center justify-center w-8 h-8"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  ›
                </button>
                <button
                  className="p-2 border rounded text-gray-400 disabled:opacity-50 flex items-center justify-center w-8 h-8"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  »
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
