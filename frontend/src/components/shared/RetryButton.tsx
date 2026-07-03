"use client";

import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface RetryButtonProps {
  label?: string;
}

export function RetryButton({ label = "Try again" }: RetryButtonProps) {
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);

  function handleRetry() {
    setIsRetrying(true);
    router.refresh();
    setTimeout(() => setIsRetrying(false), 1000);
  }

  return (
    <Button
      variant="outline"
      onClick={handleRetry}
      disabled={isRetrying}
      className="gap-2"
    >
      <RefreshCw className={`h-4 w-4 ${isRetrying ? "animate-spin" : ""}`} />
      {isRetrying ? "Retrying..." : label}
    </Button>
  );
}
