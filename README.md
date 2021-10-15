# trijam

One stop shop for all my trijam submissions

## Prerequisites

- node >= `16.x`
- pnpm
  - `npx pnpm add -g pnpm`

## Monorepo / Workspace notes

This repo uses `pnpm` to efficiently manage npm packages across multiple projects.

When using pnpm:

- `-w` will perform a command in the top level workspace
  - good for installing shared dev dependencies
- `-C <dir>` will perform a command as if you were in that dir.
  - saves a lot of `cd`-ing.
  - e.g. `pnpm add -C my-project phaser` will install phaser for the project in `./my-project/`
- `--filter <package-name>` will perform a command against a named package
  - e.g. `pnpm --filter my-project dev` will run the `dev` script from the `package.json` with the package name `my-project`
- `-r` will perform a command against all packages
  - e.g. `pnpm -r build` will run the `build` script in EVERY `package.json` in the repo.

## Setup a project for Phaser/TS/Vite

1. Start a TS Vite project

   - `pnpm dlx create-vite <new project dir> --template vanilla-ts`

1. Add Packages

   - Dependencies:
     - `phaser`
   - Dev Dependencies:
     - `vite-tsconfig-paths`

1. Extra config

```jsonc
// tsconfig.json
{
  //...
  "baseUrl": ".",
  "paths": {
    "~/*": ["src/*"]
    // Any other useful absolute import paths
  }
}
```
