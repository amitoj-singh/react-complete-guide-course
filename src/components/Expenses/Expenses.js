import { useState } from 'react';
import Card from '../UI/Card'
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const onYearSelectedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredItems = props.items.filter(item => 
    item.date.getFullYear().toString() === filteredYear
  );  

  return( 
    <>
      <Card className="expenses">
        <ExpenseFilter 
          filterYear={filteredYear} 
          onYearSelected={onYearSelectedHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </>
  )
}

export default Expenses;