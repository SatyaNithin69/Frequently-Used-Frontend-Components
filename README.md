### Rules

Name: A non-empty​ string of alpha characters
Validate after the field is blurred (cursor no longer in the field)
Username: A string of characters which are either numbers, letters, periods, or underscores.
Validate after the field is blurred
Password: A string of alphanumeric characters greater than length 6
Validate as typed
Rated by the following:
Weak: Less than 6 length
Fair: Greater than 6 length
Good: Greater than 6 length and has a mix of letters and numbers
Birthday: Numbers
Validate after the field is blurred
Extra guidance provided by:
inability to continue typing past character limit (2 for day, 4 for year)
inability to type non-numeric characters (typing ‘a’ does nothing)
Phone number: Numbers with hyphens and parentheses
Parentheses can only surround the initial set of numbers
Hyphens must appear between numbers
Current email address: String of ASCII characters with @ and . existing between any characters (can’t be at the beginning or end)​

### password validation

Some basic validation rules
The “Confirm Password” field compares the value in the password field for validation.
Since these are the only fields that have validation dependencies, we need to run validation on both upon change to either.
So when the validation for password is run, the confirmPassword element has to be selected and validated against. And vice versa.
Previously, our validate function took an event as the parameter. We want to reuse the function, and confirmPassword won’t be attached to an event. So we have it accept the HTML element directly.
This means the listener can’t be validate. Listener methods are called with event arguments, so we use an anonymous function that calls validate with event.target.
