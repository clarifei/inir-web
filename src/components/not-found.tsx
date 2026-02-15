import { Link } from "@tanstack/react-router";
import { FileQuestionIcon } from "lucide-react";
import { StatusCard } from "@/components/status-card";
import { Button } from "@/components/ui/button";

export function NotFoundComponent() {
  return (
    <StatusCard
      actions={
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      }
      description="We couldn't find the page you're looking for."
      icon={FileQuestionIcon}
      title="Page not found"
    >
      <p className="text-muted-foreground text-sm">
        The link might be broken, or the page may have been moved or deleted.
      </p>
    </StatusCard>
  );
}
