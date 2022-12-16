# do_username

A DigitalOcean-community-themed username generator.

## Install

`go get github.com/MattIPv4/do_username/go`

## Example

```go
package main

import (
	"fmt"
	"github.com/MattIPv4/do_username/go"
)

func main() {
	fmt.Println(dousername.Generate())
}
```

## License

This project is licensed under [Apache 2.0](LICENSE) 
