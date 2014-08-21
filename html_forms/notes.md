# HTML Forms

## Form Basics

### The Form Element

This element wraps all other elements of the form on the page.

```html
<form></form>
```

Can't add forms inside of other forms

```html
<form action="index.html" method="POST"></form>
```

Action: Web Address of program that processes the information submitted via the form

Method: HTTP Method browser uses to submit the form - POST, GET

### The Input Element

Most common form element

```html
<input type="text" id="name" name="user_name">
```

ID: Not required - but good idea to add one - target with CSS or JS
Also needed to associate labels to specific form controls

Name: Needed so Server can understand the form data and process values appropriately

### The Textarea Element

```html
<textarea id="bio" name="user_bio"></textarea>
```

Used for fields of text input that require more than one line.

### The Button Element

```html
<button type="submit">Sign Up</button>
```

Allows user to submit the form and send data to the server

There are 2 other types - reset, and button

Reset: Clears all form data
Button: No default behavior - intended to use with JS

## Organizing Forms

### The Label Element

Labels are used to describe to the user what type of information should be entered
to it's corresponding field.

```html
<label for="name">Name:</label>
<input type="text" id="name" name="user_name">
```

For: Corresponds to the ID attribute to field. Also provides focus to corresponding
form field when clicked

### Fieldsets and Legends

Fieldsets allow you to group together particular sections of a form

Legends allow you to label fieldsets.

```html
<form>
    <fieldset>
        <legend><span class="number">1</span>You Basic Info:</legend>
        <input type="text" id="name" name="user_name">
        <input type="email" id="email" name="user_email">
    </fieldset>
    
    <fieldset>
        <legend><span class="number">2</span>You Profile:</legend>
        <textarea id="bio" name="user_bio"></textarea>
    </fieldset>
</form>
```

## Choosing Options

### Select Menus