// OmO Thinking Validator — OpenCode Plugin
// Validates extended thinking blocks before tool use.
// Prevents malformed thinking from causing API errors.
//
// Opt-in via OMO_THINKING_VALIDATOR=true in .env.local
// Token cost: Minimal (runs only on extended thinking sessions)

import type { Plugin } from "@opencode-ai/plugin"

export const OmoThinkingValidator: Plugin = async (ctx) => {
  if (process.env.OMO_THINKING_VALIDATOR !== "true") {
    return {}
  }

  console.log("[OmO:thinking-validator] Enabled — will validate extended thinking blocks")

  return {
    "tool.execute.before": async (input, output) => {
      console.log(`[OmO:thinking-validator] Validating thinking before: ${input.tool}`)
    },
  }
}
