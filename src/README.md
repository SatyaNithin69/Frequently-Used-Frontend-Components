Let’s take note of the features we want to implement.

There’s a top-level menu bar that is always visible.
Hovering over an item is what brings up submenus
Submenus are separated into two, labeled columns
Submenus include a portion for images
Submenus are all the same size
Transitioning from one submenu to another is seamless. Rather than closing and opening animations, the contents change
The submenu columns have clickable links, but the top-level option is also clickable (e.g., users can click on “Electronics” but also a specific type of electronics)
Submenu images are also clickable
When a user’s mouse leaves the submenu, it closes
Now, Let’s get started with building such a menu of our own!

### Naming conventions

https://codepen.io/hidanielle/post/css-methodologies-naming-conventions-and-file-structures

### REM and padding

The rem unit was introduced to reconcile differences in sizing across various devices (and the settings on those devices). Setting things in px can be restrictive when resizing occurs on browsers. The em property can be used instead of px to get around this, defining sizes relative to a base size. The problem with em is that the base size is defined in terms of the element’s parent, which forces developers to have to concern themselves with compounding effects (for example: define a list as a certain em, then a nested list as another em, etc). rem is simply em except the base size is always the root font size. This is almost always what you want, except for with cases in which your element’s size stays constant regardless of zoom, like the border width.

As for the padding property, we want to give the whole menu some room as a whole to be distinguished from the border and submenu dropdown when we eventually implement it. However, each menu item also has some distance between each other. We can use margin, but we can see that when the submenu appears, the borders include the spacing, so padding makes more sense.

### Adding hover style

This top level menu is looking pretty complete! The only thing left is css properties on hover and the current page. It looks like home in the original screenshot is bolded and underlined to signal that it’s the current page, and hovering changes the background and modifies the borders. Let’s add a css class in which page is current, and some properties to :hover to put the finishing touches. And since the top level menu items themselves are clickable, let’s wrap them around <a>s.

### removing space in inline block elements

https://css-tricks.com/fighting-the-space-between-inline-block-elements/

### submenu

The submenu we will be implementing appears when we hover over a menu item. It looks as if it’s extending out of the menu item, but it’s actually just an overlay that stays in the same position regardless of the hovered item. The appearance of connectivity is given by the hovered menu item background matching that of the submenu.

So with that, let’s create this overlay to show up for now. Nothing fancy, just a div with some width and height.

Something that I like to do while tweaking CSS – especially positioning and sizing – is to liberally give color to things that take up space. For example, the default white background and the overlay are similar in color (along with the menu colors), so to avoid any confusion, we’re just going to paint the background blue and the overlay red for now. This makes it abundantly clear the space that each element takes up.

### Fixing hover behavior

This is a good time to bound the width of our menu and center it. Adding margin: 0 auto often does the trick for horizontal centering and will keep it centered as you increase or decrease the number of menu items. I’ve put the submenu as an element within the menu div, so there’s cohesion between elements that share similar positioning properties. If the layout requirements change in a way that we want the element to be closer to the left, I can add properties to the parent menu element instead of two different ones if I had separated them. But I don’t want it at the same level as the menu items since they’re not the same category of things, so I’ll wrap that in its own div as well and call it menu**main. Of course, this means I have to change all the previous menu**item to menu**main**item (in both the HTML and CSS).

Now that the background color is blue, it helps me notice something I hadn’t before. Upon hover, the first menu item shouldn’t be given a left border, and the last menu item shouldn’t be given a right. The border appears out of the bounds of the menu. It’s much easier to catch things like that when you have this much contrast between your elements in development.

widget
Let’s fix that. In CSS, you can chain multiple pseudo-classes so that we can target the first with :first-child:hover and the last one with :last-child:hover. With that, we can remove the overflow behavior easily by overriding properties. In CSS, in the event of conflicting properties, the specificity of the targeting determines precedence.

### Approach

Let’s go ahead and take the approach we did implementing the top-level menu. In general, I almost always find myself taking these steps when creating new components:

Figure out groupings
Name classes and fill divs with text
Switch the colors temporarily to give distinct contrast for easier styling
Apply spacing styles in the order of outer to the inner (e.g., child divs will be styled after their parent ones)
Switch off ugly temporary colors, use real colors, and style the rest.
