# do_username

A DigitalOcean-community-themed username generator.

## Install

Cargo.toml
```toml
do_username = "1.0.0"
```

## Example

```rust
use do_username::do_username;

fn main() {
    // Generate a random username
    println!("{}", do_username::generate());
}
```
