import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Yuto Chau",
  url: "https://www.yutochau.com",
  description: "Computer Science @ UWaterloo",
  summary:
    "Broadly interested in AI, developer tools, and software design. Off the clock: piano, travel, and geoguessr. I love going on random side quests.",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yutoc05",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yutochau",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:yuto5@outlook.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Geotab",
      href: "https://www.geotab.com/",
      title: "Software Engineer",
      logoUrl: "/geotab.jpeg",
    },
    {
      company: "Sony PlayStation",
      href: "https://sonyinteractive.com/",
      title: "Software Developer in Test",
      logoUrl: "/playstation.svg",
    },
    {
      company: "Orion Health",
      href: "https://orionhealth.com/",
      title: "Software Developer in Test",
      logoUrl: "/orionhealth.svg",
    },
  ],
  projects: [
    {
      title: "PokeFood",
      href: "https://github.com/derzz/pokefood",
      description:
        "Turns uploaded food photos into AI-classified virtual pets that can battle other users' creations",
    },
  ],
} as const;
