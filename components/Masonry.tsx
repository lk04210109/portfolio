"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { gsap } from "gsap";
import "./Masonry.css";

export type MasonryItem = {
  id: string;
  img: string;
  height: number;
};

type AnimateFrom = "top" | "bottom" | "left" | "right" | "center" | "random";

type MasonryProps = {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: AnimateFrom;
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
};

const queries = ["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)", "(min-width:400px)"];
const values = [4, 3, 2, 2];

function useMedia(defaultValue: number) {
  const getValue = () => {
    if (typeof window === "undefined") return defaultValue;
    return values[queries.findIndex((query) => window.matchMedia(query).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue());
    const mediaQueries = queries.map((query) => window.matchMedia(query));
    mediaQueries.forEach((query) => query.addEventListener("change", handler));
    return () => mediaQueries.forEach((query) => query.removeEventListener("change", handler));
  }, []);

  return value;
}

function useMeasure() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
}

async function preloadImages(urls: string[]) {
  await Promise.all(urls.map((src) => new Promise<void>((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = image.onerror = () => resolve();
  })));
}

export default function Masonry({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}: MasonryProps) {
  const columns = useMedia(1);
  const [containerRef, width] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    let cancelled = false;
    setImagesReady(false);
    preloadImages(items.map((item) => item.img)).then(() => {
      if (!cancelled) setImagesReady(true);
    });
    return () => { cancelled = true; };
  }, [items]);

  const layout = useMemo(() => {
    if (!width) return { items: [], height: 0 };

    const columnHeights = new Array(columns).fill(0) as number[];
    const columnWidth = width / columns;
    const positionedItems = items.map((item) => {
      const column = columnHeights.indexOf(Math.min(...columnHeights));
      const height = columnWidth * (item.height / 1000);
      const positionedItem = {
        ...item,
        x: columnWidth * column,
        y: columnHeights[column],
        w: columnWidth,
        h: height,
      };
      columnHeights[column] += height;
      return positionedItem;
    });

    return { items: positionedItems, height: Math.max(...columnHeights) };
  }, [columns, items, width]);

  useLayoutEffect(() => {
    if (!imagesReady || !containerRef.current) return;

    layout.items.forEach((item, index) => {
      const element = containerRef.current?.querySelector<HTMLElement>(`[data-key="${item.id}"]`);
      if (!element) return;

      const finalState = { x: item.x, y: item.y, width: item.w, height: item.h };
      if (!hasMounted.current) {
        let direction: AnimateFrom = animateFrom;
        if (direction === "random") {
          const directions: AnimateFrom[] = ["top", "bottom", "left", "right"];
          direction = directions[Math.floor(Math.random() * directions.length)];
        }

        const initialPosition = {
          top: { x: item.x, y: -200 },
          bottom: { x: item.x, y: window.innerHeight + 200 },
          left: { x: -200, y: item.y },
          right: { x: window.innerWidth + 200, y: item.y },
          center: { x: width / 2 - item.w / 2, y: layout.height / 2 - item.h / 2 },
          random: { x: item.x, y: item.y + 100 },
        }[direction];

        gsap.fromTo(element, {
          opacity: 0,
          ...initialPosition,
          width: item.w,
          height: item.h,
          ...(blurToFocus ? { filter: "blur(10px)" } : {}),
        }, {
          opacity: 1,
          ...finalState,
          ...(blurToFocus ? { filter: "blur(0px)" } : {}),
          duration: 0.8,
          ease: "power3.out",
          delay: index * stagger,
        });
      } else {
        gsap.to(element, { ...finalState, duration, ease, overwrite: "auto" });
      }
    });

    hasMounted.current = true;
  }, [animateFrom, blurToFocus, containerRef, duration, ease, imagesReady, layout, stagger, width]);

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    if (scaleOnHover) gsap.to(event.currentTarget, { scale: hoverScale, duration: 0.3, ease: "power2.out" });
    if (colorShiftOnHover) {
      gsap.to(event.currentTarget.querySelector(".masonry-color-overlay"), { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (scaleOnHover) gsap.to(event.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
    if (colorShiftOnHover) {
      gsap.to(event.currentTarget.querySelector(".masonry-color-overlay"), { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div ref={containerRef} className="masonry-list" style={{ height: layout.height }}>
      {layout.items.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="masonry-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="masonry-image" style={{ backgroundImage: `url(${item.img})` }} role="img" aria-label={`图片制作作品 ${item.id}`}>
            {colorShiftOnHover && <span className="masonry-color-overlay" />}
          </div>
        </div>
      ))}
    </div>
  );
}
