import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = props => {

    const [isEditing, setIsEditing] = useState(false);

    const submitExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData);
        stopEditingHandler();
    }

    const StartEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            { !isEditing && <button onClick={StartEditingHandler}>Add New Expense</button> }
            { isEditing && <ExpenseForm onCancel={stopEditingHandler} onSubmitExpenseData={submitExpenseDataHandler} /> }
        </div>
    )
}

export default NewExpense;