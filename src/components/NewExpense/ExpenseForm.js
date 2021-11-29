import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {

    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleChangeHandler = e => {
        console.log(e.target.value);
        // setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // });
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value}
        });
    }

    const amountChangeHandler = e => {
        // setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value}
        });
    }

    const dateChangeHandler = e => {
        // setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: e.target.value}
        });
    }

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        }

        props.onSubmitExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    }

    const onCancelHandler = () => {
        setExpenseForm(initial_button)
    }

    const onClickHandler = () => {
        setExpenseForm(<form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2023-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onCancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>)
    }

    let initial_button = <button onClick={onClickHandler}>Add new Expense</button>

    const [expenseForm, setExpenseForm] = useState(initial_button);

    return expenseForm;
}

export default ExpenseForm;