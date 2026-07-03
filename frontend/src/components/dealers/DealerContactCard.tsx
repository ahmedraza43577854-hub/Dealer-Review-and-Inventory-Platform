import { Phone, Mail, Globe, LucideIcon } from "lucide-react";
import { DealerDetail } from "@/types/dealer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stripProtocol } from "@/lib/utils/format";

interface ContactItemProps {
  icon: LucideIcon;
  href: string;
  label: string;
  external?: boolean;
}

function ContactItem({ icon: Icon, href, label, external }: ContactItemProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg border border-transparent p-3 text-sm transition-all duration-200 hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-4 w-4 text-primary" aria-hidden />
      </div>
      <span className="break-all font-medium">{label}</span>
    </a>
  );
}

interface DealerContactCardProps {
  dealer: DealerDetail;
}

export function DealerContactCard({ dealer }: DealerContactCardProps) {
  const hasContact = dealer.phone || dealer.email || dealer.website;

  if (!hasContact) return null;

  return (
    <Card className="border-primary/20 bg-gradient-to-b from-primary/[0.04] to-card shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Contact Information</CardTitle>
        <CardDescription>Get in touch with this dealership</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {dealer.phone && (
          <ContactItem
            icon={Phone}
            href={`tel:${dealer.phone}`}
            label={dealer.phone}
          />
        )}
        {dealer.email && (
          <ContactItem
            icon={Mail}
            href={`mailto:${dealer.email}`}
            label={dealer.email}
          />
        )}
        {dealer.website && (
          <ContactItem
            icon={Globe}
            href={dealer.website}
            label={stripProtocol(dealer.website)}
            external
          />
        )}
      </CardContent>
    </Card>
  );
}
