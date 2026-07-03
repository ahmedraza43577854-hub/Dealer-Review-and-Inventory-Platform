import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/constants";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold">Dealer Not Found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The dealership you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Button asChild className="mt-6">
        <Link href={ROUTES.dealers}>Browse All Dealers</Link>
      </Button>
    </div>
  );
}
