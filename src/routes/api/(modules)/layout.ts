import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ sharedMap }) => {
  sharedMap.set("data", { "data": "test" })
};