"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { heroSkillPills, profile } from "@/lib/data";

export default function Hero() {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  // =========================
  // LANYARD DRAG STATE
  // =========================

  const cardRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragRotation, setDragRotation] = useState(-5);

  const dragStart = useRef({
    x: 0,
    y: 0,
  });

  const positionStart = useRef({
    x: 0,
    y: 0,
  });

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.preventDefault();

    setIsDragging(true);

    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };

    positionStart.current = {
      x: dragPosition.x,
      y: dragPosition.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;

    const newX = positionStart.current.x + deltaX;
    const newY = positionStart.current.y + deltaY;

    // Batasi supaya card tidak terlalu jauh
    const limitedX = Math.max(-180, Math.min(180, newX));
    const limitedY = Math.max(-120, Math.min(180, newY));

    setDragPosition({
      x: limitedX,
      y: limitedY,
    });

    // Sedikit miring mengikuti arah gerakan
    const rotation = Math.max(-18, Math.min(18, -5 + deltaX * 0.08));

    setDragRotation(rotation);
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture has already been released
    }

    // Kembali ke posisi semula
    setDragPosition({
      x: 0,
      y: 0,
    });

    setDragRotation(-5);
  }

  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-36
        pb-20
        bg-black
        bg-grid
        bg-[length:40px_40px]
      "
    >
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
          md:px-12
          grid
          md:grid-cols-[1.4fr_1fr]
          gap-10
          items-center
          w-full
        "
      >
        {/* =====================================================
            LEFT COLUMN
        ===================================================== */}

        <div ref={leftRef} className="reveal">
          {/* AVAILABLE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              font-mono
              text-[11px]
              tracking-widest
              text-muted
              border
              border-border
              bg-card
              px-4
              py-2
              rounded-full
              mb-6
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#3ddc84]
                shadow-[0_0_8px_#3ddc84]
              "
            />
            AVAILABLE FOR WORK
          </div>

          {/* TITLE */}

          <h1
            className="
              font-display
              text-[40px]
              sm:text-[52px]
              md:text-[64px]
              font-extrabold
              leading-[1.02]
              tracking-tighter
            "
          >
            Frontend
            <br />
            <span className="text-[#5a5a5a]">Developer</span>
          </h1>

          {/* SUBTITLE */}

          <p className="font-mono italic text-muted text-sm my-4">
            fresh Graduate
          </p>

          {/* DESCRIPTION */}

          <p className="text-muted max-w-md text-[15px] mb-7">
            {profile.heroParagraph}
          </p>

          {/* SKILLS */}

          <div className="flex flex-wrap gap-2.5 mb-8">
            {heroSkillPills.map((skill) => (
              <span
                key={skill}
                className="
                  text-[13px]
                  border
                  border-border
                  bg-card
                  px-4
                  py-2
                  rounded-full
                  transition-all
                  duration-300
                  hover:border-[#555]
                  hover:bg-[#151515]
                "
              >
                {skill}
              </span>
            ))}
          </div>

          {/* INFO */}

          <div
            className="
              flex
              flex-col
              gap-1.5
              font-mono
              text-xs
              text-muted2
            "
          >
            <span>↓ explore my work below</span>

            <span>↗ open to full-time &amp; freelance opportunities</span>
          </div>
        </div>

        {/* =====================================================
            RIGHT COLUMN — LANYARD
        ===================================================== */}

        <div ref={rightRef} className="reveal">
          <div
            className="
              relative
              flex
              justify-center
              h-[380px]
              md:h-[520px]
            "
          >
            {/* =================================================
                LANYARD WRAPPER
            ================================================= */}

            <div
              className={`
                origin-top
                ${isDragging ? "" : "animate-swing"}
              `}
              style={{
                transform: isDragging
                  ? `translate(${dragPosition.x}px, ${dragPosition.y}px)`
                  : undefined,
                transition: isDragging
                  ? "none"
                  : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* =================================================
                  STRAP
              ================================================= */}

              <div
                className="
                  w-[34px]
                  h-[150px]
                  mx-auto
                  border
                  border-border
                  rounded
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
                style={{
                  background:
                    "repeating-linear-gradient(180deg, #1c1c1c 0px, #1c1c1c 2px, #0a0a0a 2px, #0a0a0a 4px)",
                }}
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[3px]
                    text-[#666]
                  "
                  style={{
                    writingMode: "vertical-rl",
                  }}
                >
                  {profile.name.toUpperCase()} &nbsp;
                  {profile.name.toUpperCase()}
                </span>
              </div>

              {/* =================================================
                  PROFILE CARD
              ================================================= */}

              <div
                ref={cardRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className={`
                  relative
                  w-[200px]
                  md:w-[230px]
                  mx-auto
                  bg-[#0c0c0c]
                  border-[6px]
                  border-[#e8e8e8]
                  rounded-md
                  overflow-hidden
                  select-none
                  touch-none
                  cursor-grab
                  ${
                    isDragging
                      ? "cursor-grabbing shadow-[0_35px_70px_rgba(255,255,255,0.18)]"
                      : "shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  }
                  transition-shadow
                  duration-300
                `}
                style={{
                  transform: `rotate(${dragRotation}deg)`,
                  transition: isDragging
                    ? "none"
                    : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* DRAG HINT */}

                {!isDragging && (
                  <div
                    className="
                      absolute
                      z-20
                      bottom-3
                      left-1/2
                      -translate-x-1/2
                      bg-black/70
                      backdrop-blur-sm
                      border
                      border-white/10
                      rounded-full
                      px-3
                      py-1
                      text-[9px]
                      font-mono
                      text-white/60
                      opacity-0
                      hover:opacity-100
                      transition-opacity
                      pointer-events-none
                    "
                  >
                    DRAG
                  </div>
                )}

                {/* IMAGE */}

                <div
                  className="
                    relative
                    w-full
                    aspect-[4/5]
                    bg-[#141414]
                  "
                >
                  <Image
                    src="/profile.jpg"
                    alt={profile.name}
                    fill
                    priority
                    sizes="230px"
                    draggable={false}
                    className="
                      object-cover
                      object-top
                      contrast-105
                      saturate-105
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              SCROLL
          ================================================= */}

          <div
            className="
              text-center
              font-mono
              text-xs
              text-muted2
              tracking-[2px]
              mt-8
              animate-bounce2
            "
          >
            SCROLL ↓
          </div>
        </div>
      </div>
    </section>
  );
}
