import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {

    const submitExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;