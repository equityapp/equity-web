import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onGet:RequestHandler = async ({json, sharedMap}) => {
  const data = sharedMap.get("data")
return json(200, {
  status: 200,
  message: "OK",
  data: data
})
}