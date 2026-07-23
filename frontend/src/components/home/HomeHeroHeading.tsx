import { PAGE_HEADINGS } from "@/config/constants";

/** Server-rendered hero copy — paints immediately without waiting for client JS. */
export function HomeHeroHeading() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {PAGE_HEADINGS.home}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
        Compare dealer ratings, filter by make and price, and shop with
        confidence in every state.
      </p>
    </div>
  );
}
