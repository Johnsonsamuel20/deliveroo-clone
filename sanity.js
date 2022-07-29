import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = sanityClient({
  projectId: "zs5hspbn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-07-29",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
