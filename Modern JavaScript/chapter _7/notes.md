Web forms: capture data or information from a user
we use events - 'submit event' = click + submit event

when listening to a submit event, we attach the event listener to the form, not the submit button

regular expressions === regex
allow us to type out patterns that are used to check the input is valid

creating regex

- all regex start and end with /  

to match a word

- /word/ : anywhere in the text
- /^word$/ : only when standing alone as whole
- /^[a-zA-z0-9]{6,10}$/ : 6-10 letter long, letter and number combo