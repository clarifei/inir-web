"use client";

import * as React from "react";
import { ArchlinuxPixel } from "@/components/icons/arch";
import { CheckPixel } from "@/components/icons/check";
import { CopyPixel } from "@/components/icons/copy";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InstallCommandProps {
  command: string;
  className?: string;
}

export function InstallCommand({ command, className }: InstallCommandProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 w-fit max-w-md",
        "h-10 px-1.25",
        "rounded-full border border-input",
        "bg-background shadow-sm",
        className
      )}
    >
      {/* Arch Label */}
      <div
        className={cn(
          "flex items-center gap-1.5",
          "px-2.5 h-7",
          "rounded-full",
          "bg-secondary text-secondary-foreground",
          "text-xs font-medium"
        )}
      >
        <ArchlinuxPixel className="text-foreground" size={14} />
        <span>Arch</span>
      </div>

      {/* Command */}
      <code
        className={cn(
          "flex-1 min-w-0 truncate",
          "font-mono text-sm text-muted-foreground"
        )}
      >
        {command}
      </code>

      {/* Copy */}
      <Button
        className="size-7.5 rounded-full"
        onClick={handleCopy}
        size="icon"
        variant="ghost"
      >
        {copied ? (
          <CheckPixel className="text-foreground" size={14} />
        ) : (
          <CopyPixel className="text-muted-foreground" size={14} />
        )}
      </Button>
    </div>
  );
}
