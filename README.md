# typescript-monorepo

A TypeScript monorepo utilizing TypeScript project references and yarn workspaces.

## Overview

This mock repository is meant to represent the starting point for a development environment that has multiple application components organized in a monorepo. The monorepo has the following packages:

| Package                     | Version                                           |
| --------------------------- | ------------------------------------------------- |
| @typescript-monorepo/web    | A basic express web application                   |
| @typescript-monorepo/api    | A basic express API application                   |
| @typescript-monorepo/common | Common code to be shared by multiple applications |

The packages/applications are intentionally trivial, but demonstrate an example of multiple runnable applications in a single repository, that both depend on some common code.

## Getting Started

To get started, just run `yarn` from the project root. Since the project utilizies yarn workspaces, you won't be able to use npm.

The project root's `package.json` contains the scripts needed to perform common application actions.

## Workspace Scripts

| Script               | Description                                      |
| -------------------- | ------------------------------------------------ |
| `yarn clean`         | Cleans all subpackage's built JS                 |
| `yarn run web:start` | Runs the web application                         |
| `yarn run web:dev`   | Runs the web application, in watch mode          |
| `yarn run api:start` | Runs the api application                         |
| `yarn run api:dev`   | Runs the api application, in watch mode          |
| `yarn run start`     | Runs the web and API applications                |
| `yarn run dev`       | Runs the web and API applications, in watch mode |

## Welcome

| Question                                                                                    | Answer                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Is this structure still valuable if I'm not publishing my packages to the npm repository?" | Definitely! This example is here to show the structural benefits of sharing common code in a monorepo with multiple runnable applications (web and api). Whether it's published or not, these benefits still exist.                                                                                                                                                                                                   |
| "Why not use [Lerna](https://github.com/lerna/lerna)?"                                      | Lerna is excellent, if you're serious about monorepos it's definitely worth exploring. It comes with many more features than yarn workspaces offer, but, also introduces more complexity. The combination of TypeScript project references (new in TS 3.0, improved in TS 3.4), and yarn workspaces, demonstrated here, offer a much "lighter" alternative to Lerna.                                                  |
| "Where should I add `devDependencies`?"                                                     | `devDependencies` that are installed in the root package.json can be used in all packages in the monorepo. This is a great candidate installation location for packages like TypeScript, tslint, prettier, etc. If only one of your packages use a devDependency, you'll have to decide whether you'd like to install that with the subpackage (making it clear that only one package depends on it), or at the root. |
| "Where should I add `dependencies`?"                                                        | Each subpackage's `dependencies` should always be tracked explicitly in its `package.json` file.                                                                                                                                                                                                                                                                                                                      |
