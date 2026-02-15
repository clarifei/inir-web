import { Link } from "@tanstack/react-router";
import { AlertCircleIcon, RefreshCwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Z_LAYERS } from "@/lib/z-layers";

interface DefaultErrorComponentProps {
  error: Error;
}

export function DefaultErrorComponent({ error }: DefaultErrorComponentProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: Z_LAYERS.CONTENT }}
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircleIcon className="size-5" />
            <CardTitle className="text-base">Something went wrong</CardTitle>
          </div>
          <CardDescription>
            Oops! We hit a snag. Here&apos;s what happened:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="rounded-md bg-muted p-3 font-mono text-muted-foreground text-sm">
            {error.message}
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={() => window.location.reload()}>
            <RefreshCwIcon />
            Try again
          </Button>
          <Link to="/">
            <Button variant="outline">Go home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
