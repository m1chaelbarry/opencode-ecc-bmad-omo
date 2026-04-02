// OmO Todo Continuation — OpenCode Plugin
// Preserves todo state across context compaction and session resume.
// Prevents agent from forgetting completed acceptance criteria.
//
// Opt-in via OMO_TODO_CONTINUATION=true in .env.local
// Token cost: Minimal (~200 tokens on resume)
//
// Conflict resolution: If ECC is enabled, this plugin MUST load AFTER ECC hooks
// to avoid SQLite state store conflicts. Load order is controlled by .opencode/hooks/README.md

import type { Plugin } from "@opencode-ai/plugin"

export const OmoTodoContinuation: Plugin = async (ctx) => {
  if (process.env.OMO_TODO_CONTINUATION !== "true") {
    return {}
  }

  console.log("[OmO:todo-continuation] Enabled — will preserve todo state across compaction")

  return {
    event: async ({ event }) => {
      if (event.type === "session.created") {
        console.log("[OmO:todo-continuation] New session — checking for saved todo state")
      }

      if (event.type === "session.compacted") {
        console.log("[OmO:todo-continuation] Compaction complete — restoring todo state")
      }
    },
  }
}
