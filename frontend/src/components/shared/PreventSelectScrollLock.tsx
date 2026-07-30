"use client";

import { useEffect } from "react";

/**
 * Radix Select always wraps content in RemoveScroll, which:
 * 1. Sets body[data-scroll-locked]
 * 2. Injects unlayered !important CSS (margin-right ≈ scrollbar width)
 *
 * That injected sheet loads after our app CSS and beats @layer rules, so the
 * page gains a visible empty strip on the right when a Select opens.
 *
 * Selects do not need page scroll locking (dialogs do). Strip the lock
 * attribute and keep a late, unlayered override so compensation never sticks.
 */
export function PreventSelectScrollLock() {
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-prevent-select-scroll-lock", "");
    style.textContent = `
      body[data-scroll-locked] {
        overflow: visible !important;
        margin-right: 0 !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
        padding-top: 0 !important;
        position: static !important;
        overscroll-behavior: auto !important;
      }
      .width-before-scroll-bar {
        margin-right: 0 !important;
      }
      .right-scroll-bar-position {
        right: 0 !important;
      }
    `;
    document.head.appendChild(style);

    const unlock = () => {
      if (document.body.hasAttribute("data-scroll-locked")) {
        document.body.removeAttribute("data-scroll-locked");
      }
    };

    unlock();

    const observer = new MutationObserver(unlock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });

    return () => {
      observer.disconnect();
      style.remove();
    };
  }, []);

  return null;
}
