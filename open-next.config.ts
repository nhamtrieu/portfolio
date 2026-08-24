import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// ponytail: no KV/DO cache bindings yet — fine for a mostly-static portfolio.
// Upgrade: add incrementalCache when ISR/tag revalidation is needed.
export default defineCloudflareConfig({});
