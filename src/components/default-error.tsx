import { Link } from "@tanstack/react-router";
import { AlertCircleIcon, RefreshCwIcon } from "lucide-react";
import { StatusCard } from "@/components/status-card";
import { Button } from "@/components/ui/button";

interface DefaultErrorComponentProps {
  error: Error;
}

export function DefaultErrorComponent({ error }: DefaultErrorComponentProps) {
  return (
    <StatusCard
      actions={
        <>
          <Button onClick={() => window.location.reload()}>
            <RefreshCwIcon />
            Try again
          </Button>
          <Link to="/">
            <Button variant="outline">Go home</Button>
          </Link>
        </>
      }
      description="Oops! We hit a snag. Here's what happened:"
      icon={AlertCircleIcon}
      iconClassName="size-5 text-destructive"
      title="Something went wrong"
    >
      <p className="rounded-md bg-muted p-3 font-mono text-muted-foreground text-sm">
        {error.message}
      </p>
    </StatusCard>
  );
}
