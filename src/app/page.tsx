import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 relative">
      <section id="hero" className="flex flex-col">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
          yOffset={8}
          text={DATA.name}
        />
        <BlurFadeText
          className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl mt-2"
          delay={BLUR_FADE_DELAY}
          text={DATA.description}
        />
        <BlurFade
          delay={BLUR_FADE_DELAY * 3}
          className="text-pretty font-sans text-sm leading-relaxed text-muted-foreground mt-4"
        >
          <Markdown>{DATA.summary}</Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-semibold">Work</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-semibold">Projects</h2>
          </BlurFade>
          <div className="flex flex-col gap-5">
            {DATA.projects.map((project, index) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 7 + index * 0.05}
              >
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="leading-none flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {project.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
