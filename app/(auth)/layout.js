import Toastify from "@/components/libraries/Toastify";
import "./globals.css";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense>
          {children}

          <Toastify />
        </Suspense>
      </body>
    </html>
  );
}
