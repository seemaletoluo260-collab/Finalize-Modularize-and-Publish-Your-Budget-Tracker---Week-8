import { calculateTotal, renderExpenses } from './budget.js';

const expenses = [
  { name: 'Rent', amount: 950, category: 'Housing' },
  { name: 'Food', amount: 120, category: 'Groceries' },
  { name: 'Transport', amount: 60, category: 'Travel' },
  { name: 'Internet', amount: 80, category: 'Utilities' },
  { name: 'Entertainment', amount: 45, category: 'Leisure' },
  { name: 'Utilities', amount: 130, category: 'Bills' }
];

const expenseTableBody = document.getElementById('expense-table-body');
const expenseTotal = document.getElementById('expense-total');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const addExpenseButton = document.getElementById('add-expense');

function addExpense() {
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value.trim();

  if (!name || Number.isNaN(amount) || amount < 0 || !category) {
    alert('Please enter a valid name, amount, and category.');
    return;
  }

  expenses.push({
    name,
    amount,
    category
  });

  nameInput.value = '';
  amountInput.value = '';
  categoryInput.value = '';
  nameInput.focus();

  renderExpenses(expenses, expenseTableBody, expenseTotal);
}

addExpenseButton.addEventListener('click', addExpense);

renderExpenses(expenses, expenseTableBody, expenseTotal);

const monthlyBudget = 2200;
const remainingBudget = monthlyBudget - calculateTotal(expenses);
const budgetStatus = remainingBudget >= 0 ? 'On track' : 'Over budget';
console.log(`Monthly budget: $${monthlyBudget.toFixed(2)}`);
console.log(`Remaining budget: $${remainingBudget.toFixed(2)}`);
console.log(`Budget status: ${budgetStatus}`);
