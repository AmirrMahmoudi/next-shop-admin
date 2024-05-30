"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              href="/"
              className={pathname == "/" ? "nav-link active" : "nav-link"}
              aria-current="page"
            >
              <i className="bi bi-grid me-2"></i>
              داشبورد
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                pathname.includes("/users") ? "nav-link active" : "nav-link"
              }
              href="/users"
            >
              <i className="bi bi-people me-2"></i>
              کاربران
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                pathname.includes("/products") ? "nav-link active" : "nav-link"
              }
              href="/products"
            >
              <i className="bi bi-box-seam me-2"></i>
              محصولات
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                pathname.includes("/categories")
                  ? "nav-link active"
                  : "nav-link"
              }
              href="/categories"
            >
              <i className="bi bi-grid-3x3-gap me-2"></i>
              دسته بندی
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                pathname.includes("/orders") ? "nav-link active" : "nav-link"
              }
              href="/orders"
            >
              <i className="bi bi-basket me-2"></i>
              سفارشات
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                pathname.includes("/transactions")
                  ? "nav-link active"
                  : "nav-link"
              }
              href="/transactions"
            >
              <i className="bi bi-currency-dollar me-2"></i>
              تراکنش ها
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                pathname.includes("/coupons") ? "nav-link active" : "nav-link"
              }
              href="/coupons"
            >
              <i className="bi bi-percent me-2"></i>
              تخفیف ها
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
