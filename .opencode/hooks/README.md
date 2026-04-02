# OpenCode Plugin Hook Load Order

This file documents the hook load order to prevent collisions between ECC, BMAD, and OmO.

## Load Order (alphabetical by prefix)

| Order | Plugin | Purpose |
|-------|--------|---------|
| 1 | `ecc-opt-in` | ECC gateway — loads FIRST if enabled |
| 2 | `omo-dir-injector` | OmO directory injection |
| 3 | `omo-preemptive-compaction` | OmO compaction |
| 4 | `omo-thinking-validator` | OmO thinking validation |
| 5 | `omo-todo-continuation` | OmO todo preservation — loads LAST |

## Collision Resolutions

| ID | Systems | Resolution |
|----|---------|------------|
| C-01 | ECC ↔ OmO Sisyphus | Sisyphus is disabled globally in oh-my-openagent.jsonc |
| C-02 | ECC ↔ OmO session-start | OmO hooks check if ECC already handled the event |
| C-07 | OmO compaction ↔ BMAD | omo-todo-continuation preserves state before compaction |

## Adding New Plugins

When adding new plugins:
1. Prefix with `omo-` for OmO features
2. Prefix with `ecc-` for ECC features  
3. Load order is alphabetical within each prefix group
4. Document any new collisions in REPO_CONSTITUTION.md
