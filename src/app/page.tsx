"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const content = {
  en: {
    location: "San Francisco \u00b7 From Colombia",
    headline: "There is no better time to be alive",
    p1: "The world is changing in front of our eyes and we cannot keep waiting for seeing how things evolve by themselves. If there was ever a moment to build, to create, to shape, to be bold, it\u2019s right now.",
    q1: "The distance between your idea and its execution has never been shorter.",
    p2: "But there are no shortcuts. No straight paths. Sometimes getting clarity takes time.",
    clarity: [
      "Clarity to know which direction to move.",
      "Clarity to know what to stop.",
      "Clarity to know what to start.",
      "Clarity to choose.",
    ],
    q2: "So, you are going to gain clarity as you move, not the other way around.",
    accent: "Uncertainty is the new golden standard of this world.",
    p3: ["It won\u2019t disappear. It\u2019s a thing that you learn to deal with. This time is a great time to ", "experiment", ", to listen carefully, to find out for yourself."],
    q3: "Not because someone told you, but because you chose to.",
    p4: "I realized that you can stumble upon opportunities or you can create them. That\u2019s why I have been pushing myself beyond my boundaries. I\u2019m choosing what I\u2019m doing, and I\u2019m choosing how I want to be part of this change.",
    q4: "This is messy. This is chaotic. This is shapeable, and that\u2019s why I love it.",
    close1: "Own your next move. The world needs people who shape it.",
    close2: "And let the unknown show you the path.",
    from: "From a place where the future is being shaped,",
  },
  es: {
    location: "San Francisco \u00b7 Desde Colombia",
    headline: "No hay mejor momento para estar vivo",
    p1: "El mundo est\u00e1 cambiando frente a nuestros ojos y no podemos seguir esperando a ver c\u00f3mo las cosas evolucionan solas. Si alguna vez hubo un momento para construir, para crear, para dar forma, para ser audaz, es ahora.",
    q1: "La distancia entre tu idea y su ejecuci\u00f3n nunca ha sido m\u00e1s corta.",
    p2: "Pero no hay atajos. No hay caminos rectos. A veces, tener claridad toma tiempo.",
    clarity: [
      "Claridad para saber hacia d\u00f3nde moverte.",
      "Claridad para saber qu\u00e9 dejar.",
      "Claridad para saber qu\u00e9 empezar.",
      "Claridad para elegir.",
    ],
    q2: "Vas a ganar claridad mientras te mueves, no al rev\u00e9s.",
    accent: "La incertidumbre es el nuevo est\u00e1ndar de este mundo.",
    p3: ["No va a desaparecer. Es algo que aprendes a manejar. Este es un gran momento para ", "experimentar", ", para escuchar con atenci\u00f3n, para descubrir por ti mismo."],
    q3: "No porque alguien te lo dijo, sino porque t\u00fa lo elegiste.",
    p4: "Me di cuenta de que puedes tropezarte con oportunidades o puedes crearlas. Por eso me estoy empujando m\u00e1s all\u00e1 de mis propios l\u00edmites. Estoy eligiendo lo que hago, y estoy eligiendo c\u00f3mo quiero ser parte de este cambio.",
    q4: "Esto es desordenado. Esto es ca\u00f3tico. Esto se puede moldear, y por eso me encanta.",
    close1: "Toma las riendas de tu siguiente paso, el mundo necesita quien lo moldee.",
    close2: "Y deja que lo desconocido te muestre el camino.",
    from: "Desde un lugar donde el futuro se est\u00e1 construyendo,",
  },
} as const;

type Locale = keyof typeof content;

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [lang, setLang] = useState<Locale>("en");
  const t = content[lang];

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

      gsap.from(".masthead-rule", {
        scaleX: 0,
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.25,
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
      <header>
        <div className="flex items-baseline justify-between pb-2">
          <span className="site-name font-sans text-[11px] tracking-[0.22em] uppercase text-primary font-medium">
            Irina V&eacute;lez
          </span>
          <div className="flex items-baseline gap-4">
            <span className="location-line font-sans text-[10px] text-muted tracking-[0.15em] uppercase">
              {t.location}
            </span>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="lang-toggle font-sans text-[10px] tracking-[0.15em] uppercase cursor-pointer transition-colors"
            >
              <span className={lang === "en" ? "text-primary font-medium" : "text-muted"}>
                EN
              </span>
              <span className="text-muted/30 mx-1">/</span>
              <span className={lang === "es" ? "text-primary font-medium" : "text-muted"}>
                ES
              </span>
            </button>
          </div>
        </div>
        <hr className="masthead-rule border-t border-primary/10" />
      </header>

      {/* Center content area */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
        {/* Headline */}
        <div className="text-center mt-4 md:mt-0 mb-3 md:mb-4">
          <h1 className="headline font-serif italic text-accent leading-[1.08] tracking-tight text-[clamp(1.5rem,3.2vw,2.3rem)]">
            {t.headline}
          </h1>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-3 md:mb-4">
          <hr className="divider-rule w-10 border-t border-accent/25" />
        </div>

        {/* Manifesto Body */}
        <div className="manifesto-body manifesto-columns">
          <p className="body-text">{t.p1}</p>

          <p className="pull-quote">{t.q1}</p>

          <p className="body-text">{t.p2}</p>

          <p className="body-text clarity-lines">
            {t.clarity[0]}
            <br />
            {t.clarity[1]}
            <br />
            {t.clarity[2]}
            <br />
            {t.clarity[3]}
          </p>

          <p className="pull-quote">{t.q2}</p>

          <p className="accent-line">{t.accent}</p>

          <p className="body-text">
            {t.p3[0]}
            <a
              href="https://thexperiment.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="experiment-link"
            >
              {t.p3[1]}
            </a>
            {t.p3[2]}
          </p>

          <p className="pull-quote">{t.q3}</p>

          <p className="body-text">{t.p4}</p>

          <p className="pull-quote">{t.q4}</p>

          <p className="pull-quote" style={{ marginBottom: "0.15rem" }}>
            {t.close1}
          </p>

          <p className="pull-quote" style={{ marginBottom: 0 }}>
            {t.close2}
          </p>
        </div>

        {/* Signature */}
        <div className="closing-section text-center mt-4 md:mt-5">
          <p className="font-serif italic text-muted text-[clamp(0.78rem,1.1vw,0.86rem)]">
            {t.from}
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
              className="font-sans text-[11.5px] text-muted hover:text-accent transition-colors tracking-wide"
            >
              hello@irinavelez.com
            </a>
            <a
              href="https://www.linkedin.com/in/irina-velez/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11.5px] text-muted hover:text-accent transition-colors tracking-wide"
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
