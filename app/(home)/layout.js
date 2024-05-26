import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import NextNprogress from "@/components/libraries/NextNprogress";

import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense>
          <NextNprogress>
            <Header />
            <div className="container-fluid">
              <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
                  {children}
                </main>
              </div>
            </div>
            <Toastify />
            <BootstrapClient />
          </NextNprogress>
        </Suspense>
      </body>
    </html>
  );
}
