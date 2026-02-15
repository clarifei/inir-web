import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Z_LAYERS } from "@/lib/z-layers";

interface StatusCardProps {
  actions: ReactNode;
  children: ReactNode;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
  title: string;
}

export function StatusCard({
  actions,
  children,
  description,
  icon: Icon,
  iconClassName,
  title,
}: StatusCardProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: Z_LAYERS.CONTENT }}
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Icon className={iconClassName ?? "size-5 text-muted-foreground"} />
            <CardTitle className="text-base">{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex gap-2">{actions}</CardFooter>
      </Card>
    </div>
  );
}
