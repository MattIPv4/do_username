# Publishing

Maintainer notes for publishing the Ruby gem.

## 1. Update version

Update the version in [do_username.gemspec](do_username.gemspec).

Run `bundle lock` to update version in [Gemfile.lock](Gemfile.lock).

## 2. Build gem

Run `gem build do_username.gemspec` to build the latest version of the gem.

## 3. Test locally

New version of the gem can be installed locally with `gem install ./do_username-xxx.gem`.

Can then be required `require 'do_username'` in `irb` to test.

## 4. Commit & tag

Create a new commit with the version number updates, the commit name should be `xxx-ruby`, where `xxx` is the version.

A tag should be created for this commit with the same name.

## 5. Publish to Rubygems

Push the new version of the gem with `gem push do_username-xxx.gem`.
