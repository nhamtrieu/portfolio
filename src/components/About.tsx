import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

export function About() {
  const t = useTranslations("About");
  const skills = t.raw("skills") as string[];

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Reveal>
        <header className="section__header">
          <h2 id="about-title">{t("title")}</h2>
        </header>
        <p className="about__body">{t("body")}</p>
        <h3 className="about__skills-title">{t("skillsTitle")}</h3>
        <ul className="tag-row tag-row--lg">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
