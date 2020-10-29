# do_username

A DigitalOcean-community-themed username generator.

## Install

```
go mod init goproj
go get github.com/MattIPv4/do_username/go
```

## Example

```go
package main

import (
	"fmt"
	"github.com/ThatCopy/go-do-namegen"
)

func main() {
	fmt.Println(dousername.GetName())
}

```

## License

This project is licensed under [Apache 2.0](LICENSE) 