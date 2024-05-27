"use client";

import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="navbar text-center navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        webprog.io
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="w-100"></div>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap d-flex align-items-center">
          {user && (
            <>
              <span className="nav-link">{user.name}</span>
              <a className="nav-link px-3" href="#">
                خروج
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
