import { useState } from 'react';
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = props => {

  const [filteredYear, setFilteredYear] = useState('2021');
  const [filteredItems, setFilteredItems] = useState(props.items);

  const onYearSelectedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilteredItems(props.items.filter(item => item.date.getFullYear() == selectedYear))
  }

  console.log(filteredItems);

  return( 
    <>
      <Card className="expenses">
        <ExpenseFilter filterYear={filteredYear} onYearSelected={onYearSelectedHandler} />
        {
          filteredItems.map(expense => <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)
        }
      </Card>
    </>
  )
}

export default Expenses;