"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SECTION_IDS = ["work", "experience", "about", "contact"] as const;

const LINKS = SECTION_IDS.map((key) => ({
  href: `#${key}`,
  key,
}));

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      className={active ? "is-active" : undefined}
      aria-current={active ? "location" : undefined}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

export function Header() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="site-header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          {SITE.fullName}
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.key}
              href={link.href}
              label={t(link.key)}
              active={activeSection === link.key}
            />
          ))}
          <a href={SITE.resumePath} target="_blank" rel="noreferrer">
            {t("resume")}
          </a>
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="nav-mobile" aria-label="Mobile">
          {LINKS.map((link) => (
            <NavLink
              key={link.key}
              href={link.href}
              label={t(link.key)}
              active={activeSection === link.key}
              onClick={() => setOpen(false)}
            />
          ))}
          <a href={SITE.resumePath} target="_blank" rel="noreferrer">
            {t("resume")}
          </a>
          <LanguageSwitcher />
        </nav>
      ) : null}
    </header>
  );
}
