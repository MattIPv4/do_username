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
    
    // If you want to set a length use generate(Some(<number>))
    println!("{}", do_username::generate(Some(10)));
    
    // If you want the default length (30), use None
    println!("{}", do_username::generate(None));
}
```
