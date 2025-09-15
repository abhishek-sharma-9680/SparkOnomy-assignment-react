import { FaCrown, FaRegCalendarAlt } from "react-icons/fa";
import "./TimeFilter.css";

export default function TimeFilter() {
  return (
    <div className="time-filter">
      {/* Header */}
      <div className="time-filter-header">
        <span className="time-filter-title">Time Period</span>
        <span className="time-filter-date">dd:mm:yyyy - dd:mm:yyyy</span>
      </div>

      {/* Buttons */}
      <div className="time-filter-buttons">
        <button className="time-filter-btn">1Month</button>
        <button className="time-filter-btn active">3Months</button>
        <button className="time-filter-btn">
          1Year <FaCrown style={{ color: "purple" }} />
        </button>
        <button className="time-filter-btn">
          <FaRegCalendarAlt /> Custom
        </button>
      </div>
    </div>
  );
}
