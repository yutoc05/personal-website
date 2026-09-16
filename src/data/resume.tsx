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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      description:
        "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      description:
        "Designed, developed and sold animated UI components for developers.",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    },
  ],
} as const;
