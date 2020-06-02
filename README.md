### Auto ccomplete

### Case 1:

When there exist multiple results of the same string, the detail is added after a hyphen

### Case 2:

Results seem to assume for some autocorrect, and therefore won’t always be prefixed by what’s in the input bar. In such cases, the entire result is bolded.

### Case 3:

Results are shown for every character input, including backspace, and only the most recent is shown. Google appears to abort outstanding​ requests if what’s in the input bar is no longer the same. This is performance optimization we can ignore for our component.

### Case 4:

There doesn’t appear to be caching on the client-side for results, which means that if I input something that the server’s already given me a response for, the client will still make another request.

### Case 5:

The buttons merge with the autocomplete results when they appear but are standalone below the search bar when the results are not present.

### structure

The search component looks like it can be split up into three main sub-components:

The search bar where the input and icon are
The autocomplete results
The buttons
