"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface VehicleImageLightboxProps {
  open: boolean;
  images: string[];
  activeIndex: number;
  alt: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function VehicleImageLightbox({
  open,
  images,
  activeIndex,
  alt,
  onClose,
  onNavigate,
}: VehicleImageLightboxProps) {
  const total = images.length;
  const hasMultiple = total > 1;

  const goPrev = useCallback(() => {
    onNavigate(activeIndex === 0 ? total - 1 : activeIndex - 1);
  }, [activeIndex, onNavigate, total]);

  const goNext = useCallback(() => {
    onNavigate(activeIndex === total - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, onNavigate, total]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultiple) goPrev();
      if (event.key === "ArrowRight" && hasMultiple) goNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, goPrev, goNext, hasMultiple]);

  if (!open || total === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} photo gallery`}
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 pb-8 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Close gallery"
        >
          <X className="h-5 w-5" />
        </button>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              className="fixed left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              className="fixed right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <div
          className="relative flex w-full max-w-5xl flex-col items-center"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative h-[min(60vh,56vw)] w-full max-w-5xl">
            <Image
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`${alt} — photo ${activeIndex + 1} of ${total}`}
              fill
              unoptimized
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <p className="mt-4 shrink-0 text-sm font-medium text-white/90">
            {activeIndex + 1} / {total}
          </p>

          {hasMultiple && (
            <div className="mt-4 flex shrink-0 max-w-full justify-center gap-2 overflow-x-auto px-2 pb-1">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => onNavigate(index)}
                  aria-label={`View photo ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={cn(
                    "block shrink-0 overflow-hidden rounded-md border-2 transition-opacity",
                    index === activeIndex
                      ? "border-white opacity-100"
                      : "border-white/30 opacity-70 hover:opacity-100"
                  )}
                >
                  <Image
                    src={image}
                    alt=""
                    width={96}
                    height={64}
                    unoptimized
                    className="h-16 w-24 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
