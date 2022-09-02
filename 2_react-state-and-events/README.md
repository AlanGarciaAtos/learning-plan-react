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
