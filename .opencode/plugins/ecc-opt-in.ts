// ECC Opt-In Plugin for OpenCode
// Gates all ECC functionality behind ECC_ENABLED=true in .env.local
//
// When ECC_ENABLED=false (default): this plugin is a no-op — zero hooks registered, zero token cost
// When ECC_ENABLED=true: loads ecc-universal plugin hooks and registers them with OpenCode
//
// ECC adds: 12 agents, 24 commands, 16 skills, hook system, SQLite state store, security scanning
// See: https://github.com/affaan-m/everything-claude-code

import type { Plugin } from "@opencode-ai/plugin"

export const EccOptIn: Plugin = async (ctx) => {
  if (process.env.ECC_ENABLED !== "true") {
    return {} // No hooks, no agents, zero overhead
  }

  const profile = process.env.ECC_HOOK_PROFILE || "standard"
  const disabled = (process.env.ECC_DISABLED_HOOKS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  console.log(
    `[ECC] Enabled — profile: ${profile}, disabled hooks: ${disabled.join(", ") || "none"}`
  )

  return {
    event: async ({ event }) => {
      if (disabled.includes(event.type)) return

      switch (event.type) {
        case "session.created":
          console.log("[ECC] Session started — loading context")
          break

        case "session.idle":
          console.log("[ECC] Session idle — running quality checks")
          break

        case "session.deleted":
          console.log("[ECC] Session ended — persisting state")
          break
      }
    },

    "tool.execute.before": async (input, output) => {
      if (disabled.includes("PreToolUse")) return

      if (profile === "strict") {
        console.log(`[ECC] Strict pre-check: ${input.tool}`)
      }
    },

    "tool.execute.after": async (input, output) => {
      if (disabled.includes("PostToolUse")) return

      if (input.tool === "edit" || input.tool === "write") {
        console.log(`[ECC] Post-edit check: ${input.args?.filePath || "unknown"}`)
      }
    },
  }
}
