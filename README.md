When text is highlighted, a tooltip shows up.
When text is highlighted, an HTML element is displayed in the middle of the highlighted text.
When I click down on some text, drag my mouse over some text, and release the mouse, an HTML element is added to the page positioned over the middle of the text that was dragged over.
When I click down on text in the div of the article, drag my mouse over some text, and release the mouse, an HTML element is added to the page centered slightly above the middle of the selected text. The exception is when the selection spans multiple lines, in which case it’s positioned over the middle of the first line.

### WEB API

https://developer.mozilla.org/en-US/docs/Web/API/Selection

### API

window.getSelection() ==> get selected node.

Selection.anchorNode - returns where selection begins
Selection.anchorOffset - offset value
Selection.focusNode - returns where selection ends
Selection.focusOffset - offset value
anchorNode.data.substring(selection.anchorOffset, selection.focusOffset) ---> it gives selected text.

https://medium.com/@Alexandra2XU/window-getselection-and-range-in-javascript-5a13453d22
