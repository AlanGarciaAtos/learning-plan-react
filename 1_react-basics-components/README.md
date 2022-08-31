This is a really good summary about react (basic concepts) https://www.freecodecamp.org/news/react-interview-questions-and-answers/

## Why components?

A component is a self-contained, reusable code block that divides the user interface into smaller pieces rather than building the entire UI in a single file.

**Reusability:**
Don't repeat yourself
<br>

**Separation of Concerns:**
Don't do too many things in one and the same place ( function )

Split big chunks of code into
multiple smaller functions

A _declarative_ style, like what react has, allows you to control flow and state in your application by saying "It should look like this" (let react figure it out).
<br>
An _imperative_ style turns that around and allows you to control your application by saying "This is what you should do".

**Declarative approach his is great analogy:**

> An imperative response: Go out of the north exit of the parking lot and take a left. Get on I-15 south until you get to the Bangerter Highway exit. Take a right off the exit like you’re going to Ikea. Go straight and take a right at the first light. Continue through the next light then take your next left. My house is #298.

> A declarative response: My address is 298 West Immutable Alley, Draper Utah 84020\*

## What is JSX?

Is a javasript extension syntax.
<br>
Enables and simplifies the creation of HTML in React, resulting in more readable and understandable markup.

### Output dynamic data

To make use of a variable we need to make use of {}

```jsx
const expenseTitle = 'Car Insurance';
```

## Props

Props are also referred to as properties ("_customHTMLattributes_"). They are used to transfer data from one component to the next (parent component to child component). They are typically used to render dynamically generated data.

> Note: A child component can never send props to a parent component since this flow is unidirectional (parent to child).

When we combined components we're making composition

### Closer look to JSX

In legacy projects in react we will see `import` of React although in newer version you don't need to, because react do it under the hood.
<br>
You will see the `import` in EVERY component (I think).

This was in old versions, less readable and verbose

```js
return React.createElement (
  'div',
  { } ,
  React.createElement ( 'h2', {}, "Let's get started!");
  React.createElement ( Expenses, {items:expenses});
```

New version, better and readable

```js
return(
  <div>
    <h2> Let's get started! </h2>
    <Expenses items={expenses}>
  </div>
)

```

### Questions

1. <React.StrictMode>, people something doesn't use this only <App/>
2. Difference if a file is jsx and js
3. Miss the autocomplete snippet for importing files

### TODO

1. **Tarea: Time to Practice: React & Component Basics** Time to practice what you learned and write your own React code, including components, props & more!
2. Hacer lode la tarea y ver que max tiene un componente `Expenses` tenemos que crearlo o verlo
3.
