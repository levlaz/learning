# Preface

Code examples can be found here: https://github.com/learning-go-book

# Chapter 1: Setting up Development Environment

Common go tools
| command | purpose            |
|---------+--------------------|
| build   | compiler           |
| fmt     | code formatter     |
| mod     | dependency manager |
| test    | test runner        |
| vet     | linter             |
| get     | package manager    |

There was a lot of weirdness in the past with GOROOT and GOPATH but all of that
has been resolved now. I think its introduced new weirdness but for all intents
and purposes you can now do whatever you when it comes to organizing your files.

`go.mod` is similar to `requirements.txt`; it should not be edited directly but
instead use the `go get` and `go mod tidy` instead.


* Read https://go.dev/doc/effective_go
* Read https://github.com/golang/go/wiki/CodeReviewComments

Goodies for IDEs https://github.com/golang/go/wiki/IDEsAndTextEditorPlugins 


There is a go playground that you can use to test things out if you'd like. https://go.dev/play/ 


# Chapter 2: Predeclared Types and Declarations

* Zero Value -> Go assigns a default zero value to any variable that is declared by not assigned a value. 
* Literals 
    * integer 
        * Base 10 by default but you can use prefixes for other base types. 
            * 0b - binary 
            * 0o - octal 
            * 0x - hex
        * You can put underscores inside of a literal integer to make them easier to read 
            1_000 = 1000
    * floating point
        * exponent specified with e or p 
    * rune 
        * character surrounded by single quotes 
        * single and double quotes are not interchangable in go. 
    * string 
        * double quotes for an interpreted string literal (will interpret rune literals into single characters)
        * raw string literal using `
            * everything is returned as is 
* Literals are considered untyped 
* `bool` represents boolean variables can be `true` or `false`
* Numeric
    * 12 types in three categories 
    * Integer
        * signed and unsigned from one to eight bytes 
    
            Type name	Value range
            int8    –128 to 127
            int16   –32768 to 32767
            int32   –2147483648 to 2147483647
            int64   –9223372036854775808 to 9223372036854775807
            uint8   0 to 255
            uint16  0 to 65535
            uint32  0 to 4294967295
            uint64  0 to 18446744073709551615
        * special integert types
            byte is the same as uint8 
            int
                * on 32bit cpu its int32
                * on 64bit cpu its int64 
        * when to use which?
            * use binary file format or network protocol that uses integers of specific size or sign, use the corresponding one 
            * if writing library, take advantage of go generics support 
            * in all other cases use int 
        * integer operations 
            +, -, *, /, %
            combine with = to modify variable 
            += -= *= /= %=
            compare with 
            == != > >= < <=
            bit manipulation
            << >> (shift left or right)
            & mask AND | OR ^ XOR &^ AND NOT 
    * Floating Point Types
        * float32 and float64
        * floating point number cannot represent a decimal exactly. THey should not be used to represent money or any other value that must have an exactly decimal representation. 
    * Complex Types
    * LOL 
        > You might be wondering why Go includes complex numbers. The answer is simple: Ken Thompson, one of the creators of Go (and Unix), thought they would be interesting. There has been discussion about removing complex numbers from a future version of Go, but it’s easier to just ignore the feature.
    * Gonum package does have some stuff for doing math if it ever comes to that. https://www.gonum.org 
* Taste of Strings and Runes
    * rune and int32 are aliases, use the one that makes sense when assigning. 
* No automatic type conversion, you must be explicit, this includes booleans, there are no truthy or falsey values. 

## var Versus :=

Most verbose way 

    var x int = 10 

You can leave off the int if the righthand value is the expected type since the default type of an integer literal is int 

    var x = 10 

If you want to declare variable and assign zero value 

var x int 

You can declare multiple variables of different types at once. 

var x, y = 10, "hello"

You can also wrap these in a declarations list 

```
var (
    x int
    y = 20
    z int = 30 
    d, e = 40, "hello"
    f, g string
)
```

* shorthand within a function 

var x = 10 
x := 10 

:= allows you to assign values to existing variables as long as here is at least one new variable on the lefthand side of the := 

:= is not legal outside of functions 

TIP -> always use what makes your intent clearest 

## Using const

This is limited, its a way to give names to literals. They can only hold values that the compiler can figure out at compile time. 

There is no way in go to declare that a variable is immutable. 

## Typed and Untyped Constants

## Unused Variables 

* one goal of go is to make it easier for large teams to collaborate on programs. 
* every declared local variable must be read. (except package level vars, which is why you should not use them)
    * go does allow you to create unread constants with const. 

## Naming Variables and Constants

More info on best practices here: https://google.github.io/styleguide/go/decisions#naming 