import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

export default component$(() => {
  return (
    <div class="w-full h-full flex flex-col p-4">
      <div><h1>dfdsfds</h1></div>
    </div>
  );
});