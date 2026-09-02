export function formatCurrency(value) {
  return Number(value).toFixed(2);
}

export function calculateTotal(expenses) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return Number(total.toFixed(2));
}

export function renderExpenses(expenses, expenseTableBody, expenseTotal) {
  expenseTableBody.innerHTML = '';

  expenses.forEach((expense) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = expense.name;
    row.appendChild(nameCell);

    const amountCell = document.createElement('td');
    amountCell.textContent = `$${formatCurrency(expense.amount)}`;
    row.appendChild(amountCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = expense.category;
    row.appendChild(categoryCell);

    expenseTableBody.appendChild(row);
  });

  expenseTotal.textContent = formatCurrency(calculateTotal(expenses));
