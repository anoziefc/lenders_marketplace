"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";


// The Breadcrumb functional component.
const Breadcrumb: React.FC = () => {
  const pathname = usePathname();

  // Split the pathname into segments, filtering out empty strings
  // e.g., "/products/electronics/laptops" -> ["products", "electronics", "laptops"]
  const pathSegments = pathname.split("/").filter((segment: string) => segment);

  // Generate breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = pathSegments.map(
    (segment: string, index: number) => {
      // Construct the path for the current breadcrumb item
      // e.g., "products" -> "/products"
      // "electronics" (at index 1) -> "/products/electronics"
      const path = "/" + pathSegments.slice(0, index + 1).join("/");

      // Capitalize the first letter of each segment for the label
      // Replace hyphens with spaces for better readability
      const label = segment
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return { label, path };
    }
  );

  // Add a "Home" breadcrumb at the beginning
  const homeBreadcrumb: BreadcrumbItem = { label: "Home", path: "/" };
  const finalBreadcrumbs = [homeBreadcrumb, ...breadcrumbItems];
  return (
    <nav className="flex p-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {finalBreadcrumbs.map((item, index) => {
          // Check if this is the last item in the breadcrumb trail.
          const isLast = index === finalBreadcrumbs.length - 1;

          return (
            <li key={item.path} className="inline-flex items-center">
              {/* If it's not the last item, render a clickable link. */}
              {!isLast ? (
                <Link
                  href={item.path}
                  className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                // If it's the last item, render as plain text with a distinct color.
                <span className="text-sm font-medium text-yellow-500">
                  {item.label}
                </span>
              )}

              {/* Add a separator if it's not the last item. */}
              {!isLast && (
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
