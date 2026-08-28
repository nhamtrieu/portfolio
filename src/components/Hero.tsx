"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { SITE } from "@/content/site";

export function Hero() {
  const t = useTranslations("Hero");
  const reduce = useReducedMotion();
  const stack = t.raw("stack") as string[];
  const highlights = t.raw("highlights") as string[];

  const enter = reduce
    ? undefined
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section className="hero" aria-labelledby="hero-headline">
      <div className="hero__atmosphere" aria-hidden />
      <div className="hero__grid">
        <div className="hero__content">
          <motion.p className="hero__eyebrow" {...enter}>
            {t("eyebrow")}
          </motion.p>
          <motion.h1
            id="hero-headline"
            className="hero__headline"
            {...enter}
            transition={
              reduce
                ? undefined
                : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.06 }
            }
          >
            {t("headline")}
          </motion.h1>
          <motion.p
            className="hero__supporting"
            {...enter}
            transition={
              reduce
                ? undefined
                : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }
            }
          >
            {t("supporting")}
          </motion.p>
          <motion.div
            className="hero__cta"
            {...enter}
            transition={
              reduce
                ? undefined
                : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }
            }
          >
            <a className="btn btn-primary" href="#work">
              {t("ctaWork")}
            </a>
            <a className="btn btn-ghost" href="#contact">
              {t("ctaContact")}
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero__panel"
          aria-label={t("panelTitle")}
          {...enter}
          transition={
            reduce
              ? undefined
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.14 }
          }
        >
          <p className="hero__panel-title">{t("panelTitle")}</p>
          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="tag-row">
            {stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="hero__links">
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={SITE.resumePath} target="_blank" rel="noreferrer">
              CV
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
