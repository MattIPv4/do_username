# Publishing

Maintainer notes for publishing the Cargo module.

## 1. Update version

Update the version in Cargo.toml.

You also should make a Github release.

## 2. Test locally

Add the file to the Cargo.toml

```toml
do_username = { path = "./rust" }
```

And import it like you normaly would.

## 3. Preview files to publish

To preview all files that will be included in the published module, run `cargo publish --dry-run`.

## 4. Publish to Crates.io

Publish the new version of the module with `cargo publish`.