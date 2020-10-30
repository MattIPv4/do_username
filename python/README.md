# do_username

A DigitalOcean-community-themed username generator - the Python version.

https://pypi.org/project/do_username/

## Install

`pip3 install do_username`

## Example

### Using the CLI

```
#Call the CLI command with a max length of 30 characters
$ do_username


# Call the CLI command with a max length of 15 characters
$ do_username 10
```

### As a python module

```python
from do_username import generate

# Generate a random username with max length of 30 characters
print(generate())

# Generate a random username with max length of 15 characters
print(generate(15))
```

## License

This project is licensed under [Apache 2.0](LICENSE)