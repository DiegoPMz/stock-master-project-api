import { createInertiaApp } from "@inertiajs/react";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "../css/app.css";

interface SetupTypes {
  el: HTMLElement;
  App: React.ElementType;
  props: unknown;
}

createInertiaApp({
  resolve: (name: string) => {
    const pages = import.meta.glob("./**/*.tsx", { eager: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return pages[`./${name}.tsx`] as any;
  },
  setup({ el, App, props }: SetupTypes) {
    createRoot(el).render(createElement(App, props));
  },
  defaults: {
    visitOptions: () => {
      return { viewTransition: true };
    },
  },
});
