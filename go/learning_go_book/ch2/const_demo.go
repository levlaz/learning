package ch2

import "fmt"

const x int64 = 10

const (
	idKey   = "id"
	nameKey = "name"
)

const z = 20 * 10

func ConstDemo() {
	const y = "hello"

	fmt.Println(x)
	fmt.Println(y)

	// code below will not compile
	// x = x + 1 // will not compile
	// y = "bye" // will not comiple

	fmt.Println(x)
	fmt.Println(y)
}
