# Publishing

Maintainer notes for publishing the Cargo module.

## 1. Update version

Update the version in [Cargo.toml](Cargo.toml).

Regenerate [Cargo.lock](Cargo.lock) with `cargo generate-lockfile`.

Also, update the version in [README.md](README.md) and [../README.md](../README.md).

## 2. Test locally

Add the file to the Cargo.toml

```toml
do_username = { path = "./rust" }
```

And import it like you normally would.

## 3. Commit & tag

Create a new commit with the version number updates, the commit name should be `xxx-rust`, where `xxx` is the version.

A tag should be created for this commit with the same name.

## 4. Preview files to publish

To preview all files that will be included in the published module, run `cargo publish --dry-run`.

## 5. Publish to Crates.io

Publish the new version of the module with `cargo publish`.
