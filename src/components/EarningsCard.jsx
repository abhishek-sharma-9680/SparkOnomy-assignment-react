import './EarningsCard.css';

export default function EarningsCard() {
  return (
    <>
    <div className="earnings-grid">
      <div className="earnings-card">
        <p className="label">Total Earnings</p>
        <h2 className="amount">$1,25,000</h2>
      </div>
      
    </div>
    <div className="earnings-grid2">
      <div className="earnings-card">
        <p className="label">Payment Awaited</p>
        <h2 className="amount">$25,000</h2>
      </div>
      <div className="earnings-card">
        <p className="label">Payment Overdue</p>
        <h2 className="amount">$25,000</h2>
      </div>
      
    </div>
    </>
    
  );
}
