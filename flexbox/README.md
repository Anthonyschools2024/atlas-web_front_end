Understanding Flexbox 📐

Flexbox, short for the Flexible Box Layout Module, is a modern CSS layout model designed for arranging items in a single dimension—either as a row or a column. It provides an efficient way to distribute space and align content within a container, even when the item sizes are unknown or dynamic.

At its core, Flexbox operates on two main components: the flex container (the parent element) and the flex items (the direct children). The layout is controlled by the relationship between a main axis and a cross axis.

    Main Axis: The primary axis along which flex items are laid out. By default, this is horizontal (row).
    Cross Axis: The axis perpendicular to the main axis. By default, this is vertical.

Properties for the Flex Container

These properties are set on the parent element to control the overall layout of its children.
display

This is what turns an element into a flex container.

    display: flex; - The container behaves like a block-level element.
    display: inline-flex; - The container behaves like an inline-level element.

flex-direction

This property defines the direction of the main axis.

    row (default): Items are arranged horizontally, from left to right.
    row-reverse: Items are arranged horizontally, from right to left.
    column: Items are arranged vertically, from top to bottom.
    column-reverse: Items are arranged vertically, from bottom to top.

justify-content

This aligns items along the main axis. It's your primary tool for distributing space.

    flex-start (default): Items are packed toward the start of the direction.
    flex-end: Items are packed toward the end.
    center: Items are centered along the line.
    space-between: Items are evenly distributed; the first item is at the start, the last is at the end.
    space-around: Items are evenly distributed with equal space around them.

align-items

This aligns items along the cross axis.

    stretch (default): Items are stretched to fill the container's height (for rows) or width (for columns).
    flex-start: Items are aligned to the start of the cross axis.
    flex-end: Items are aligned to the end of the cross axis.
    center: Items are centered on the cross axis.

flex-wrap

This controls whether items will wrap onto a new line if they run out of space on the current one.

    nowrap (default): All items are forced onto a single line.
    wrap: Items will wrap onto multiple lines from top to bottom.
    wrap-reverse: Items will wrap onto multiple lines from bottom to top.

Properties for the Flex Items

These properties are set on the direct children of the flex container to control their individual behavior.
flex-grow

This defines an item's ability to grow if there is extra space. It accepts a unitless value that serves as a proportion.

    flex-grow: 0; (default): The item will not grow.
    flex-grow: 1;: The item will take up any available space, sharing it equally with other items that also have flex-grow: 1.

flex-shrink

This defines an item's ability to shrink if there isn't enough space.

    flex-shrink: 1; (default): The item is allowed to shrink if needed.
    flex-shrink: 0;: The item will not shrink and may overflow the container.

flex-basis

This defines the default size of an item before the remaining space is distributed. It can be a length (px, %, rem) or the keyword auto.
flex (Shorthand)

This is the shorthand for flex-grow, flex-shrink, and flex-basis. It's highly recommended to use this.

    flex: 0 1 auto; (default)
    flex: 1; (expands to 1 1 0%) - A common value to make an item take up the remaining space.
    flex: auto; (expands to 1 1 auto)
    flex: none; (expands to 0 0 auto)

order

This allows you to change the visual order of flex items without changing the HTML source code. The default value for all items is 0.

    order: -1;: The item will appear before any items with order: 0.
    order: 1;: The item will appear after any items with order: 0.

align-self

This allows a single flex item to override the align-items value of its parent container. It accepts the same values as align-items (auto, flex-start, flex-end, center, stretch).