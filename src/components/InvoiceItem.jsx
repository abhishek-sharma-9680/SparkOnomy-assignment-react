const statusClasses = {
    Paid: "bg-green-100 text-green-600",
    Unpaid: "bg-gray-200 text-gray-600",
    Overdue: "bg-red-100 text-red-600",
    "Partially Paid": "bg-yellow-100 text-yellow-600",
    Awaited: "bg-purple-100 text-purple-600",
    Draft: "bg-gray-100 text-gray-500",
  };
  
  export default function InvoiceItem({ client, amount, date, status }) {
    return (
      <div className="flex justify-between items-center border-b py-2 text-sm">
        <div>
          <p className="font-medium">{client}</p>
          <p className="text-xs text-gray-500">
            ${amount} • Due {date}
          </p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs ${statusClasses[status]}`}
        >
          {status}
        </span>
      </div>
    );
  }
  