import { useTranslations } from "next-intl";
import { SITE } from "@/content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <Reveal>
        <header className="section__header">
          <h2 id="contact-title">{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </header>
        <div className="contact__grid">
          <div>
            <p className="contact__label">{t("emailLabel")}</p>
            <a className="contact__email" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="contact__label">{t("social")}</p>
            <ul className="contact__social">
              <li>
                <a href={SITE.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
