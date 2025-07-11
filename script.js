//2. storing the expenses
let expenses = []; // Array for storing all expense objects

// Adding a new expense when the form is submitted
function addExpense(event) {
  event.preventDefault(); // Prevents page reload

  const nameInput = document.getElementById('expense-name');
  const amountInput = document.getElementById('expense-amount');
  const name = nameInput.value.trim();
  const amount = Number(amountInput.value);

  // Input validation
  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and a positive amount ");
    return;
  }

  // Creating the expense object and add it to the array
  const expense = { name: name, amount: amount };
  expenses.push(expense);

  // Clearing the input fields for the next entry
  nameInput.value = "";
  amountInput.value = "";

  renderExpenses();
  updateTotal();
}
document.getElementById('expense-form').addEventListener('submit', addExpense);

//3.Displaying the List of Expenses
function renderExpenses() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = ""; // Clearing the current list
  expenses.forEach(function(expense, index) {
    const li = document.createElement('li');
    li.innerHTML = `<span>🌸 ${expense.name}: <b>${expense.amount.toLocaleString()}</b> Ksh</span>
      <button class="delete-btn" onclick="deleteExpense(${index})">🗑️</button>`;
    expenseList.appendChild(li);
  });
}

//4.Showing the Total Amount Spent 
function updateTotal() {
  const total = expenses.reduce(function(sum, expense) {
    return sum + expense.amount;
  }, 0);
  document.getElementById('total-amount').textContent = total.toLocaleString();
}

//5. Code Organization and Best Practices
// Deleting an expense by index 
function deleteExpense(index) {
  expenses.splice(index, 1); // Removing the item from the array
  renderExpenses();          // Updating the list display
  updateTotal();             // Updating the total
}
// Initial rendering when the page loads
renderExpenses();
updateTotal();
