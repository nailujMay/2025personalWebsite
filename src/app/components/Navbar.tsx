"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname();

    const links = [
        {
            label: "about",
            href: "/about"
        },
        {
            label: "photos",
            href: "/photos"
        },
        {
            label: "video",
            href: "/video"
        },
        {
            label: "dev",
            href: "/dev"
        },
   ]


    return(
        <div className = "flex items-center px-[84px] py-[42px] justify-between  ">
            <div>
                <Link href="/">
                    <p>{"julian"}</p>
                </Link>
            </div>
            <div className = "flex items-center gap-[21px]">
            {links.map((link)=>{
                console.log("link.href",link.href);
                console.log("pathname",pathname);
                console.log(";alskdjf;alksdj",pathname === link.href);
                return(
                    <Link href={link.href} key={link.href} className = {`${pathname === link.href ? 'underline' : ''}`}>
                        {link.label}
                    </Link>
                )
            })}
            </div>
           
        </div>
    )
}