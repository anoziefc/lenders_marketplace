"use client";
import Link from "next/link";
import React, { useState } from "react";


// Main App component that renders the NavigationMenu
export default function GuideToBusinessNavigation({
  initialItems,
}: {
  initialItems: GuideToBusinessNavigationNavItem[];
}) {
  const [navItems, setNavItems] = useState(initialItems);

  const handleItemClick = (clickedId: number) => {
    setNavItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === clickedId) {
          return { ...item, status: "active" };
        }

        return { ...item, status: "default" };
      })
    );
  };

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={[
            "flex items-center py-3 px-4 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-200",
            item.status === "active"
              ? "bg-green-800 text-white font-semibold"
              : "text-gray-700 hover:bg-green-50",

            item.id === 1 && "rounded-t-xl",
            item.id === navItems.length && "rounded-b-xl",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => handleItemClick(item.id)}
        >
          <div
            className={`
                w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-sm  text-green-800
                ${item.status === "active" ? "bg-white" : "bg-green-200"}
              `}
          >
            {item.id}
          </div>
          <div className="text-base sm:text-lg">{item.text}</div>
        </Link>
      ))}
    </div>
  );
}
