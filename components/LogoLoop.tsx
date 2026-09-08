"use client";

import { useState, type ReactNode } from "react";

export type LogoItem =
  | {
      node: ReactNode;
      title: string;
      href?: string;
      color?: string;
    }
  | {
      src: string;
      alt: string;
      href?: string;
    };

type LogoLoopProps = {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  pauseOnHover?: boolean;
};

function isImageLogo(logo: LogoItem): logo is {
  src: string;
  alt: string;
  href?: string;
} {
  return "src" in logo;
}

function LogoIcon({
  logo,
  logoHeight,
}: {
  logo: LogoItem;
  logoHeight: number;
}) {
  const [hovered, setHovered] = useState(false);

  if (isImageLogo(logo)) {
    const content = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo.src}
        alt={logo.alt}
        draggable={false}
        style={{
          height: `${logoHeight}px`,
          width: "auto",
          maxWidth: "none",
          display: "block",
        }}
      />
    );

    return (
      <div
        className="flex shrink-0 items-center justify-center transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 0.6,
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {logo.href ? (
          <a
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={logo.alt}
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    );
  }

  const color = hovered ? (logo.color ?? "#ffffff") : "#9c9c9c";

  const content = (
    <span
      aria-label={logo.title}
      className="flex shrink-0 items-center justify-center"
      style={{
        color,
        fontSize: `${logoHeight}px`,
        lineHeight: 1,
        transition: "color 300ms ease",
      }}
    >
      {logo.node}
    </span>
  );

  return (
    <div
      className="flex shrink-0 items-center justify-center transition-transform duration-300"
      style={{
        transform: hovered ? "scale(1.1)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {logo.href ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={logo.title}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function LogoGroup({
  logos,
  logoHeight,
  gap,
}: {
  logos: LogoItem[];
  logoHeight: number;
  gap: number;
}) {
  return (
    <div
      className="flex shrink-0 items-center"
      style={{
        gap: `${gap}px`,
        paddingRight: `${gap}px`,
      }}
    >
      {logos.map((logo, index) => (
        <LogoIcon key={`logo-${index}`} logo={logo} logoHeight={logoHeight} />
      ))}
    </div>
  );
}

export default function LogoLoop({
  logos,
  speed = 28,
  direction = "left",
  logoHeight = 48,
  gap = 56,
  fadeOut = true,
  fadeOutColor = "#000000",
  ariaLabel = "Technology stack",
  pauseOnHover = true,
}: LogoLoopProps) {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="relative w-full overflow-hidden py-10"
      style={{
        maskImage: fadeOut
          ? "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          : undefined,
        WebkitMaskImage: fadeOut
          ? "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          : undefined,
      }}
    >
      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 md:w-32"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />

          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 md:w-32"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div
        className="flex w-max"
        style={{
          animationName: "logo-loop-scroll",
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: pauseOnHover ? "running" : "running",
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "running";
          }
        }}
      >
        <LogoGroup logos={logos} logoHeight={logoHeight} gap={gap} />

        <LogoGroup logos={logos} logoHeight={logoHeight} gap={gap} />
      </div>

      <style jsx>{`
        @keyframes logo-loop-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
