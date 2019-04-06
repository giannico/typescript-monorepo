# typescript-monorepo

A TypeScript monorepo utilizing TypeScript project references and yarn workspaces.

## Overview

This mock repository is meant to represent the starting point for a development environment that has multiple application components organized in a monorepo. The monorepo has the following packages:

| Package                     | Version                                           |
| --------------------------- | ------------------------------------------------- |
| @typescript-monorepo/web    | A runnable application                            |
| @typescript-monorepo/common | Common code to be shared by multiple applications |

## Getting Started

To get started, just run `yarn` from the project root. Since the project utilizies yarn workspaces, you won't be able to use npm.

The project root's `package.json` contains the scripts needed to perform common application actions.

## Workspace Scripts

| Script               | Description                                     |
| -------------------- | ----------------------------------------------- |
| `yarn clean`         | Cleans all subpackage's built JS                |
| `yarn run web:start` | Runs the web application                        |
| `yarn run web:dev`   | Runs the web application, with automatic reload |

## Welcome

| Question                           | Answer                                                                                                                                                                                    |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Where should I add dependencies?" | Dependencies (dev, or normal) that should be shared throughout all of your packages (for instance, TypeScript, tslint, rimraf, etc.) should be installed/versioned at the workspace root. |
