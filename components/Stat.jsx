"use client";

export default function Stat({ label, value, icon, onClick }) {
  return (
    <div className="stat" onClick={onClick}>
      <div className="stat-icon">{icon}</div>
      <strong className="stat-value">{value}</strong>
      <span className="stat-label">{label}</span>
    </div>
  );
}
