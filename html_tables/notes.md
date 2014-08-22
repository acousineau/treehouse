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
