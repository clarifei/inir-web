import { Spinner } from "@/components/ui/spinner";
import { Z_LAYERS } from "@/lib/z-layers";

export function PendingComponent() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: Z_LAYERS.CONTENT }}
    >
      <Spinner className="size-8 text-muted-foreground" />
    </div>
  );
}
