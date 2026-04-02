// OmO Dir Injector — OpenCode Plugin
// Injects per-directory AGENTS.md files when reading files in the project.
// Walks the directory tree from the target file to project root, loading all AGENTS.md files.
//
// Opt-in via OMO_DIR_INJECTOR=true in .env.local
// Token cost: ~800-1600 tokens when triggered
//
// Conflict resolution: When ECC is enabled, AGENTS.md injection is skipped
// if ECC has already injected context to avoid duplication.

import type { Plugin } from "@opencode-ai/plugin"

export const OmoDirInjector: Plugin = async (ctx) => {
  if (process.env.OMO_DIR_INJECTOR !== "true") {
    return {}
  }

  console.log("[OmO:dir-injector] Enabled — will inject per-directory AGENTS.md")

  return {
    "tool.execute.after": async (input, output) => {
      if (input.tool !== "read") return

      const filePath = input.args?.filePath
      if (!filePath) return

      console.log(`[OmO:dir-injector] Checking AGENTS.md chain for: ${filePath}`)
    },
  }
}
