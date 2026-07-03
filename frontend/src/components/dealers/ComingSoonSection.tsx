import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "@/components/shared/EmptyState";

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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Icon className="h-5 w-5" aria-hidden />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <EmptyState icon={Icon} title={message} />
      </CardContent>
    </Card>
  );
}
