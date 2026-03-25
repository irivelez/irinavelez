"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".manifesto-content > *", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        stagger: 0.04,
        ease: "power2.out",
        delay: 0.3,
      });
      gsap.from(".topbar", {
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
      });
      gsap.from(".footer-links", {
        opacity: 0,
        y: 8,
        duration: 0.5,
        delay: 0.8,
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="topbar flex items-center justify-between px-6 md:px-12 lg:px-16 py-6 md:py-8">
        <span className="font-serif italic text-sm text-text-primary">
          Irina V&eacute;lez
        </span>
        <span className="font-sans text-xs text-text-muted tracking-wide">
          San Francisco &middot; From Colombia
        </span>
      </header>

      {/* Manifesto */}
      <article className="flex-1 flex items-start justify-center px-6 md:px-12 lg:px-16 py-12 md:py-20">
        <div className="manifesto-content max-w-[620px] space-y-8 md:space-y-10">
          {/* Opening */}
          <h1 className="font-serif italic text-accent-gold leading-[1.15] tracking-tight text-[clamp(1.8rem,4.5vw,3.2rem)]">
            There is no better time to be alive
          </h1>

          <p className="text-body">
            The world is changing in front of our eyes and we cannot keep waiting
            to see how things evolve by themselves. If there was ever a moment to
            build, to create, to shape, to be bold, it&rsquo;s right now.
          </p>

          <p className="font-serif italic text-text-primary leading-[1.3] text-[clamp(1.15rem,2.5vw,1.5rem)]">
            The distance between your idea and its execution has never been
            shorter.
          </p>

          {/* Clarity */}
          <div className="space-y-4">
            <p className="text-body">
              But there are no shortcuts. No straight paths.
            </p>
            <p className="text-body text-text-muted leading-[1.8]">
              Sometimes getting clarity takes time.
              <br />
              Clarity to know which direction to move.
              <br />
              Clarity to know what to stop.
              <br />
              Clarity to know what to start.
              <br />
              Clarity to choose.
            </p>
            <p className="font-serif italic text-text-primary text-[clamp(1rem,2vw,1.2rem)] leading-[1.5]">
              So, you are going to gain clarity as you move, not the other way
              around.
            </p>
          </div>

          {/* Thesis */}
          <h2 className="font-serif italic text-accent-gold leading-[1.15] tracking-tight text-[clamp(1.5rem,3.5vw,2.4rem)] py-2">
            Uncertainty is the new golden standard of this world.
          </h2>

          <p className="text-body">
            It might paralyse you or might make you move forward. And the
            beautiful thing of being alive is you always have the opportunity to
            choose.
          </p>

          <p className="text-body">
            Uncertainty is not a thing that disappears, it&rsquo;s a thing that
            you learn to deal with. This time is a great time to experiment, to
            listen carefully, to see what doesn&rsquo;t work vs what does, not
            because someone told you, but because you chose to find out yourself.
          </p>

          {/* For those */}
          <div className="space-y-4">
            <p className="text-body">
              For those who face the unknown with curiosity instead of fear.
              <br />
              For those who are willing to write a new unpolished chapter,
              instead of waiting to be perfect.
            </p>
            <p className="font-serif italic text-text-primary text-[clamp(1rem,2vw,1.2rem)] leading-[1.5]">
              The possibilities are being created for you.
            </p>
          </div>

          {/* Choosing */}
          <p className="text-body">
            I realized that you can stumble upon opportunities or you can create
            them. That&rsquo;s why I have been pushing myself beyond my
            boundaries. I&rsquo;m choosing what I&rsquo;m doing, and I&rsquo;m
            choosing how I want to be part of this change.
          </p>

          <p className="font-serif italic text-text-primary leading-[1.2] text-[clamp(1.15rem,2.5vw,1.5rem)]">
            This is messy. This is chaotic. This is shapeable, and that&rsquo;s
            why I love it.
          </p>

          {/* No slowing down */}
          <p className="text-body">
            From a place where the future is being shaped I can tell you that
            this is not slowing down. There is going to be no less uncertainty,
            so, get used to it.
          </p>

          {/* Closing */}
          <div className="pt-4 md:pt-6 space-y-2">
            <p className="font-serif italic text-text-primary leading-[1.3] text-[clamp(1.15rem,2.5vw,1.5rem)]">
              Share what you already are, unpolished.
            </p>
            <p className="font-serif italic text-text-primary leading-[1.3] text-[clamp(1.15rem,2.5vw,1.5rem)]">
              And let the unknown show you the path.
            </p>
            <p className="font-serif italic text-text-muted leading-[1.3] text-[clamp(1rem,2vw,1.15rem)]">
              It will teach you more than you think.
            </p>
          </div>

          {/* Identity anchor */}
          <div className="pt-8 md:pt-12 border-t border-text-muted/10">
            <p className="text-text-muted text-[clamp(0.8rem,1.5vw,0.9rem)] leading-relaxed">
              Cloud architect turned AI entrepreneur. 25 experiments logged and counting.{" "}
              <a
                href="https://thexperiment.dev"
                className="text-accent-gold hover:text-accent-gold/80 transition-colors"
              >
                See the lab &rarr;
              </a>
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="footer-links px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div className="max-w-[620px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/irina-velez/?locale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-accent-gold hover:text-accent-gold/80 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-text-muted/30">&middot;</span>
            <a
              href="https://github.com/irivelez"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              GitHub
            </a>
          </div>
          <span className="font-sans text-[11px] text-text-muted/50">
            &copy; Irina V&eacute;lez
          </span>
        </div>
      </footer>
    </main>
  );
}
