"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiSettings, 
  FiDollarSign, 
  FiBriefcase, 
  FiInfo, 
  FiMail 
} from "react-icons/fi";

const GlassNavbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Services", path: "/services", icon: <FiSettings className="mx-auto" /> },
    { name: "Pricing", path: "/pricing", icon: <FiDollarSign className="mx-auto" /> },
    { name: "Work", path: "/work", icon: <FiBriefcase className="mx-auto" /> },
    { name: "About", path: "/about", icon: <FiInfo className="mx-auto" /> },
    { name: "Contact", path: "/contact", icon: <FiMail className="mx-auto" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-around p-3 backdrop-blur-xl bg-white/5 border-t border-white/10 shadow-lg shadow-black/30">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center justify-center w-full py-1 transition-all duration-300 ${
              pathname === item.path
                ? "text-white bg-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-xl mb-1">
              {item.icon}
            </span>
            <span className="text-xs font-medium">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default GlassNavbar;