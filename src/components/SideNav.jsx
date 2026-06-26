"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home Portfolio", href: "/" },
    { name: "Research Interests", href: "/research" },
    { name: "Publications & Patents", href: "/publications" },
    { name: "Professional Journey", href: "/experience" },
    { name: "Get in Touch", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="hidden lg:flex flex-col w-[260px] fixed right-8 top-[20%] bg-[#021124] text-white py-8 px-6 rounded-2xl shadow-2xl border border-white/10 z-50">
      <div className="mb-6">
        <h2 className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#7EB6FF] uppercase">
          <span className="w-0.5 h-4 bg-[#4A90E2] rounded-full"></span>
          Navigation
        </h2>
      </div>

      <nav className="flex flex-col gap-4">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 relative pl-4 ${
                active ? "text-white" : "text-[#8BA4C4] hover:text-white hover:translate-x-1"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-full bg-[#4A90E2] rounded-full"></span>
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
