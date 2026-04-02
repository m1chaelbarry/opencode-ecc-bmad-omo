# OpenCode ECC + BMAD + OmO

A clean, collision-free configuration combining:
- **ECC** (Everything Claude Code) — Execution optimizer with slash commands, agents, SQLite state
- **BMAD** — Planning layer with hackathon workflow (installed via `npm install`)
- **OmO** (Oh My OpenAgent) — Selective features: hashline edits, todo continuation

## Quick Start

```bash
npm install
cp .env.example .env.local
# Edit .env.local to enable features
opencode
```

## Collision-Free Configuration

| ID | Systems | Resolution |
|----|---------|------------|
| C-01 | ECC ↔ OmO Sisyphus | Sisyphus disabled. ECC commands take priority. |
| C-02 | ECC ↔ OmO session-start | OmO hooks prefixed `omo-`, load after ECC |
| C-05 | ECC parallel ↔ BMAD | workflow-status.md IN_PROGRESS check |
| C-07 | OmO compaction ↔ BMAD | omo-todo-continuation preserves state |

## File Structure

```
.opencode/
├── oh-my-openagent.jsonc     # OmO config (hashline on, others opt-in)
├── plugins/
│   ├── ecc-opt-in.ts         # ECC gateway (zero cost when disabled)
│   └── omo-*.ts             # OmO plugins (opt-in via env)
.env.example                  # Template for .env.local
opencode.json                 # OpenCode config
REPO_CONSTITUTION.md          # System constitution
```

## Features

### ECC (Opt-in via .env.local)
- `ECC_ENABLED=true`

### BMAD (via `npm install`)
- 43 planning skills for hackathon workflow
- Agents: Analyst, PM, Architect, Scrum Master, Dev, QA

### OmO (Selective, Opt-in via .env.local)
- `OMO_TODO_CONTINUATION=true`
- `OMO_PREEMPTIVE_COMPACTION=true`
- `OMO_DIR_INJECTOR=true`
- `OMO_THINKING_VALIDATOR=true`

**Hashline edit is always on**
