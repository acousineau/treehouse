# HTML Tables

## Table Basics

### Create a Basic Table

Table Element - Wrapper for a table

```html
<table>

</table>
```

Table Row - ```<tr></tr>``` - determine row
Table Cell - ```<td></td>``` - determine column - contains table data

### The Table Header Cell Element

A special cell element can be used to tell web crawlers, screen readers, and users
that a row in the table is in fact a label for the rest of the table.

```html
      <tr>
        <th scope="col">Name</th>
        <th scope="col">E-mail</th>
        <th scope="col">Job role</th>
      </tr>
      <tr>
        <th scope="row">Andy Cousineau</th>
        <td>andrew.cousineau@gmail.com</td>
        <td>Front End Developer</td>
      </tr>
```

SCOPE: determines what the header cell is meant to be used for

## Structuring Tables

### The Table Head and Body Elements

Just like HTML pages have a Head and Body - Tables can have the same thing

```html
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Job role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Nick Pettit</th>
          <td>nick@example.com</td>
          <td>Web Designer</td>
        </tr>
      </tbody>
```

### The Table Foot Element

What should go in the footer?
* Summary of Table
* Sums, Totals, Averages
* Meta Info about Table
  * How frequently table is updated
  * Copyright info
  * Source of Data

Table Footer actually goes before table head and before table body - see example

Because it is common to have a single cell in the footer, it's a good idea to span 
that single cell across the entire table with the ```colspan``` attribute

```html
<tfoot>
  <tr>
    <td colspan="3">Data refreshes every 15 minutes.</td>
  </tr>
</tfoot>
```

### The Caption Element

A Title for the Table - comes immediately after the opening ```<table>``` tag

```html
<table>
  <caption>Employee Information</caption>
</table>
```

### More Table Tips

NEVER USE TABLES FOR LAYOUT - should only be used to display tabular data

