import { LucideIcon, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComingSoonSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  message: string;
}

export function ComingSoonSection({
  icon: Icon,
  title,
  description,
  message,
}: ComingSoonSectionProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div>
          <CardTitle className="flex items-center gap-3 text-xl">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow-primary">
              <Icon className="h-5 w-5 text-white" aria-hidden />
            </span>
            {title}
          </CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </div>
        <Badge variant="outline" className="shrink-0 gap-1 border-accent/30 bg-accent/10 text-accent-foreground">
          <Clock className="h-3 w-3" aria-hidden />
          Soon
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/20 bg-gradient-to-b from-muted/40 to-muted/10 px-8 py-10 text-center">
          <p className="text-sm font-medium text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
}
