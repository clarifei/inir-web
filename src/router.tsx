import { createRouter } from "@tanstack/react-router";

import { scan } from "react-scan";
import { DefaultErrorComponent } from "@/components/default-error";
import { NotFoundComponent } from "@/components/not-found";
import { PendingComponent } from "@/components/pending";
import { routeTree } from "./routeTree.gen";

scan({
  enabled: true,
});

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultErrorComponent,
    defaultNotFoundComponent: NotFoundComponent,
    defaultPendingComponent: PendingComponent,
  });

  return router;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
