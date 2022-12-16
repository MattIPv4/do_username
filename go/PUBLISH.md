# Publishing

Maintainer notes for publishing the Go module.

## 1. Test locally

The package can be added to a local project's dependencies by overriding where the module resolves:

```bash
go mod init goproj # Initialize local project
go mod edit -replace=github.com/MattIPv4/do_username/go=/path/to/do_username/go # Override module
go get github.com/MattIPv4/do_username/go # Add module to project
```

It can then be imported in the code as `"github.com/MattIPv4/do_username/go"`.

## 2. Commit & tag

Create a new commit with the version number updates, the commit name should be `xxx-go`, where `xxx` is the version.

A tag should be created for this commit with the same name.

## 3. Push

There is no module registry for the Go module, it is installed from the git repository.
As such, push the commit and tag to the remote to publish the new version.
