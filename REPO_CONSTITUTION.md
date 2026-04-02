# REPO CONSTITUTION v1.0
## ECC + BMAD + OmO — Collision-Free Configuration

---

# PART I: INSTALLED STACK

## 1.1 OpenCode — Agent Runtime Shell
**Owns:** `.opencode/` directory, plugin lifecycle, hook event bus.

## 1.2 Everything Claude Code (ECC) — Execution Optimizer [OPT-IN]
**Owns:** Slash commands, agents, SQLite state store, security scanning.
**Gate:** `ECC_ENABLED=true` in `.env.local`. Default: OFF.

## 1.3 BMAD Method — Planning Layer
**Installed via:** `npm install` (bmad-method package)
**Owns:** Planning agents, PRD, architecture, stories.
**Agents:** Analyst, PM, Architect, Scrum Master, Dev, QA.

## 1.4 OmO (Oh My OpenAgent) — Selective Features Only
**Owns:** Hashline edits (always on), todo continuation, preemptive compaction, dir injector, thinking validator.
**CRITICAL:** Sisyphus, ralph_loop, ulw_loop are DISABLED globally.

---

# PART II: COLLISION REGISTRY

| ID | Systems | Symptom | Resolution |
|----|---------|---------|------------|
| C-01 | ECC ↔ OmO Sisyphus | `/plan` resolves wrong handler | Sisyphus disabled globally |
| C-02 | ECC ↔ OmO session-start | Double-fire on session notification | OmO hooks prefixed `omo-`, load after ECC |
| C-05 | ECC parallel ↔ BMAD | Two agents modify same file | workflow-status.md IN_PROGRESS check |
| C-07 | OmO compaction ↔ BMAD | Story checklist lost after compaction | omo-todo-continuation preserves state |

---

# PART III: HOOK LOAD ORDER

| Order | Plugin | Purpose |
|-------|--------|---------|
| 1 | `ecc-opt-in` | ECC gateway — loads FIRST if enabled |
| 2 | `omo-dir-injector` | OmO directory injection |
| 3 | `omo-preemptive-compaction` | OmO compaction |
| 4 | `omo-thinking-validator` | OmO thinking validation |
| 5 | `omo-todo-continuation` | OmO todo preservation — loads LAST |

---

# PART IV: FEATURE ENABLEMENT

| Feature | Enable via | Default |
|---------|------------|---------|
| ECC full stack | `ECC_ENABLED=true` | OFF |
| OmO todo continuation | `OMO_TODO_CONTINUATION=true` | OFF |
| OmO preemptive compaction | `OMO_PREEMPTIVE_COMPACTION=true` | OFF |
| OmO dir injector | `OMO_DIR_INJECTOR=true` | OFF |
| OmO thinking validator | `OMO_THINKING_VALIDATOR=true` | OFF |
| Hashline edit | Always on | ON |
