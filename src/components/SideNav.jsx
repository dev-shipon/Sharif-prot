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
    <aside className="hidden lg:flex flex-col w-[260px] h-screen sticky top-0 bg-[#021124] text-white py-12 px-8 shrink-0 overflow-y-auto border-r border-white/5 z-40">
      <div className="mb-10">
        <h2 className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#7EB6FF] uppercase">
          <span className="w-0.5 h-4 bg-[#4A90E2] rounded-full"></span>
          Navigation
        </h2>
      </div>

      <nav className="flex flex-col gap-5">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-all duration-300 relative pl-4 ${
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

      <div className="mt-auto pt-10">
        {/* Optional branding or footer for the sidebar */}
        <p className="text-[10px] text-[#5A7494] uppercase tracking-widest font-bold opacity-60">
          Md Sharfuddin &copy; {new Date().getFullYear()}
        </p>
      </div>
    </aside>
  );
}
