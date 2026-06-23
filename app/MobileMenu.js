"use client";

import { useState } from "react";

export default function MobileMenu({ items, phoneNumber }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#8c5a35] text-[#432817]"
      >
        <span aria-hidden="true" className="text-2xl font-black leading-none">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 top-full border-t border-[#eadfce] bg-[#fffaf2] px-4 py-4 shadow-[0_10px_24px_rgba(55,36,20,0.12)]">
          <nav className="mx-auto grid max-w-[1800px] gap-1" aria-label="Mobile navigation">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-4 py-3 text-lg font-semibold text-[#3a2a1d] hover:bg-[#f0e3d1]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${phoneNumber.replaceAll("-", "")}`}
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md border border-[#8c5a35] px-4 py-3 text-center text-lg font-black text-[#432817]"
            >
              {phoneNumber}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
