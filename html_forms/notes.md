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

Gives finite options to the user to select from.

```html
<select name="user_job" id="job">
    <option value="frontend_developer">Front End Developer</option>
    <option value="php_developer">PHP Developer</option>
    <option value="python_developer">Python Developer</option>
</select>
```

Options can be grouped further with the ```<optgroup>``` element

```html
<select name="user_job" id="job">
    <optgroup label="Web">
        <option value="frontend_developer">Front End Developer</option>
        <option value="php_developer">PHP Developer</option>
        <option value="python_developer">Python Developer</option>
        <option value="rails_developer">Rails Developer</option>
        <option value="web_designer">Web Designer</option>
        <option value="wordpress_developer">WordPress Developer</option>
    </optgroup>
    <optgroup label="Mobile">
        <option value="android_developer">Android Developer</option>
        <option value="ios_developer">iOS Developer</option>
        <option value="mobile_designer">Mobile Designer</option>
    </optgroup>
    <optgroup label="Business">
        <option value="business_owner">Business Owner</option>
        <option value="freelancer">Freelancer</option>
    </optgroup>
</select>
```