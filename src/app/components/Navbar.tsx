"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname();

    const links = [
        {
            label: "JY",
            href: "/"
        },
        {
            label: "PHOTOS",
            href: "/photos"
        },
        {
            label: "VIDEO",
            href: "/video"
        },
        {
            label: "ABOUT",
            href: "/about"
        },
        // {
        //     label: "DEV",
        //     href: "/dev"
        // },
   ]


    return(
        <div className = "flex items-center px-[60px] py-[60px] justify-between  ">
            <div className = "flex items-center gap-[21px]">
            {links.map((link)=>{
                console.log("link.href",link.href);
                console.log("pathname",pathname);
                console.log(";alskdjf;alksdj",pathname === link.href);
                return(
                    <Link href={link.href} key={link.href} className = {`${pathname === link.href ? 'underline' : ''}`}>
                        <p className = "text-text-primary">{link.label}</p>
                    </Link>
                )
            })}
            </div>
           
        </div>
    )
}