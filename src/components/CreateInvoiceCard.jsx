import "./CreateInvoiceCard.css";

export default function CreateInvoiceCard() {
  return (
    <div className="create-invoice-card">
      <div className="icon-circle">
        <span className="plus-icon">+</span>
      </div>
      <h2 className="title-text">Create New Invoice</h2>
      <p className="subtitle-text">
        Start by creating and sending new invoice
      </p>
    </div>
  );
}
