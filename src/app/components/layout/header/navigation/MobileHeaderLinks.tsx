'use client';

import { HeaderItem } from "@/type/menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

type HeaderLinkProps = {
  item: HeaderItem;
};

export default function MobileHeaderLinks({ item }: HeaderLinkProps) {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div className="relative w-full">
      {item.submenu ? (
        <div
          className="flex items-center justify-between w-full py-2 text-white cursor-pointer"
          onClick={handleToggle}
        >
          <span>{item.label}</span>
          <Icon
            icon="iconamoon:arrow-down-2-duotone"
            width={24}
            height={24}
            className={`transition-transform duration-300 ${
              submenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      ) : (
        <Link
          href={item.href}
          className="flex items-center justify-between w-full py-2 text-white"
        >
          <span>{item.label}</span>
        </Link>
      )}

      {item.submenu && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            submenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-midnight_text bg-white hover:bg-primary hover:text-white rounded border ps-3"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}