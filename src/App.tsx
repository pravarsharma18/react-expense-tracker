import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Expense from "./components/Expense";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Groceries" },
    { id: 2, description: "Asd", amount: 15, category: "Utilities" },
    { id: 3, description: "Asd1", amount: 25, category: "Entertainment" },
    { id: 4, description: "Asd2", amount: 25, category: "Utilities" },
    { id: 5, description: "Asd3", amount: 35, category: "Groceries" },
    { id: 6, description: "Asd4", amount: 10.36, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  
  return (
    <div className="container">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => handleDelete(id)}
      />
    </div>
  );
}

export default App;
