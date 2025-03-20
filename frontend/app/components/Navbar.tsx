


'use client';

// frontend/components/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiSearch, CiUser, CiShoppingCart, CiMenuBurger, CiTimer } from "react-icons/ci";
import { AiTwotoneShop } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-white  sticky top-0 z-50">
      {/* Logo and Icon in One Line */}
      <div className="flex items-center gap-2 sm:p-2">
        <div className="text-xl md:text-3xl font-bold flex items-center">
          <span className="text-orange-500">Soko</span>
          <span className="text-black">Ndogo</span>
          <AiTwotoneShop className=" text-xl text-orange-500 md:text-3xl" />
        </div>
      </div>
      
      {/* Icons - Always on Top */}
      <div className="md:hidden flex items-center gap-3  text-gray-700 text-xl">
        <CiSearch className="cursor-pointer hover:text-orange-500" />
        <CiUser className="cursor-pointer hover:text-orange-500" />
        <CiShoppingCart className="cursor-pointer hover:text-orange-500" />
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <CiTimer /> : <CiMenuBurger />}
        </button>
      </div>
      
      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path}>
            <span
              className={`cursor-pointer  text-sm ${pathname === link.path ? "font-bold text-orange-600" : "text-gray-700 hover:text-orange-500"}`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      
      {/* Icons for Desktop */}
      <div className="hidden md:flex items-center gap-4 text-gray-700 text-xl">
        <CiSearch className="cursor-pointer hover:text-orange-500" />
        <CiUser className="cursor-pointer hover:text-orange-500" />
        <CiShoppingCart className="cursor-pointer hover:text-orange-500" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white  flex flex-col items-center py-4 gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span
                className={`cursor-pointer text-lg ${pathname === link.path ? "underline text-orange-600" : "text-gray-700 hover:text-orange-500"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// Usage: Add <Navbar /> inside _app.tsx or any layout component
