"use client";

import { useEffect, useState } from "react";

/** ponytail: scroll-position scan — fine for a handful of sections; upgrade to IO if page grows. */
export function useActiveSection(sectionIds: readonly string[], headerOffset = 80) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      const y = window.scrollY + headerOffset;
      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) {
          current = id;
        }
      }

      setActive(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds, headerOffset]);

  return active;
}
