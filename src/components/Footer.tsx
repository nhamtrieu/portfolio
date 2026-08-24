import { useTranslations } from "next-intl";
import { SITE } from "@/content/site";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>{t("built")}</p>
      <p>{t("rights", { year })}</p>
      <p className="sr-only">{SITE.name}</p>
    </footer>
  );
}
