# do_username

A DigitalOcean-community-themed username generator.

https://rubygems.org/gems/do_username

## Install

`gem install do_username`

or, with bundler:

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

## License

This project is licensed under [Apache 2.0](LICENSE) 
