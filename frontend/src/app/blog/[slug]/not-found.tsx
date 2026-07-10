import Link from "next/link";
import { Newspaper } from "lucide-react";
import { ROUTES } from "@/config/constants";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/shared/EmptyState";

export default function ArticleNotFound() {
  return (
    <div className="container-page py-20">
      <EmptyState
        icon={Newspaper}
        title="Article not found"
        description="This article may have moved or the link is incorrect. Browse our latest buying guides and tips."
        action={
          <Button asChild variant="gold">
            <Link href={ROUTES.blog}>Back to Blog</Link>
          </Button>
        }
      />
    </div>
  );
}
