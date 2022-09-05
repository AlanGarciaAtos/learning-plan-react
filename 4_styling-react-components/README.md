# Styling react components

### Inline styles
```jsx
const [isValid, setIsValid] = useState(true);

<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
  <input style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",}}
          type="text"
          onChange={goalInputChangeHandler}
  />
```

### Setting CSS Classes Dynamically
Note: We're also using the css classes from the css file. _(form-control & invalid)_

```jsx
const [isValid, setIsValid] = useState(true);
<div className={`form-control ${!isValid ? "invalid" : ""}`}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</div>
```

### Styled Components
Easy way that I saw
```jsx
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }
`;

<FormControl className={!isValid && "invalid"}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</FormControl>
```

The other way which is more complex and scalable? It's in the ``CourseInput.js``

If you want to use media queries, you simply add like a normal css file.
````jsx
const FormControl = styled.div`
  margin: 0.5rem 0;
  background-color: blue;
  
  @media (min-width: 768px) {
    width: auto;
    background-color: yellow;
  }
`;
````

### CSS Modules

### Questions
1. Podemos mezclar styled components & sass?