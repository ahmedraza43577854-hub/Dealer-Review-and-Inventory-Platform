import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DealerMapPlaceholderProps {
  address: string;
}

export function DealerMapPlaceholder({ address }: DealerMapPlaceholderProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" aria-hidden />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 pb-4 px-6">
        <div className="relative flex h-44 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/40 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="relative text-center px-4">
            <MapPin className="h-8 w-8 text-primary/40 mx-auto mb-2" />
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Map coming soon
            </p>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {address}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
