"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".site-name", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.15,
      });

      gsap.from(".location-line", {
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
      });

      gsap.from(".headline", {
        opacity: 0,
        y: 14,
        duration: 1,
        ease: "power3.out",
        delay: 0.45,
      });

      gsap.from(".divider-rule", {
        scaleX: 0,
        duration: 0.7,
        ease: "power2.inOut",
        delay: 0.85,
      });

      gsap.from(".manifesto-body > *", {
        opacity: 0,
        y: 5,
        duration: 0.3,
        stagger: 0.035,
        ease: "power2.out",
        delay: 1.05,
      });

      gsap.from(".closing-section", {
        opacity: 0,
        y: 6,
        duration: 0.6,
        ease: "power2.out",
        delay: 1.7,
      });

      gsap.from(".site-footer", {
        opacity: 0,
        duration: 0.5,
        delay: 1.95,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      className="manifesto-page px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 py-5 md:py-7"
    >
      {/* Header */}
      <header className="flex items-baseline justify-between">
        <span className="site-name font-sans text-[11px] tracking-[0.22em] uppercase text-primary font-medium">
          Irina V&eacute;lez
        </span>
        <span className="location-line font-sans text-[10px] text-muted tracking-[0.15em] uppercase">
          San Francisco &middot; From Colombia
        </span>
      </header>

      {/* Center content area */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
        {/* Headline */}
        <div className="text-center mt-4 md:mt-0 mb-3 md:mb-4">
          <h1 className="headline font-serif italic text-accent leading-[1.08] tracking-tight text-[clamp(1.5rem,3.2vw,2.3rem)]">
            There is no better time to be alive
          </h1>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-3 md:mb-4">
          <hr className="divider-rule w-10 border-t border-accent/25" />
        </div>

        {/* Manifesto Body */}
        <div className="manifesto-body manifesto-columns">
          <p className="body-text">
            The world is changing in front of our eyes and we cannot keep
            waiting for seeing how things evolve by themselves. If there was
            ever a moment to build, to create, to shape, to be bold,
            it&rsquo;s right now.
          </p>

          <p className="pull-quote">
            The distance between your idea and its execution has never been
            shorter.
          </p>

          <p className="body-text">
            But there are no shortcuts. No straight paths. Sometimes getting
            clarity takes time.
          </p>

          <p className="body-text clarity-lines">
            Clarity to know which direction to move.
            <br />
            Clarity to know what to stop.
            <br />
            Clarity to know what to start.
            <br />
            Clarity to choose.
          </p>

          <p className="pull-quote">
            So, you are going to gain clarity as you move, not the other way
            around.
          </p>

          <p className="accent-line">
            Uncertainty is the new golden standard of this world.
          </p>

          <p className="body-text">
            It won&rsquo;t disappear&thinsp;&mdash;&thinsp;it&rsquo;s a thing
            that you learn to deal with. This time is a great time to{" "}
            <a
              href="https://thexperiment.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="experiment-link"
            >
              experiment
            </a>
            , to listen carefully, to find out for yourself.
          </p>

          <p className="pull-quote">
            Not because someone told you, but because you chose to.
          </p>

          <p className="body-text">
            I realized that you can stumble upon opportunities or you can
            create them. That&rsquo;s why I have been pushing myself beyond my
            boundaries. I&rsquo;m choosing what I&rsquo;m doing, and I&rsquo;m
            choosing how I want to be part of this change.
          </p>

          <p className="pull-quote">
            This is messy. This is chaotic. This is shapeable, and
            that&rsquo;s why I love it.
          </p>

          <p className="pull-quote" style={{ marginBottom: "0.15rem" }}>
            Share what you already are, unpolished.
          </p>

          <p className="pull-quote" style={{ marginBottom: 0 }}>
            And let the unknown show you the path.
          </p>
        </div>

        {/* Signature */}
        <div className="closing-section text-center mt-4 md:mt-5">
          <p className="font-serif italic text-muted text-[clamp(0.78rem,1.1vw,0.86rem)]">
            From a place where the future is being shaped,
          </p>
          <p className="font-serif italic text-primary text-[clamp(0.88rem,1.3vw,0.98rem)] mt-0.5">
            Irina
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer pt-4 mt-4 md:mt-0 border-t border-primary/6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@irinavelez.com"
              className="font-sans text-[10px] text-muted hover:text-accent transition-colors tracking-wide"
            >
              hello@irinavelez.com
            </a>
            <a
              href="https://www.linkedin.com/in/irina-velez/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] text-muted hover:text-accent transition-colors tracking-wide"
            >
              LinkedIn
            </a>
          </div>
          <span className="font-sans text-[9px] text-muted/35">
            &copy; Irina V&eacute;lez
          </span>
        </div>
      </footer>
    </main>
  );
}
