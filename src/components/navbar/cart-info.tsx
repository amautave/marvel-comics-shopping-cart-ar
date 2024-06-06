"use client";
import { Context } from "@/utils/context";
import { useContext } from "react";
import { CartIcon } from "../icons/cart";

export default function CartInfo() {
  const context = useContext(Context);
  return (
    <div
      className="cursor-pointer text-white"
      onClick={() => context.toggleSidebarVisibility()}
    >
      <div className="relative h-[30px] w-[30px]">
        <CartIcon className="absolute w-full h-full" height={30} width={30} />
        <div className="absolute z-10 bg-gray-500 -right-1 -top-2 text-xs w-[20px] h-[20px] rounded-full">
          <span className="h-full w-full flex items-center justify-center">
            {context.getCartItems().length}
          </span>
        </div>
      </div>
    </div>
  );
}
