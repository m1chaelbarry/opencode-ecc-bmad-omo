# OpenCode ECC + BMAD + OmO

A clean, collision-free configuration combining:
- **ECC** (Everything Claude Code) — Execution optimizer with slash commands, agents, SQLite state
- **BMAD** — Planning layer with hackathon workflow
- **OmO** (Oh My OpenAgent) — Selective features: hashline edits, todo continuation

## Collision-Free Configuration

| ID | Systems | Resolution |
|----|---------|------------|
| C-01 | ECC ↔ OmO Sisyphus | Sisyphus disabled. ECC commands take priority. |
| C-02 | ECC ↔ OmO session-start | OmO hooks prefixed `omo-`, load after ECC |
| C-05 | ECC parallel ↔ BMAD | workflow-status.md IN_PROGRESS check |
| C-07 | OmO compaction ↔ BMAD | omo-todo-continuation preserves state |

## Quick Start

```bash
npm install
cp .env.example .env.local
# Edit .env.local to enable features
opencode
```

## Features

### ECC (Opt-in)
Enable via `ECC_ENABLED=true` in `.env.local`:
- 12 agents, 24 commands, 16 skills
- Hook system with security scanning
- SQLite state store

### BMAD (Always on)
- 43 planning skills for hackathon workflow
- Analyst, PM, Architect, Scrum Master agents
- Stories, PRDs, architecture artifacts

### OmO (Selective, Opt-in)
Enable individually in `.env.local`:
- `OMO_TODO_CONTINUATION=true` — preserve todos across compaction
- `OMO_PREEMPTIVE_COMPACTION=true` — compact at 80% context
- `OMO_DIR_INJECTOR=true` — per-directory AGENTS.md injection
- `OMO_THINKING_VALIDATOR=true` — validate extended thinking

**Hashline edit is always on** — improves edit success rate from ~7% to ~68%

## File Structure

```
.opencode/
├── oh-my-openagent.jsonc     # OmO config (hashline on, others opt-in)
├── plugins/
│   ├── ecc-opt-in.ts         # ECC gateway (zero cost when disabled)
│   └── omo-*.ts             # OmO plugins (opt-in via env)
_bmad/                        # BMAD planning layer
.env.example                  # Template for .env.local
opencode.json                 # OpenCode config
REPO_CONSTITUTION.md          # System constitution
```
