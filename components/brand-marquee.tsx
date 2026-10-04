"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Brand = {
  name: string;
  logo?: string;
  href?: string;
};

const brands: Brand[] = [
  {
    name: "Schneider Electric",
    logo: "/brands/schneider.svg",
    href: "https://www.se.com/ww/en/",
  },
  {
    name: "Havells",
    logo: "/brands/havells.svg",
    href: "https://www.havells.com/",
  },
  {
    name: "Philips",
    logo: "/brands/philips.png",
    href: "https://www.philips.co.in/",
  },
  {
    name: "Legrand",
    logo: "/brands/legrand.png",
    href: "https://www.legrand.com/",
  },
  {
    name: "Panasonic",
    logo: "/brands/panasonic.png",
    href: "https://www.panasonic.com/",
  },
  {
    name: "Bosch",
    logo: "/brands/bosch.png",
    href: "https://www.bosch.com/",
  },
  {
    name: "Polycab",
    logo: "/brands/polycab.png",
    href: "https://polycab.com/",
  },
];

const CARD_WIDTH = 320;
const GAP = 24;
const AUTO_SPEED = 0.09;

export function BrandMarquee() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const animationFrameRef = useRef<number | null>(null);

  const pointerStartXRef = useRef(0);
  const pointerStartScrollRef = useRef(0);
  const hasMovedRef = useRef(false);

  const isPointerDownRef = useRef(false);
  const isDraggingRef = useRef(false);

  const segmentWidth =
    brands.length * (CARD_WIDTH + GAP);

  const normalizeScroll = useCallback(() => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    const middleStart = segmentWidth;
    const middleEnd = segmentWidth * 2;

    /*
     * Keep the user inside the middle copy.
     *
     * Because the exact same cards exist before and after it,
     * moving the scroll position by one segment is visually
     * indistinguishable.
     */
    if (container.scrollLeft < middleStart - CARD_WIDTH) {
      container.scrollLeft += segmentWidth;
    }

    if (container.scrollLeft >= middleEnd) {
      container.scrollLeft -= segmentWidth;
    }
  }, [segmentWidth]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    /*
     * Start from the middle copy so the user can swipe
     * in either direction immediately.
     */
    container.scrollLeft = segmentWidth;

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isDraggingRef.current && !isPointerDownRef.current) {
        container.scrollLeft +=
          AUTO_SPEED * Math.min(delta, 32);

        normalizeScroll();
      }

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [normalizeScroll, segmentWidth]);

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    isPointerDownRef.current = true;
    isDraggingRef.current = false;
    hasMovedRef.current = false;

    pointerStartXRef.current = event.clientX;
    pointerStartScrollRef.current = container.scrollLeft;

    container.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const container = scrollContainerRef.current;

    if (!container || !isPointerDownRef.current) {
      return;
    }

    const distance =
      event.clientX - pointerStartXRef.current;

    /*
     * Don't classify tiny pointer movements as dragging.
     * This keeps normal clicks working.
     */
    if (Math.abs(distance) > 6) {
      isDraggingRef.current = true;
      hasMovedRef.current = true;
      setIsDragging(true);
    }

    if (!isDraggingRef.current) {
      return;
    }

    event.preventDefault();

    container.scrollLeft =
      pointerStartScrollRef.current - distance;

    normalizeScroll();
  };

  const finishPointerInteraction = (
    event?: React.PointerEvent<HTMLDivElement>,
  ) => {
    const container = scrollContainerRef.current;

    isPointerDownRef.current = false;
    isDraggingRef.current = false;

    setIsDragging(false);

    if (
      event &&
      container?.hasPointerCapture(event.pointerId)
    ) {
      container.releasePointerCapture(event.pointerId);
    }

    normalizeScroll();
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    finishPointerInteraction(event);
  };

  const handlePointerCancel = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    finishPointerInteraction(event);
  };

  const handleWheel = (
    event: React.WheelEvent<HTMLDivElement>,
  ) => {
    /*
     * The carousel is intentionally controlled by:
     * - automatic movement
     * - drag
     * - touch swipe
     *
     * Mouse wheel should not control it.
     */
    if (Math.abs(event.deltaX) > 0 || Math.abs(event.deltaY) > 0) {
      event.preventDefault();
    }
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <p className="eyebrow">
          Brands available through MEG
        </p>

        <Link
          href="/brands"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
        >
          View all brands directory
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-ink to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-ink to-transparent" />

        <div
          ref={scrollContainerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onWheel={handleWheel}
          className={`flex gap-6 overflow-x-hidden py-2 ${
            isDragging
              ? "cursor-grabbing"
              : "cursor-grab"
          }`}
          style={{
            touchAction: "pan-y",
            overscrollBehaviorX: "none",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {[
            ...brands,
            ...brands,
            ...brands,
          ].map((brand, index) => {
            const originalIndex =
              index % brands.length;

            const content = (
              <>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.12em] text-muted-foreground">
                    {String(originalIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Logo */}
                <div className="flex h-32 w-full items-center justify-center py-4">
                  {brand.logo ? (
                    <div className="pointer-events-none relative h-16 w-40">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        sizes="160px"
                        draggable={false}
                        className="object-contain opacity-90 transition-opacity duration-300"
                      />
                    </div>
                  ) : (
                    <h3 className="text-center font-display text-2xl uppercase leading-tight text-paper">
                      {brand.name}
                    </h3>
                  )}
                </div>

                {/* Brand information */}
                <div>
                  {brand.logo && (
                    <h3 className="font-display text-lg uppercase leading-none text-paper">
                      {brand.name}
                    </h3>
                  )}

                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Availability on enquiry
                  </p>
                </div>
              </>
            );

            if (brand.href) {
              return (
                <a
                  key={`${brand.name}-${index}`}
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  onClick={(event) => {
                    /*
                     * A drag/swipe must never accidentally
                     * open the brand website.
                     */
                    if (hasMovedRef.current) {
                      event.preventDefault();
                    }

                    hasMovedRef.current = false;
                  }}
                  className="group flex w-[320px] shrink-0 flex-col justify-between border border-border bg-ink p-8 transition-all duration-300 hover:bg-zinc-900"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={`${brand.name}-${index}`}
                className="group flex w-[320px] shrink-0 flex-col justify-between border border-border bg-ink p-8 transition-all duration-300 hover:bg-zinc-900"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}