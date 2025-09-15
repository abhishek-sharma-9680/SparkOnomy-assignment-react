import React from "react";
import Header from "../components/Header";
import CreateInvoiceCard from "../components/CreateInvoiceCard";
import TimeFilter from "../components/TimeFilter";
import EarningsCard from "../components/EarningsCard";

import InvoiceList from "../components/InvoiceList";
import IncomeTrendChart from "../components/IncomeTrendChart";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Section: Header + Create Invoice */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Header />
        <CreateInvoiceCard />
      </div>
      
      <div
  style={{
    fontSize: "30px",
    fontWeight: "500",
    textAlign: "center",
    marginTop: "10px",
    background: "linear-gradient(45deg, #ff4ecd, #4a00e0)", 
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer"
  }}
>
  Or Upload an existing invoice and set payment reminder
</div>


      {/* Time Filter */}
      <TimeFilter />

      {/* Earnings + Chart Section */}
      
        {/* Earnings Cards (take 1 column on desktop) */}
  
          <EarningsCard />
   

       

        {/* Chart (take 2 columns on desktop) */}
      
        <IncomeTrendChart/>
 
      

      {/* Invoice List Section */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        {/* <h2 className="text-lg font-semibold mb-4">Recent Invoices</h2> */}
        <InvoiceList />
      </div>
    </div>
  );
}
