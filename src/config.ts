export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Yuto Chau",
  profile: "https://yutochau.com/",
  desc: "Yuto Chau's personal portfolio website.",
  title: "Yuto Chau",
  ogImage: "personal-portfolio-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/yutoc05/personal-website/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Toronto", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
