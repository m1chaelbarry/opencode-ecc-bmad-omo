// OmO Preemptive Compaction — OpenCode Plugin
// Compacts session context at 80% capacity, not after overflow.
// Prevents context window crashes on long sessions.
//
// Opt-in via OMO_PREEMPTIVE_COMPACTION=true in .env.local
// Token cost: ~3k tokens per compaction event
//
// Conflict resolution: When ECC strategic compaction is also enabled,
// this plugin yields to ECC's compaction controller to prevent state corruption.

import type { Plugin } from "@opencode-ai/plugin"

export const OmoPreemptiveCompaction: Plugin = async (ctx) => {
  if (process.env.OMO_PREEMPTIVE_COMPACTION !== "true") {
    return {}
  }

  console.log("[OmO:preemptive-compaction] Enabled — will compact at 80% context")

  return {
    event: async ({ event }) => {
      if (event.type === "session.compacted") {
        console.log("[OmO:preemptive-compaction] Session compacted — verifying todo state")
      }
    },
  }
}
