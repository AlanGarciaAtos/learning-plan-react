This is a really good summary about react (basic concepts) https://www.freecodecamp.org/news/react-interview-questions-and-answers/

# Why components?

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

```jsx
return React.createElement (
  'div',
  { } ,
  React.createElement ( 'h2', {}, "Let's get started!"),
  React.createElement ( Expenses, {items:expenses});
```

New version, better and readable

```jsx
return(
  <div>
    <h2> Let's get started! </h2>
    <Expenses items={expenses}/>
  </div>
)

```

# React State & Working with Events

Adding the 'Handler' tells its a function attached to an eventListener, more for naming convention.

```jsx
const clickHandler = () => {
  console.log('Clicked!!!');
};
<button onClick={clickHandler}>Change Title</button>;
```
<hr/>

# React State & Working with Events

Adding the 'Handler' tells its a function attached to an eventListener, more for naming convention.

```jsx
const clickHandler = () => {
  console.log('Clicked!!!');
};
<button onClick={clickHandler}>Change Title</button>;
```

Example of naming convention in hooks

```jsx
const [title, setTitle] = useState(props.title);
```

Updating State That Depends On The Previous State
Some examples you can use while using useState

```jsx
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

const titleChangedHandler = (e) => {
  setEnteredTitle(e.target.value);

  //Another way to use useState with an object
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: e.target.value,
  // });

  //If your state update depends on the previous state, use this function form.
  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredTitle: e.target.value,
  //   };
  // });
};
```

### Two-Way binding

Means that for inputs we don't just listen to changes, but we can also pass a new value back into the input. (Reset or change the input programatically)

Useful when you're working with forms because it allows you to gather user input, but then also change it.

### Lifting State up

It is about moving data from a child component to some parent component to either use it there or to then pass it down to some other child component.

### Controlled vs Uncontrolled component

