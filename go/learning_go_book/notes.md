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


