package ch2

import "fmt"

func Convert() {
	var x int = 10
	var y float64 = 30.2

	var sum1 float64 = float64(x) + y
	var sum2 int = x + int(y)

	fmt.Println(sum1, sum2)
}
