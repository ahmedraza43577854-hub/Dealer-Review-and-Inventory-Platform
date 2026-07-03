import { Badge } from "@/components/ui/badge";
import { DealerQueryParams } from "@/types/dealer";
import { formatActiveFilters } from "@/lib/dealers/query-params";

interface ActiveFiltersProps {
  params: DealerQueryParams;
}

export function ActiveFilters({ params }: ActiveFiltersProps) {
  const filters = formatActiveFilters(params);

  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-muted-foreground">Active filters:</span>
      {filters.map((filter) => (
        <Badge key={filter} variant="outline" className="font-normal">
          {filter}
        </Badge>
      ))}
    </div>
  );
}
