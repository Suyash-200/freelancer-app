"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiMail, FiChevronDown, FiBarChart2, FiCpu, FiLock, FiGrid, FiRefreshCw, FiPlayCircle, FiPhone } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: FiPlayCircle },
  { name: "Contact sales", href: "#", icon: FiPhone },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About me" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-neutral-900 sticky top-0 z-50">
      <nav className="flex flex-wrap gap-6 justify-between items-center px-6 md:px-14 py-4 w-full text-xs sm:text-sm md:text-base font-medium uppercase max-md:max-w-full">
        {/* Logo */}
        <div className="font-semibold text-orange-50 tracking-wide text-base sm:text-lg md:text-xl">
          Erica JONES
        </div>

        {/* Desktop Navigation with Popover */}
        <PopoverGroup className="hidden md:flex gap-6 lg:gap-10 text-orange-50 text-sm lg:text-base">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-orange-400 transition-colors">
              {link.label}
            </a>
          ))}

          <Popover className="relative">
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5"
            >
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        {/* Desktop CTA */}
        <button className="hidden md:flex gap-2.5 justify-center items-center px-4 lg:px-6 py-2 lg:py-3 bg-orange-50 rounded-full text-neutral-900 text-xs sm:text-sm lg:text-base hover:bg-orange-100 transition-colors">
          <FiMail className="text-lg" />
          <span>Get in touch</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <FiMenu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-orange-50 text-lg">Erica JONES</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-orange-50"
            >
              <MdClose size={28} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-orange-100/20">
              <div className="space-y-2 py-6">
                
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-orange-50 hover:text-orange-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button className="flex gap-2.5 justify-center items-center px-5 py-3 bg-orange-50 rounded-full text-neutral-900 hover:bg-orange-100 transition-colors text-sm sm:text-base w-full">
                  <FiMail className="text-lg" />
                  <span>Get in touch</span>
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
