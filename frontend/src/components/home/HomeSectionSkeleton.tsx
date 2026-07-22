export function HomeSectionSkeleton() {
  return (
    <section className="bg-background" aria-hidden>
      <div className="container-page py-16">
        <div className="mb-8 h-10 w-64 animate-pulse rounded-lg bg-muted" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-72 animate-pulse rounded-lg bg-muted"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
