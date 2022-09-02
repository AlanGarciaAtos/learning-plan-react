import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <section className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </section>
  );
};

export default NewExpense;
