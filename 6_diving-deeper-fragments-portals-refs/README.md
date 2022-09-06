### JSX limitations
You can return only one root element, we can use [ ] but it's more complex and need a key. 
```jsx
return (
  <div>
    <h2> Hi there ! </h2>
    <p> This does not work :-( </p>
  </div>
) ;

```
Important : Doesn't have to be a < div > - ANY element will do the trick .

Using divs can make out code a div soup. A lot of divs in our application.

If you want to render without using divs `<React.Fragment> </React.Fragment>` or `<> </>`

Or you can make a little trick by making a wrapper as a "component"
```jsx
const Wrapper = (props) => {
return props.children;
}

export default Wrapper;
<Wrapper>...</Wrapper>
```

### React portals
Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
```jsx
ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
)
```
### React "ref"s
Refs provide a way to access DOM nodes or React elements created in the render method.

You only want to read a value and you never plan on changing anything, well, then you don't really need state because just to use state as a keylogger is not that great. Unnecessary code and work. So if you just want to read a value, refs are probably better.

````jsx
const nameInputRef = useRef();
const enteredName = nameInputRef.current.value;

//A lot of logic
if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
  setError({
    title: "Invalid input",
    message: "Please enter a valid name and age (non-empty values).",
  });
  return;
}
if (+enteredUserAge < 1) {
  setError({
    title: "Invalid age",
    message: "Please enter a valid age (> 0).",
  });
  return;
}
//A lot of logic

<input id="username" type="text" ref={nameInputRef} />

nameInputRef.current.value = ""; //Reset the name
````

### Controlled and uncontrolled components