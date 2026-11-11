const Expense = ({ transactions }) => {
  const total_expense = transactions.filter(
    (transaction) => transaction.getType == "expense",
  );
  // .reduce((sum, trxAmoutn) => sum + parseFloat(trxAmoutn.getTrxnAmount), 0);
  console.log("expense", total_expense);

  const expenseAmount = total_expense.reduce(
    (sum, trxAmoutn) => sum + parseFloat(trxAmoutn.getTrxnAmount),
    0,
  );
  console.log(expenseAmount);

  return (
    <div className="card bg-base-200 card-md shadow-sm border-t-4 border-red-500">
      <div className="card-body">
        <h2 className="text-2xl font-bold">Expense</h2>
        <h2 className="text-2xl font-semibold text-red-600">
          <span className="font-thin">BDT</span> {expenseAmount}
        </h2>
      </div>
    </div>
  );
};

export default Expense;
