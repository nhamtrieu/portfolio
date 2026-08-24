import { useTranslations } from "next-intl";
import { EXPERIENCE_ORDER } from "@/content/site";
import { Reveal } from "./Reveal";

export function Experience() {
  const t = useTranslations("Experience");

  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <Reveal>
        <header className="section__header">
          <h2 id="experience-title">{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </header>
      </Reveal>

      <ol className="timeline">
        {EXPERIENCE_ORDER.map((id, i) => (
          <Reveal key={id} delay={i * 0.06}>
            <li className="timeline__item">
              <div className="timeline__period">{t(`items.${id}.period`)}</div>
              <div className="timeline__body">
                <h3>
                  {t(`items.${id}.role`)}
                  <span className="timeline__company">
                    {" "}
                    · {t(`items.${id}.company`)}
                  </span>
                </h3>
                <ul>
                  {t.raw(`items.${id}.points`).map((point: string) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
