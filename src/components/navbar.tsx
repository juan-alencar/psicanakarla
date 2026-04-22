"use client";

import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav
        className="flex items-center justify-between h-20 px-6 xl:px-10 max-w-7xl mx-auto"
        aria-label="Navegação principal"
      >
        <a href="#inicio" aria-label="Ir para o início" onClick={closeMenu}>
          <Image src={Logo} alt="Ana Karla - Psicologia Clínica" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <Link
              href="https://wa.me/message/Y7GU5LDQOYEUB1"
              target="_blank"
              aria-label="Agendar consulta no WhatsApp"
            >
              Agendar consulta
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-md px-6 pb-6 pt-2 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 border-b border-border/40 text-foreground/70 hover:text-foreground transition-colors text-base"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-4" asChild>
              <Link
                href="https://wa.me/message/Y7GU5LDQOYEUB1"
                target="_blank"
                aria-label="Agendar consulta no WhatsApp"
                onClick={closeMenu}
              >
                Agendar consulta
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
