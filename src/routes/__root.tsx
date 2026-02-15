import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { HudOverlay } from "@/components/hud-overlay";
import { Navbar } from "@/components/navbar";
import { DitherOverlay } from "@/components/shaders/dither-overlay";
import { NoiseOverlay } from "@/components/shaders/noise-overlay";
import { ThemeProvider } from "@/components/theme-provider";
import { DitherProvider, useDither } from "@/hooks/use-dither";
import { useIsMobile } from "@/hooks/use-mobile";

import appCss from "../styles.css?url";

/**
 * Router context for dependency injection.
 * Add properties here when you need to share instances (queryClient, auth, etc.)
 */
type RouterContext = object;

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function DitherOverlayWrapper() {
  const { enabled } = useDither();
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return <DitherOverlay enabled={enabled} />;
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <DitherProvider>
          <NoiseOverlay />
          <DitherOverlayWrapper />
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            {children}
            <HudOverlay />
          </ThemeProvider>
        </DitherProvider>
        <TanStackDevtools
          config={{
            position: "top-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
