'use client';

import { HeaderItem } from "@/type/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";


type HeaderLinkProps = {
  item: HeaderItem;
  sticky:boolean;
}

export default function HeaderLinks({ item, sticky }: HeaderLinkProps) {
 
  const path = usePathname();

 

  return (
    <>
    <div className="relative group">
      <Link
        href={item.href}
        className={`text-base font-normal flex items-center transition-colors duration-300
          ${sticky ? "text-dark hover:text-prim" : "text-white hover:text-prim-light"}
          ${path === item.href ? "font-semibold" : ""}`}
      >
        {item.label}

        {item.submenu && (
          <Icon 
            icon="iconamoon:arrow-down-2-duotone"
            width={22}
            height={22}
            className="ml-1 transition-transform duration-300 group-hover:rotate-180"
          />
        )}
      </Link>

      {item.submenu && (
        <div className="absolute left-0 top-10 rounded-lg mt-1 w-60 bg-white shadow-lg
          overflow-hidden opacity-0 scale-95 invisible group-hover:opacity-100
          group-hover:scale-100 group-hover:visible transition-all duration-300"
        >
          {item.submenu.map((subItem, index) => (
            <Link 
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 transition ${
                path === subItem.href
                  ? "text-white bg-dark"
                  : "text-midnight_text hover:bg-dark hover:text-white"
              }`}
            >
              {subItem.label} 
            </Link>
          ))}
        </div>
      )}
    </div>
    </>
  );
}