import { useState } from "react";

export default function SinglePageApp() {
  const [page, setPage] = useState("Home");

  return (
    <div className="container">
      <nav className="navbar">
        <span onClick={() => setPage("Home")}>Home</span>
        <span onClick={() => setPage("About")}>About</span>
        <span onClick={() => setPage("Contact")}>Contact</span>
      </nav>

      <div className="page">
        <h1>{page} Page</h1>
      </div>
    </div>
  );
}
