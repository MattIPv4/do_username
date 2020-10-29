# Publishing

Maintainer notes for publishing the NPM module.

## 1. Update version

Update the version in [package.json](package.json).

Run `npm i --package-lock-only` to update version in [package-lock.json](package-lock.json).

## 2. Test locally

The updated version of the package can be added to a local project's dependencies with `file:path/to/do_username/javascript`.

It can then be required in the code as `const DOUsername = require('do_username');`.

## 3. Preview files to publish

To preview all files that will be included in the published module, run `npm publish --dry-run`.

## 4. Publish to NPM

Publish the new version of the module with `npm publish`.
