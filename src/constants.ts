import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/yutoc05",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yutochau/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:yuto5@outlook.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;
