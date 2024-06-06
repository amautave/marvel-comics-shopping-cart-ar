"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar } from "../sidebar/sidebar";
import CartInfo from "./cart-info";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <Sidebar />
      <nav className="flex h-16 mt-[80px] w-screen items-center justify-between">
        <div className=" ml-[150px] mr-[150px] flex items-center w-screen justify-between">
          <div className="flex items-center space-x-[150px]">
            <Link href={"/comics"}>
              <Image
                width={100}
                height={10}
                src="/marvel-logo.png"
                alt="logo"
              />
            </Link>
            <div className="space-x-8 tex-lg">
              <Link
                className={`${
                  pathname.includes("/comics") && "bg-gray-900"
                } text-white rounded-md px-3 py-2 font-medium`}
                aria-current="page"
                href="/comics"
              >
                Comics
              </Link>
              <Link
                href="/my-comics"
                className={`${
                  pathname === "/my-comics" && "bg-gray-900"
                } text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium`}
              >
                My comics
              </Link>
            </div>
          </div>
          <CartInfo />
        </div>
      </nav>
    </>
  );
}
