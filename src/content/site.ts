export const SITE = {
  name: "Nhâm",
  fullName: "Triệu Tuyên Nhâm",
  email: "trieunham2002@gmail.com",
  github: "https://github.com/nhamtrieu",
  linkedin: "https://www.linkedin.com/in/nhamtrieu2002/",
  resumePath:
    "https://drive.google.com/file/d/1ZBRwFfz48lO8OUDKaSiL9eEpEVmQx-3T/view?usp=drive_link",
} as const;

export const WORK_ORDER = ["btms", "hanjaHero", "dbViewer", "nhamBlog"] as const;

export type WorkId = (typeof WORK_ORDER)[number];

/** Links for public projects; BTMS is private product work. */
export const WORK_LINKS: Record<
  WorkId,
  { href?: string; labelKey: "viewLive" | "viewSource" | "viewCase" }
> = {
  btms: { labelKey: "viewCase" },
  hanjaHero: {
    href: "https://hanjahero.com/",
    labelKey: "viewLive",
  },
  dbViewer: {
    href: "https://github.com/giangducnguyen13/db-viewer",
    labelKey: "viewSource",
  },
  nhamBlog: {
    href: "https://blog.nhamtrieu.io.vn/",
    labelKey: "viewLive",
  },
};

export const EXPERIENCE_ORDER = ["current"] as const;
