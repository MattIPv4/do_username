# do_username

A DigitalOcean-community-themed username generator.

## Implementations

The [Ruby gem](ruby) acts as the main implementation, with all other
implementations porting and mirroring the interface that the Ruby gem offers.

All implementations will provide the `generate` method. This method shall have a
single, *optional* argument that defines the maximum (inclusive) size of the
generated username. The default value for this argument shall be `30`.

All implementations will provide a set of (frozen) constants  that are arrays of
strings, with all the parts used randomly during username generation:

- `SEA_CREATURES`, all the creature *nouns*.
- `SEA_OBJECTS`, all the misc. object *nouns*.
- `ADJECTIVE_DESCRIPTORS`, *descriptors* for all nouns (creatures + objects).
- `SIZE_DESCRIPTORS`, *descriptors* for all nouns (creatures + objects).
- `CREATURE_DESCRIPTORS`, *descriptors* specific to creature nouns.
- `SEA_LIST`, a combination of the creature + object *nouns*.
- `DESCRIPTORS`, a combination of the generic (adjective + size) *descriptors*.
- `COLORS`, all possible (sea-related) *colors*.

All generated usernames will be in CamelCase with no whitespace present.
Usernames are formed from 1 to 3 parts, a random `noun`, a random `descriptor`,
and a random `color`. Each constituent part should have the first character set
to uppercase by the implementation, with all subsequent characters having their
case preserved from the source string (e.g. `scubaDiver` -> `ScubaDiver`). These
parts are concatenated to form the final username with the following strategy:

1. If the combination of `descriptor + color + noun` is less than or equal to
the max length, return that value.
2. Else, if the combination of `descriptor + noun` is less than or equal to the
max length, return that value.
3. Else, if the combination of `color + noun` is less than or equal to the max
length, return that value.
4. Else, return just the `noun`, trimmed to the max length set (may be the full
string).

Both the `generate` method and the constants should be provided as part of a
module (or as static methods/constants in a class) named `DOUsername`, such that
the method can be accessed via `DOUsername.generate`, where appropriate.

### Ruby

[README](ruby/README.md)

https://rubygems.org/gems/do_username

`gem install do_username`

### JavaScript

[README](javascript/README.md)

https://www.npmjs.com/package/do_username

`npm install do_username`

### Rust

[README](rust/README.md)

https://crates.io/crates/do_username

Cargo.toml
`do_username = "1.0.0"`

## License

This project is licensed under [Apache 2.0](LICENSE) 
