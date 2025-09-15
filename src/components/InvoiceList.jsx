import './InvoiceList.css';

const invoices = [
  {
    name: 'Client Name',
    amount: '₹1,25,000',
    dueDate: '2024-06-15',
    status: 'Update Status',
    type: 'action',
  },
  {
    name: 'Client Name',
    amount: '₹1,25,000',
    dueDate: '2024-06-15',
    status: 'Unpaid',
    type: 'unpaid',
  },
  {
    name: 'Income Trend',
    amount: '₹1,25,000',
    dueDate: '2024-06-15',
    status: 'Disputed',
    type: 'disputed',
  },
  {
    name: 'Income Trend',
    amount: '₹1,25,000',
    dueDate: '2024-06-15',
    status: 'Paid',
    type: 'paid',
  },
  {
    name: 'Income Trend',
    amount: '₹1,25,000',
    dueDate: '2024-06-15',
    status: 'Paid',
    type: 'paid',
  },
  {
    name: 'Income Trend',
    amount: '₹1,25,000',
    dueDate: '2024-06-15',
    status: 'Partially Paid',
    type: 'partial',
  },
  {
    name: 'Income Trend',
    amount: '₹1,25,000',
    dueDate: '2024-06-15',
    status: 'Paid',
    type: 'paid',
  },
];

export default function InvoiceList() {
  return (
    <div className="invoice-list">
      <h3 className="title">Your Invoices</h3>
      {invoices.map((invoice, index) => (
        <div className="invoice-card" key={index}>
          <div className="invoice-info">
            <p className="invoice-name">{invoice.name}</p>
            <p className="invoice-details">
              {invoice.amount}, Due: {invoice.dueDate}
            </p>
          </div>

          {invoice.type === 'action' ? (
            <select className="invoice-dropdown">
              <option>Update Status</option>
              <option>Paid</option>
              <option>Unpaid</option>
              <option>Disputed</option>
              <option>Partially Paid</option>
            </select>
          ) : (
            <span className={`status-badge ${invoice.type}`}>{invoice.status}</span>
          )}
        </div>
      ))}
    </div>
  );
}
