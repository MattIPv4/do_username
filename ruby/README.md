# do_username

A DigitalOcean-community-themed username generator.

https://rubygems.org/gems/do_username

## Install

`gem install do_username`

Or, with bundler:

`bundle add do_username`

## Example

```ruby
require 'do_username'

# Generate a random username with a max length of 30 characters
puts DOUsername.generate

# Generate a random username with a max length of 15 characters
puts DOUsername.generate(15)
```

```text
AdorableBlueGreenKelp
LargeStarfish
```

## CLI

```bash
# Call the CLI command with a max length of 30 characters
$ do_username

# Call the CLI command with a max length of 10 characters
$ do_username 10 
```

```text
GiantBlueGreenScubaDiver
BlueMorel
```

## License

This project is licensed under [Apache 2.0](LICENSE) 
