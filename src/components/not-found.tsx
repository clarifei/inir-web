import { Link } from "@tanstack/react-router";
import { FileQuestionIcon } from "lucide-react";

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

export function NotFoundComponent() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: Z_LAYERS.CONTENT }}
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileQuestionIcon className="size-5 text-muted-foreground" />
            <CardTitle className="text-base">Page not found</CardTitle>
          </div>
          <CardDescription>
            We couldn&apos;t find the page you&apos;re looking for.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            The link might be broken, or the page may have been moved or
            deleted.
          </p>
        </CardContent>
        <CardFooter>
          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
