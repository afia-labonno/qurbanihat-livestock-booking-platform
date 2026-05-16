'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname = usePathname();
    console.log("Pathname :", pathname);
    const activeRoute = href === pathname ;

    return (
      <Link href={href} className={`${activeRoute ? " text-orange-800 font-bold text-xl" : ""}`}>
        {children}
      </Link>
    );
};

export default Navlink;