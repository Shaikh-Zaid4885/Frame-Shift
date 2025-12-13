"use client";

export default function Layout({ title, subtitle, children }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>

      <div className="content">
        {children}
      </div>
    </div>
  );
}
