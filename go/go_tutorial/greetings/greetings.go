package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

// Hello returns a greeting for the named person.
func Hello(name string) (string, error) {
	// If no name was given, return an error with a message.
	if name == "" {
		return "", errors.New("empty name")
	}
	// long way
	// var message string
	// message = fmt.Sprintf("Hi, %v. Welcome!", name)
	//
	// Go has many verbs that you can find here: https://pkg.go.dev/fmt#hdr-Printing
	//
	// shortcut :=
	// Return a greeting that embeds the name in a message.
	message := fmt.Sprintf(randomFormat(), name)
	return message, nil
}

// Hellos returns a map that associates each of the named people
// with a greeting message. We are creating this new function because it
// creates a breaking change to the API and this approach allows
// folks to continue to use the Hello function.
func Hellos(names []string) (map[string]string, error) {
	// a map to associate names with mesages
	messages := make(map[string]string)

	// Loop throught he received slice of names, calling
	// the Hello function to get a message for each name.
	for _, name := range names {
		message, err := Hello(name)
		if err != nil {
			return nil, err
		}

		// In the namp, associate the retrieved message with
		// the name.
		messages[name] = message
	}
	return messages, nil
}

// randomFormat returns one of a set of greeting messages. The returned
// message is selected at random.
//
// Note: since this func is lowercase it is not exported.
func randomFormat() string {
	// A slice of message formats.
	formats := []string{
		"Hi, %v. Welcome!",
		"Great to see you, %v!",
		"Hail, %v! Well met!",
	}

	// Return a randomly selected message format by specifying
	// a random index for the slice of formats.
	return formats[rand.Intn(len(formats))]
}
