Project: Mastering Sass

This project focuses on understanding and utilizing Sass (Syntactically Awesome Style Sheets), a powerful CSS preprocessor that enhances CSS with features like variables, nesting, mixins, and more.
What is Sass?

Sass is a preprocessor scripting language that is interpreted or compiled into standard CSS. It extends the capabilities of CSS, allowing for more organized, maintainable, and efficient stylesheet development. Sass helps you write CSS with "superpowers" by introducing programming-like constructs.
Why Use Sass?

    DRY Code: Reduces repetition in CSS (Don't Repeat Yourself).
    Maintainability: Makes large stylesheets easier to manage and update.
    Efficiency: Speeds up development with reusable components and logic.
    Organization: Allows for modular and well-structured style code.
    Enhanced Features: Provides variables, nesting, mixins, inheritance, functions, and control directives not available in plain CSS.

Sass Preprocessing

Browsers don't understand Sass directly. Sass code (written in .scss or .sass files) must be compiled (or preprocessed) into a standard .css file. A Sass compiler (e.g., Dart Sass) reads your Sass files, processes all the Sass-specific features (like replacing variables with their values, un-nesting selectors, including mixins), and outputs a regular CSS file that browsers can interpret.
Sass vs. SCSS Syntax

Sass offers two syntaxes:

    SCSS (Sassy CSS):
        Uses the .scss file extension.
        It's a superset of CSS, meaning any valid CSS is also valid SCSS.
        Uses curly braces {} and semicolons ; like CSS.
        Generally preferred for its similarity to CSS, making it easier to adopt.
        Example:scss /* SCSS Example */ $primary-color: #007bff; body { background-color: $primary-color; font-size: 16px; } nav { ul { list-style: none; } li { display: inline-block; } }


    Indented Syntax (Sass):
        Uses the .sass file extension.
        Relies on indentation to define structure and newlines to separate properties (no curly braces or semicolons).
        Offers a more concise syntax.
        Example:
        Code snippet

        // Indented Syntax Example
        $primary-color: #007bff
        body
          background-color: $primary-color
          font-size: 16px
        nav
          ul
            list-style: none
          li
            display: inline-block

Core Sass Features
1. Variables

Store reusable values like colors, fonts, or sizes.

    Declaration: $variable-name: value;
    Usage: property: $variable-name;
    SCSS

    $link-color: blue;
    a { color: $link-color; }

