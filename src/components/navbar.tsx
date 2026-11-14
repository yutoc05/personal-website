import BlurFade from "@/components/magicui/blur-fade";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function Navbar() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 8}>
      <div className="flex items-center gap-5">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <a
                key={`social-${name}-${index}`}
                href={social.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconComponent className="size-5" />
              </a>
            );
          })}
        <ModeToggle className="cursor-pointer size-5 text-muted-foreground hover:text-foreground" />
      </div>
    </BlurFade>
  );
}
