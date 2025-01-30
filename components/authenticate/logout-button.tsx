"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { useMenuStore } from "@/store/toggleMenuStore";
import { LogOut } from "lucide-react";

export default function LogOutButton () {
    const { isOpen } = useMenuStore()
    return (
      <Button asChild className="px-4 py-6 text-lg bg-[#2463EB]">
        <Link href={"/"} className="flex gap-2">
         <LogOut />
         <span className={`${!isOpen && "max-md:hidden"} ${isOpen && "hidden"}`}>
            LogOut
         </span>
        
        </Link>
      </Button>
   )
}