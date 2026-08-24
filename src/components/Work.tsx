import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { WORK_LINKS, WORK_ORDER, type WorkId } from "@/content/site";
import { Reveal } from "./Reveal";

export function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <Reveal>
        <header className="section__header">
          <h2 id="work-title">{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </header>
      </Reveal>

      <ul className="work-list">
        {WORK_ORDER.map((id, i) => {
          const link = WORK_LINKS[id as WorkId];
          const label = t(link.labelKey);
          const action = link.href ? (
            <a
              className="work-item__hint"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {label}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          ) : (
            <span className="work-item__hint">
              {label}
              <ArrowUpRight size={16} aria-hidden />
            </span>
          );

          return (
            <Reveal key={id} delay={i * 0.06}>
              <li className="work-item">
                <div className="work-item__meta">
                  <p className="work-item__role">{t(`items.${id}.role`)}</p>
                  <h3 className="work-item__title">{t(`items.${id}.title`)}</h3>
                  <p className="work-item__summary">
                    {t(`items.${id}.summary`)}
                  </p>
                  <ul className="tag-row">
                    {t.raw(`items.${id}.tags`).map((tag: string) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-item__actions">{action}</div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
