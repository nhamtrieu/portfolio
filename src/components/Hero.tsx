"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  const reduce = useReducedMotion();

  const enter = reduce
    ? undefined
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="hero__atmosphere" aria-hidden />
      <div className="hero__content">
        <motion.p className="hero__name" id="hero-name" {...enter}>
          {t("name")}
        </motion.p>
        <motion.h1
          className="hero__headline"
          {...enter}
          transition={
            reduce
              ? undefined
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }
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
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.14 }
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
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
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
    </section>
  );
}
